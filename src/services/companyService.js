// src/services/companyService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Updated company data with Frontlines Media and MNC companies
const mockCompanies = [
  {
    id: 1,
    name: 'Frontlines Media',
    industry: 'EduTech',
    location: 'Hyderabad, Telangana',
    size: 'Medium',
    founded: 2018,
    website: 'https://frontlinesmedia.in',
    description: 'Provides job-oriented courses, career guidance, and internships in tech skills like AI, Data Science, and Full Stack development'
  },
  {
    id: 2,
    name: 'Microsoft India',
    industry: 'Technology',
    location: 'Hyderabad, Telangana',
    size: 'Large',
    founded: 1990,
    website: 'https://microsoft.com',
    description: 'Global technology company with major development center in Hyderabad'
  },
  {
    id: 3,
    name: 'Google India',
    industry: 'Technology',
    location: 'Bangalore, Karnataka',
    size: 'Large',
    founded: 1998,
    website: 'https://google.com',
    description: 'World leading technology company with largest campus outside US in Bangalore'
  },
  {
    id: 4,
    name: 'Infosys',
    industry: 'Technology',
    location: 'Bangalore, Karnataka',
    size: 'Large',
    founded: 1981,
    website: 'https://infosys.com',
    description: 'Global leader in consulting, technology and outsourcing solutions'
  },
  {
    id: 5,
    name: 'TCS - Tata Consultancy Services',
    industry: 'Technology',
    location: 'Chennai, Tamil Nadu',
    size: 'Large',
    founded: 1968,
    website: 'https://tcs.com',
    description: 'Largest IT services company in India with global presence'
  },
  {
    id: 6,
    name: 'Amazon India',
    industry: 'E-commerce & Technology',
    location: 'Hyderabad, Telangana',
    size: 'Large',
    founded: 1994,
    website: 'https://amazon.in',
    description: 'Global e-commerce giant with major operations and development centers in India'
  },
  {
    id: 7,
    name: 'Wipro',
    industry: 'Technology',
    location: 'Bangalore, Karnataka',
    size: 'Large',
    founded: 1945,
    website: 'https://wipro.com',
    description: 'Leading global information technology, consulting and business process services company'
  },
  {
    id: 8,
    name: 'Tech Mahindra',
    industry: 'Technology',
    location: 'Chennai, Tamil Nadu',
    size: 'Large',
    founded: 1986,
    website: 'https://techmahindra.com',
    description: 'Digital transformation, consulting and business re-engineering services'
  },
  {
    id: 9,
    name: 'Accenture India',
    industry: 'Consulting & Technology',
    location: 'Bangalore, Karnataka',
    size: 'Large',
    founded: 1989,
    website: 'https://accenture.com',
    description: 'Global professional services company with strong presence in India'
  },
  {
    id: 10,
    name: 'Cognizant',
    industry: 'Technology',
    location: 'Chennai, Tamil Nadu',
    size: 'Large',
    founded: 1994,
    website: 'https://cognizant.com',
    description: 'Multinational technology company providing IT services and consulting'
  },
  {
    id: 11,
    name: 'Deloitte India',
    industry: 'Consulting',
    location: 'Hyderabad, Telangana',
    size: 'Large',
    founded: 1845,
    website: 'https://deloitte.com',
    description: 'Big Four accounting organization and professional services network'
  },
  {
    id: 12,
    name: 'IBM India',
    industry: 'Technology',
    location: 'Bangalore, Karnataka',
    size: 'Large',
    founded: 1911,
    website: 'https://ibm.com',
    description: 'Multinational technology and consulting corporation'
  },
  {
    id: 13,
    name: 'Capgemini India',
    industry: 'Technology',
    location: 'Chennai, Tamil Nadu',
    size: 'Large',
    founded: 1967,
    website: 'https://capgemini.com',
    description: 'Global leader in consulting, technology services and digital transformation'
  },
  {
    id: 14,
    name: 'HCL Technologies',
    industry: 'Technology',
    location: 'Chennai, Tamil Nadu',
    size: 'Large',
    founded: 1976,
    website: 'https://hcltech.com',
    description: 'Global technology company offering integrated portfolio of products and services'
  },
  {
    id: 15,
    name: 'Oracle India',
    industry: 'Technology',
    location: 'Bangalore, Karnataka',
    size: 'Large',
    founded: 1977,
    website: 'https://oracle.com',
    description: 'Multinational computer technology corporation specializing in database software'
  }
];

export const companyService = {
  async getCompanies() {
    try {
      // For demo, return updated mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockCompanies), 1000);
      });
    } catch (error) {
      throw new Error('Failed to fetch companies');
    }
  },

  async getCompanyById(id) {
    try {
      const company = mockCompanies.find(c => c.id === parseInt(id));
      if (!company) throw new Error('Company not found');
      return company;
    } catch (error) {
      throw new Error('Failed to fetch company');
    }
  }
};