// src/components/CompanyCard.jsx
import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <div className="company-header">
        <div className="company-name-section">
          <h3 className="company-name">
            <a 
              href={company.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="company-website-link"
              title={company.name}
            >
              {company.name}
            </a>
          </h3>
          <span className="website-text">Click name to visit website</span>
        </div>
        <span className={`company-size-badge ${company.size.toLowerCase()}`}>
          {company.size}
        </span>
      </div>
      
      <div className="company-details">
        <div className="company-info">
          <span className="info-label">Industry:</span>
          <span className="info-value" title={company.industry}>{company.industry}</span>
        </div>
        
        <div className="company-info">
          <span className="info-label">Location:</span>
          <span className="info-value" title={company.location}>{company.location}</span>
        </div>
        
        <div className="company-info">
          <span className="info-label">Founded:</span>
          <span className="info-value">{company.founded}</span>
        </div>
      </div>
      
      <p className="company-description" title={company.description}>
        {company.description}
      </p>
    </div>
  );
};

export default CompanyCard;