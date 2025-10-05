// src/context/CompanyContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { companyService } from '../services/companyService';

const CompanyContext = createContext();

const initialState = {
  companies: [],
  filteredCompanies: [],
  loading: false,
  error: null,
  filters: {
    name: '',
    industry: '',
    location: '',
    size: ''
  }
};

const companyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'SET_COMPANIES':
      return { 
        ...state, 
        companies: action.payload,
        filteredCompanies: action.payload,
        loading: false 
      };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    
    case 'SET_FILTERS':
      const newFilters = { ...state.filters, ...action.payload };
      const filtered = filterCompanies(state.companies, newFilters);
      return { 
        ...state, 
        filters: newFilters, 
        filteredCompanies: filtered 
      };
    
    case 'CLEAR_FILTERS':
      return { 
        ...state, 
        filters: initialState.filters,
        filteredCompanies: state.companies 
      };
    
    default:
      return state;
  }
};

const filterCompanies = (companies, filters) => {
  return companies.filter(company => {
    const nameMatch = !filters.name || 
      company.name.toLowerCase().includes(filters.name.toLowerCase());
    
    const industryMatch = !filters.industry || 
      company.industry === filters.industry;
    
    const locationMatch = !filters.location || 
      company.location.toLowerCase().includes(filters.location.toLowerCase());
    
    const sizeMatch = !filters.size || 
      company.size === filters.size;
    
    return nameMatch && industryMatch && locationMatch && sizeMatch;
  });
};

export const CompanyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(companyReducer, initialState);

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const companies = await companyService.getCompanies();
      dispatch({ type: 'SET_COMPANIES', payload: companies });
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: error.message || 'Failed to load companies' 
      });
    }
  };

  const setFilters = (filters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  const value = {
    ...state,
    setFilters,
    clearFilters,
    refetch: loadCompanies
  };

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
};