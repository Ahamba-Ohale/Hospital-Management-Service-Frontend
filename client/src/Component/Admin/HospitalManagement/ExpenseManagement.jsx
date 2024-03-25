import React, { useState } from 'react';
import Select from 'react-select';

const ExpenseManagement = () => {
  // State variables for managing expense categories, budget, and employee salaries
  const [expenses, setExpenses] = useState([
    { category: 'Facility Maintenance', amount: 10000 },
    { category: 'Equipment Purchases', amount: 20000 },
    { category: 'Utilities', amount: 8000 },
    // Add more expense categories as needed
  ]);

  const [budget, setBudget] = useState({
    totalBudget: 100000,
    allocatedBudget: {
      'Facility Maintenance': 0,
      'Equipment Purchases': 0,
      'Utilities': 0,
      // Add more categories here
    }
  });

  const [employeeSalaries, setEmployeeSalaries] = useState(0);

  // Function to update budget allocation
  const handleBudgetAllocation = (category, amount) => {
    setBudget(prevBudget => ({
      ...prevBudget,
      allocatedBudget: {
        ...prevBudget.allocatedBudget,
        [category]: amount
      }
    }));
  };

  // Function to handle processing of employee salaries
  const handleSalaryProcessing = (amount) => {
    setEmployeeSalaries(amount);
  };

  return (
    <div className="expense-management">
      <h2>Expense Management</h2>
      
      {/* Display expense categories and allocated budget */}
      <div className="expense-list">
        <h3>Expense Categories</h3>
        <ul>
          {expenses.map(expense => (
            <li key={expense.category}>
              {expense.category}: ${expense.amount}
            </li>
          ))}
        </ul>
      </div>


      {/* Employee salary processing */}
      <div className="salary-processing">
        <h3>Employee Salaries</h3>
        <div className="salary-form">
          <table>
            <thead>
              <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Nurse</td>
                <td>30,000</td>
                <td>Paid</td>
                <td>
                  <Select />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Display total budget and remaining budget */}
      <div className="budget-summary">
        <h3>Budget Summary</h3>
        <p>Total Budget: ${budget.totalBudget}</p>
        <p>Total Expenses: ${Object.values(budget.allocatedBudget).reduce((acc, curr) => acc + parseInt(curr), 0)}</p>
        <p>Remaining Budget: ${budget.totalBudget - Object.values(budget.allocatedBudget).reduce((acc, curr) => acc + parseInt(curr), 0) - employeeSalaries}</p>
      </div>
    </div>
  );
};

export default ExpenseManagement;
