import React, { useState, useMemo } from 'react';
import { X, ArrowUpDown, AlertCircle } from 'lucide-react';
import { sampleProjects } from '../../../Data/SampleProjects';
import './ManagerDashboard.css';

const ManagerDashboard = ({ isOpen, onClose }) => {
  const [sortField, setSortField] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const sortedProjects = useMemo(() => {
    let filtered = [...sampleProjects]; // Using Sample Data here for demonstration we'll still use sqlite @Haron
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      return sortDirection === 'asc'
        ? aValue - bValue
        : bValue - aValue;
    });
  }, [sampleProjects, sortField, sortDirection, searchTerm]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

//   if (!isOpen) return null;

  const SortButton = ({ field, label }) => (
    <button
      onClick={() => handleSort(field)}
      className="sort-button"
    >
      {label}
      <ArrowUpDown className="sort-icon" />
    </button>
  );

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Projects Overview</h2>
            <button
              onClick={onClose}
              className="close-button"
              aria-label="Close modal"
            >
              <X />
            </button>
          </div>

          <input
            type="text"
            placeholder="Search by project ID or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <div className="table-container">
            <table className="projects-table">
              <thead>
                <tr className="table-header">
                  <th><SortButton field="id" label="Project ID" /></th>
                  <th><SortButton field="name" label="Name" /></th>
                  <th><SortButton field="pendingIssues" label="Pending Issues" /></th>
                  <th><SortButton field="highPriority" label="High Priority" /></th>
                  <th><SortButton field="lastUpdated" label="Last Updated" /></th>
                  <th><SortButton field="status" label="Status" /></th>
                </tr>
              </thead>
              <tbody>
                {sortedProjects.map((project) => (
                  <tr key={project.id} className="table-row">
                    <td className="table-cell">{project.id}</td>
                    <td className="table-cell">{project.name}</td>
                    <td className="table-cell">
                      <span>
                        {project.pendingIssues}
                        {project.pendingIssues > 10 && (
                          <AlertCircle className="alert-icon" />
                        )}
                      </span>
                    </td>
                    <td className="table-cell">
                      <span>{project.highPriority}</span>
                    </td>
                    <td className="table-cell">{project.lastUpdated}</td>
                    <td className="table-cell">
                      <span className="status-badge">{project.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;