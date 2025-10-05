// src/components/CompanyFilters.jsx
import React from 'react';
import { useCompany } from '../context/CompanyContext';
import './CompanyFilters.css';

const CompanyFilters = () => {
  const { filters, setFilters, clearFilters } = useCompany();

 // In CompanyFilters.jsx, update the industries array:
const industries = [
  'Technology', 
  'Media & Entertainment', 
  'Healthcare', 
  'Energy', 
  'Education', 
  'Food & Beverage', 
  'Finance',
  'E-commerce & Technology',
  'Consulting'
];
  const sizes = ['Small', 'Medium', 'Large'];

  const handleFilterChange = (filterType, value) => {
    setFilters({ [filterType]: value });
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3>Filter Companies</h3>
        <button 
          className="clear-filters-btn"
          onClick={clearFilters}
        >
          Clear All
        </button>
      </div>
      
      <div className="filters-grid">
        <div className="filter-group">
          <label htmlFor="name-filter">Company Name</label>
          <input
            id="name-filter"
            type="text"
            placeholder="Search by name..."
            value={filters.name}
            onChange={(e) => handleFilterChange('name', e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="industry-filter">Industry</label>
          <select
            id="industry-filter"
            value={filters.industry}
            onChange={(e) => handleFilterChange('industry', e.target.value)}
            className="filter-select"
          >
            <option value="">All Industries</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="location-filter">Location</label>
          <input
            id="location-filter"
            type="text"
            placeholder="Search by location..."
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="size-filter">Company Size</label>
          <select
            id="size-filter"
            value={filters.size}
            onChange={(e) => handleFilterChange('size', e.target.value)}
            className="filter-select"
          >
            <option value="">All Sizes</option>
            {sizes.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CompanyFilters;