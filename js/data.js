// Mock employee data - This simulates data that would be passed from Freemarker
const mockEmployees = [
    { id: 1, firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', department: 'HR', role: 'Manager' },
    { id: 2, firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', department: 'IT', role: 'Developer' },
    { id: 3, firstName: 'Charlie', lastName: 'Lee', email: 'charlie@example.com', department: 'Finance', role: 'Analyst' },
    { id: 4, firstName: 'Diana', lastName: 'Martinez', email: 'diana@example.com', department: 'Marketing', role: 'Coordinator' },
    { id: 5, firstName: 'Edward', lastName: 'Brown', email: 'edward@example.com', department: 'IT', role: 'Senior Developer' },
    { id: 6, firstName: 'Fiona', lastName: 'Davis', email: 'fiona@example.com', department: 'HR', role: 'Recruiter' },
    { id: 7, firstName: 'George', lastName: 'Wilson', email: 'george@example.com', department: 'Finance', role: 'Manager' },
    { id: 8, firstName: 'Helen', lastName: 'Taylor', email: 'helen@example.com', department: 'Marketing', role: 'Manager' },
    { id: 9, firstName: 'Ian', lastName: 'Anderson', email: 'ian@example.com', department: 'IT', role: 'DevOps Engineer' },
    { id: 10, firstName: 'Julia', lastName: 'Thomas', email: 'julia@example.com', department: 'HR', role: 'Specialist' },
    { id: 11, firstName: 'Kevin', lastName: 'Jackson', email: 'kevin@example.com', department: 'Finance', role: 'Accountant' },
    { id: 12, firstName: 'Laura', lastName: 'White', email: 'laura@example.com', department: 'Marketing', role: 'Designer' },
    { id: 13, firstName: 'Michael', lastName: 'Garcia', email: 'michael@example.com', department: 'Operations', role: 'Manager' },
    { id: 14, firstName: 'Nancy', lastName: 'Rodriguez', email: 'nancy@example.com', department: 'Sales', role: 'Representative' },
    { id: 15, firstName: 'Oliver', lastName: 'Chen', email: 'oliver@example.com', department: 'IT', role: 'System Admin' }
];

// Department and role options for dropdowns
const departments = ['HR', 'IT', 'Finance', 'Marketing', 'Operations', 'Sales'];
const roles = ['Manager', 'Developer', 'Analyst', 'Coordinator', 'Senior Developer', 'Recruiter', 'DevOps Engineer', 'Specialist', 'Accountant', 'Designer', 'Representative', 'System Admin'];

// Initialize employees data - use Freemarker data if available, otherwise use mock data
window.employees = window.initialEmployees || mockEmployees;