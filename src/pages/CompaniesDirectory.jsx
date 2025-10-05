// src/pages/CompaniesDirectory.jsx
import React, { useState } from 'react';
import { useCompany } from '../context/CompanyContext';
import CompanyFilters from '../components/CompanyFilters';
import CompanyTable from '../components/CompanyTable';
import CompanyCard from '../components/CompanyCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import './CompaniesDirectory.css';

const CompaniesDirectory = () => {
  const { filteredCompanies, loading, error } = useCompany();
  const [viewMode, setViewMode] = useState('table');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="companies-directory">
      <CompanyFilters />
      
      <div className="view-controls">
        <div className="results-info">
          Showing {filteredCompanies.length} companies
        </div>
        
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
          >
            Table
          </button>
          <button
            className={`toggle-btn ${viewMode === 'card' ? 'active' : ''}`}
            onClick={() => setViewMode('card')}
          >
            Cards
          </button>
        </div>
      </div>

      <div className="companies-content">
        {filteredCompanies.length === 0 ? (
          <div className="no-results">
            <h3>No companies found</h3>
            <p>Try adjusting your filters</p>
          </div>
        ) : viewMode === 'table' ? (
          <CompanyTable companies={filteredCompanies} />
        ) : (
          <div className="companies-grid">
            {filteredCompanies.map(company => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompaniesDirectory;