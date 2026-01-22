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
  background: ${(props) => {
    if (props.$isOldLead) {
      return props.$highlightColor === "pink"
        ? "rgba(255, 64, 139, 0.15)"
        : "rgba(26, 77, 58, 0.15)";
    }
    return "transparent";
  }};
  border-left: ${(props) =>
    props.$isOldLead ? `3px solid ${props.$highlightColor === "pink" ? colours.pink : colours.darkGreen}` : "none"};

  &:hover {
    background: ${(props) => {
      if (props.$isOldLead) {
        return props.$highlightColor === "pink"
          ? "rgba(255, 64, 139, 0.25)"
          : "rgba(26, 77, 58, 0.25)";
      }
      return colours.lightGrey;
    }};
  }
`;

const StyledOldLeadBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: ${(props) => (props.$highlightColor === "pink" ? colours.pink : colours.darkGreen)};
  color: ${colours.white};
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  margin-left: 0.5rem;
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
  margin-right: 0.5rem;

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

const StyledDeleteButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${colours.red};
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
    background: #c41e1e;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const StyledActionsCell = styled(StyledTableCell)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
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

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colours.lightGrey};
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledPaginationInfo = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: ${colours.darkGrey};
`;

const StyledPaginationControls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const StyledPaginationButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${colours.white};
  color: ${colours.darkGrey};
  border: 1px solid ${colours.lightGrey};
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: ${colours.pink};
    color: ${colours.white};
    border-color: ${colours.pink};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    background: ${colours.darkGreen};
    color: ${colours.white};
    border-color: ${colours.darkGreen};
  }
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

const calculateDaysSince = (timestamp) => {
  if (!timestamp) return null;
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const LeadsTable = ({
  leads,
  allLeads,
  loading,
  onUpdateLead,
  onDeleteLead,
  filterStatus,
  onFilterChange,
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
}) => {
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


  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, allLeads?.length || leads.length);

    return (
      <StyledPagination>
        <StyledPaginationInfo>
          Showing {startIndex}-{endIndex} of {allLeads?.length || leads.length} leads
        </StyledPaginationInfo>
        <StyledPaginationControls>
          <StyledPaginationButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </StyledPaginationButton>
          {startPage > 1 && (
            <>
              <StyledPaginationButton onClick={() => onPageChange(1)}>1</StyledPaginationButton>
              {startPage > 2 && <span style={{ padding: "0 0.5rem" }}>...</span>}
            </>
          )}
          {pageNumbers.map((page) => (
            <StyledPaginationButton
              key={page}
              onClick={() => onPageChange(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </StyledPaginationButton>
          ))}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span style={{ padding: "0 0.5rem" }}>...</span>}
              <StyledPaginationButton onClick={() => onPageChange(totalPages)}>
                {totalPages}
              </StyledPaginationButton>
            </>
          )}
          <StyledPaginationButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </StyledPaginationButton>
        </StyledPaginationControls>
      </StyledPagination>
    );
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
              const daysSince = calculateDaysSince(lead.createdAt);
              const isOldLead = daysSince !== null && daysSince > 10;
              const highlightColor = daysSince !== null && daysSince > 10 ? (daysSince % 2 === 0 ? "pink" : "green") : null;
              
              return (
                <StyledTableRow
                  key={lead.id}
                  $isOldLead={isOldLead}
                  $highlightColor={highlightColor}
                >
                  <StyledTableCell>
                    {formatDate(lead.createdAt)}
                    {isOldLead && (
                      <StyledOldLeadBadge $highlightColor={highlightColor}>
                        {daysSince}+ days
                      </StyledOldLeadBadge>
                    )}
                  </StyledTableCell>
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
                  <StyledActionsCell>
                    <StyledUpdateButton
                      onClick={() => handleUpdate(lead.id)}
                      disabled={!hasChanges}
                    >
                      Update
                    </StyledUpdateButton>
                    <StyledDeleteButton
                      onClick={() => onDeleteLead && onDeleteLead(lead.id)}
                    >
                      Delete
                    </StyledDeleteButton>
                  </StyledActionsCell>
                </StyledTableRow>
              );
            })}
          </StyledTableBody>
        </StyledTable>
      )}
      {renderPagination()}
    </div>
  );
};

export default LeadsTable;