import React, { useState } from "react";
import styled from "styled-components";
import { colours } from "../../utils/style.utils";

const StyledFilters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledFilterLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colours.darkGrey};
`;

const StyledSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${colours.lightGrey};
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  background: ${colours.white};
  color: ${colours.darkGrey};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colours.pink};
    box-shadow: 0 0 0 3px rgba(255, 64, 139, 0.1);
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
`;

const StyledTableHead = styled.thead`
  background: ${colours.lightGrey};
`;

const StyledTableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: ${colours.darkGrey};
  border-bottom: 2px solid ${colours.darkGrey};
`;

const StyledTableBody = styled.tbody``;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${colours.lightGrey};

  &:hover {
    background: ${colours.lightGrey};
  }
`;

const StyledTableCell = styled.td`
  padding: 1rem;
  color: ${colours.darkGrey};
`;

const StyledStatusSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid ${colours.lightGrey};
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  background: ${colours.white};
  color: ${colours.darkGrey};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colours.pink};
    box-shadow: 0 0 0 3px rgba(255, 64, 139, 0.1);
  }
`;

const StyledNotesInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${colours.lightGrey};
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  background: ${colours.white};
  color: ${colours.darkGrey};
  width: 100%;
  min-width: 200px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colours.pink};
    box-shadow: 0 0 0 3px rgba(255, 64, 139, 0.1);
  }
`;

const StyledUpdateButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${colours.darkGreen};
  color: ${colours.white};
  border: none;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${colours.pink};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const StyledEmptyState = styled.div`
  padding: 3rem;
  text-align: center;
  color: ${colours.darkGrey};
  opacity: 0.6;
  font-family: "Inter", sans-serif;
`;

const StyledLoading = styled.div`
  padding: 3rem;
  text-align: center;
  color: ${colours.darkGrey};
  font-family: "Inter", sans-serif;
`;

const formatDate = (timestamp) => {
  if (!timestamp) return "N/A";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const LeadsTable = ({ leads, loading, onUpdateLead, filterStatus, onFilterChange }) => {
  const [editingStates, setEditingStates] = useState({});

  const handleFieldChange = (leadId, field, value) => {
    setEditingStates((prev) => ({
      ...prev,
      [leadId]: {
        ...prev[leadId],
        [field]: value,
      },
    }));
  };

  const handleUpdate = async (leadId) => {
    const edits = editingStates[leadId];
    if (!edits) return;

    try {
      await onUpdateLead(leadId, edits);
      // Clear the editing state for this lead
      setEditingStates((prev) => {
        const newState = { ...prev };
        delete newState[leadId];
        return newState;
      });
    } catch (error) {
      console.error("Error updating lead:", error);
      alert("Failed to update lead. Please try again.");
    }
  };

  const getFieldValue = (lead, field) => {
    if (editingStates[lead.id] && editingStates[lead.id][field] !== undefined) {
      return editingStates[lead.id][field];
    }
    return lead[field] || "";
  };

  if (loading) {
    return <StyledLoading>Loading leads...</StyledLoading>;
  }

  return (
    <div>
      <StyledFilters>
        <StyledFilterLabel>Filter by Status:</StyledFilterLabel>
        <StyledSelect value={filterStatus} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="Sent">Sent</option>
          <option value="Replied">Replied</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </StyledSelect>
      </StyledFilters>

      {leads.length === 0 ? (
        <StyledEmptyState>No leads found.</StyledEmptyState>
      ) : (
        <StyledTable>
          <StyledTableHead>
            <tr>
              <StyledTableHeader>Date</StyledTableHeader>
              <StyledTableHeader>Business</StyledTableHeader>
              <StyledTableHeader>Contact</StyledTableHeader>
              <StyledTableHeader>Email</StyledTableHeader>
              <StyledTableHeader>Town</StyledTableHeader>
              <StyledTableHeader>Source</StyledTableHeader>
              <StyledTableHeader>Status</StyledTableHeader>
              <StyledTableHeader>Notes</StyledTableHeader>
              <StyledTableHeader>Actions</StyledTableHeader>
            </tr>
          </StyledTableHead>
          <StyledTableBody>
            {leads.map((lead) => {
              const hasChanges = editingStates[lead.id] && Object.keys(editingStates[lead.id]).length > 0;
              return (
                <StyledTableRow key={lead.id}>
                  <StyledTableCell>{formatDate(lead.createdAt)}</StyledTableCell>
                  <StyledTableCell>
                    {lead.website ? (
                      <a
                        href={lead.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: colours.pink, textDecoration: "none" }}
                      >
                        {lead.businessName}
                      </a>
                    ) : (
                      lead.businessName
                    )}
                  </StyledTableCell>
                  <StyledTableCell>{lead.contactName}</StyledTableCell>
                  <StyledTableCell>
                    <a
                      href={`mailto:${lead.email}`}
                      style={{ color: colours.pink, textDecoration: "none" }}
                    >
                      {lead.email}
                    </a>
                  </StyledTableCell>
                  <StyledTableCell>{lead.town}</StyledTableCell>
                  <StyledTableCell>{lead.source}</StyledTableCell>
                  <StyledTableCell>
                    <StyledStatusSelect
                      value={getFieldValue(lead, "status")}
                      onChange={(e) => handleFieldChange(lead.id, "status", e.target.value)}
                    >
                      <option value="Sent">Sent</option>
                      <option value="Replied">Replied</option>
                      <option value="Won">Won</option>
                      <option value="Lost">Lost</option>
                    </StyledStatusSelect>
                  </StyledTableCell>
                  <StyledTableCell>
                    <StyledNotesInput
                      type="text"
                      value={getFieldValue(lead, "notes")}
                      onChange={(e) => handleFieldChange(lead.id, "notes", e.target.value)}
                      placeholder="Add notes..."
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    <StyledUpdateButton
                      onClick={() => handleUpdate(lead.id)}
                      disabled={!hasChanges}
                    >
                      Update
                    </StyledUpdateButton>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </StyledTableBody>
        </StyledTable>
      )}
    </div>
  );
};

export default LeadsTable;