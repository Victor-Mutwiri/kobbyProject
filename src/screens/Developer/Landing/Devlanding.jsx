import { useState } from 'react';
import './Devlanding.css';

const Devlanding = () => {
    const [selectedOption, setSelectedOption] = useState('Total Issues');

    const handleMenuClick = (option) => {
        setSelectedOption(option);
    };

    const mockData = {
        totalIssues: [
            { id: '001', type: 'Bug', priority: 'High', status: 'Open', assignedTo: 'dev1@example.com' },
            { id: '002', type: 'Feature', priority: 'Medium', status: 'Closed', assignedTo: 'dev2@example.com' },
            { id: '003', type: 'Bug', priority: 'Low', status: 'Open', assignedTo: 'dev3@example.com' },
        ],
        openIssues: [
            { type: 'Bug', issueAt: '2025-01-14', priority: 'High' },
            { type: 'Feature', issueAt: '2025-01-13', priority: 'Medium' },
        ],
        escalatedIssues: [
            { id: '001', type: 'Bug', priority: 'High', escalatedBy: 'manager@example.com' },
        ],
        summary: {
            total: 10,
            open: 6,
            closed: 4,
            escalated: 2,
        },
    };

    const renderContent = () => {
        switch (selectedOption) {
            case 'Total Issues':
                return (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Issue ID</th>
                                <th>Type</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockData.totalIssues.map((issue, index) => (
                                <tr key={index}>
                                    <td>{issue.id}</td>
                                    <td>{issue.type}</td>
                                    <td>{issue.priority}</td>
                                    <td>{issue.status}</td>
                                    <td>{issue.assignedTo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
            case 'Open Issues':
                return (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Issue At</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockData.openIssues.map((issue, index) => (
                                <tr key={index}>
                                    <td>{issue.type}</td>
                                    <td>{issue.issueAt}</td>
                                    <td>{issue.priority}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
            case 'Escalated Issues':
                return (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Issue ID</th>
                                <th>Type</th>
                                <th>Priority</th>
                                <th>Escalated By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockData.escalatedIssues.map((issue, index) => (
                                <tr key={index}>
                                    <td>{issue.id}</td>
                                    <td>{issue.type}</td>
                                    <td>{issue.priority}</td>
                                    <td>{issue.escalatedBy}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
            case 'Summary':
                return (
                    <div className="summary-content">
                        <p><strong>Total Issues:</strong> {mockData.summary.total}</p>
                        <p><strong>Open Issues:</strong> {mockData.summary.open}</p>
                        <p><strong>Closed Issues:</strong> {mockData.summary.closed}</p>
                        <p><strong>Escalated Issues:</strong> {mockData.summary.escalated}</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="devlanding-container">
            <div className="sidebar">
                <button onClick={() => handleMenuClick('Total Issues')}>Total Issues</button>
                <button onClick={() => handleMenuClick('Open Issues')}>Open Issues</button>
                <button onClick={() => handleMenuClick('Escalated Issues')}>Escalated Issues</button>
                <button onClick={() => handleMenuClick('Summary')}>Summary</button>
            </div>
            <div className="content-area">
                <h2>{selectedOption}</h2>
                {renderContent()}
            </div>
        </div>
    );
};

export default Devlanding;
