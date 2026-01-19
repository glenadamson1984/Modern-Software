import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuth } from "../src/contexts/AuthContext";
import {
  collection,
  query,
  where,
  orderBy,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../src/config/firebase";
import { colours } from "../src/utils/style.utils";
import LoginForm from "../src/components/leads/LoginForm";
import LeadsForm from "../src/components/leads/LeadsForm";
import LeadsTable from "../src/components/leads/LeadsTable";

const StyledLeadsPage = styled.div`
  min-height: 100vh;
  background: ${colours.white};
  padding: 2rem;
`;

const StyledContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${colours.lightGrey};
`;

const StyledTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colours.darkGrey};
  margin: 0;
`;

const StyledLogoutButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${colours.pink};
  color: ${colours.white};
  border: none;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colours.darkGreen};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledSection = styled.div`
  background: ${colours.white};
  border: 1px solid ${colours.lightGrey};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const StyledSectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 1.5rem 0;
`;

const LeadsPage = () => {
  const { user, logout } = useAuth();
  const [leads, setLeads] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    // Always fetch all leads and filter client-side to avoid index issues
    const q = query(
      collection(db, "leads"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        let leadsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filter client-side based on status
        if (filterStatus !== "all") {
          leadsData = leadsData.filter((lead) => lead.status === filterStatus);
        }

        setLeads(leadsData);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching leads:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user, filterStatus]);

  const handleAddLead = async (leadData) => {
    try {
      await addDoc(collection(db, "leads"), {
        ...leadData,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding lead:", error);
      throw error;
    }
  };

  const handleUpdateLead = async (leadId, updates) => {
    try {
      await updateDoc(doc(db, "leads", leadId), {
        ...updates,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error updating lead:", error);
      throw error;
    }
  };

  if (!user) {
    return (
      <StyledLeadsPage>
        <StyledContainer>
          <LoginForm />
        </StyledContainer>
      </StyledLeadsPage>
    );
  }

  return (
    <StyledLeadsPage>
      <StyledContainer>
        <StyledHeader>
          <StyledTitle>Leads Management</StyledTitle>
          <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>
        </StyledHeader>

        <StyledContent>
          <StyledSection>
            <StyledSectionTitle>Add New Lead</StyledSectionTitle>
            <LeadsForm onSubmit={handleAddLead} />
          </StyledSection>

          <StyledSection>
            <StyledSectionTitle>Leads ({leads.length})</StyledSectionTitle>
            <LeadsTable
              leads={leads}
              loading={loading}
              onUpdateLead={handleUpdateLead}
              filterStatus={filterStatus}
              onFilterChange={setFilterStatus}
            />
          </StyledSection>
        </StyledContent>
      </StyledContainer>
    </StyledLeadsPage>
  );
};

export default LeadsPage;