// src/components/CompanyTable.jsx
import React, { useState } from 'react';
import './CompanyTable.css';

const CompanyTable = ({ companies }) => {
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedCompanies = [...companies].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (sortDirection === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const getSortIcon = (field) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="table-container">
      <table className="companies-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Company Name {getSortIcon('name')}
            </th>
            <th onClick={() => handleSort('industry')}>
              Industry {getSortIcon('industry')}
            </th>
            <th onClick={() => handleSort('location')}>
              Location {getSortIcon('location')}
            </th>
            <th onClick={() => handleSort('size')}>
              Size {getSortIcon('size')}
            </th>
            <th onClick={() => handleSort('founded')}>
              Founded {getSortIcon('founded')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCompanies.map(company => (
            <tr key={company.id}>
              <td>
                <div className="company-name-cell">
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="company-name-link"
                  >
                    <strong>{company.name}</strong>
                  </a>
                  <span className="website-hint">(Website)</span>
                </div>
              </td>
              <td>{company.industry}</td>
              <td>{company.location}</td>
              <td>
                <span className={`size-badge ${company.size.toLowerCase()}`}>
                  {company.size}
                </span>
              </td>
              <td>{company.founded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;