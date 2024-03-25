import React from 'react';

const RevenueTracking = () => {
  // Sample payment records and revenue streams data
  const paymentRecords = [
    { id: 1, type: 'Patient Payment', date:'21/11/2023', amount: 100 },
    { id: 2, type: 'Insurance Payment', date:'21/11/2023', amount: 200 },
    // Add more payment records as needed
  ];

  const revenueStreams = [
    { id: 1, category: 'Medical Services', month:'January', amount: 500 },
    { id: 2, category: 'Diagnostic Tests', month:'February', amount: 300 },
    // Add more revenue streams as needed
  ];

  return (
    <div className="revenue-tracking-container">
      <h2>Revenue Tracking</h2>

      {/* Payment Records Section */}
      <div className="payment-records-section">
        <h3>Payment Records</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentRecords.map(record => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.type}</td>
                <td>{record.date}</td>
                <td>${record.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Revenue Streams Section */}
      <div className="revenue-streams-section">
        <h3>Revenue Streams</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Month</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {revenueStreams.map(stream => (
              <tr key={stream.id}>
                <td>{stream.id}</td>
                <td>{stream.category}</td>
                <td>{stream.month}</td>
                <td>${stream.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueTracking;
