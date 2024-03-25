import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const MedicalSupplies = () => {
  // State variables for stock levels and reorder point
  const [stockLevels, setStockLevels] = useState({
    Bandages: 100,
    Syringes: 50,
    Gloves: 75,
    // Add more items as needed
  });

  const [reorderPoint, setReorderPoint] = useState({
    Bandages: 20,
    Syringes: 10,
    Gloves: 30,
    // Add more items as needed
  });

  useEffect(() => {
    // Check inventory levels periodically
    const intervalId = setInterval(() => {
      checkInventoryLevels();
    }, 60000); // Check every minute (adjust as needed)

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

  // Function to check inventory levels and trigger alerts
  const checkInventoryLevels = () => {
    // Iterate over each item and compare with reorder point
    Object.entries(stockLevels).forEach(([item, level]) => {
      if (level < reorderPoint[item]) {
        // Trigger alert/notification for the item
        alert(`Inventory level for ${item} is below the reorder point!`);
      }
    });
  };

  // Function to handle setting reorder point
  const handleSetReorderPoint = (itemName, value) => {
    setReorderPoint((prevState) => ({
      ...prevState,
      [itemName]: value,
    }));
  };

  return (
    <div className="medical-supplies-container">
      <h2>Medical Supplies Management</h2>

      {/* Inventory Tracking */}
      <div className="inventory-tracking">
        <h3>Inventory Tracking</h3>
        <div className="medicine">
          <h3>Medicine</h3>

          <table className="invoice-table">
            <thead>
              <tr>
                <th>
                  <b>Item</b>
                </th>
                <th>
                  <b>Item Price (Ngn)</b>
                </th>
                <th>
                  <b>Quantity</b>
                </th>
                <th>
                  <b>Expiry</b>
                </th>
                <th>
                  <b>Action</b>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(stockLevels).map(([item, quantity]) => (
                <tr key={item}>
                  <td>{item}</td>
                  <td>100</td>
                  <td>{quantity}</td>
                  <td>12/2/2025</td>
                  <td>
                    <div>
                      <RiDeleteBin5Line />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="invoice-btn">+ Add Medical Supplies</div>
        </div>
      </div>

      {/* Reorder Point Setup */}
      <div className="reorder-point-setup">
        <h3>Reorder Point Setup</h3>
        <p>
          Set up automatic alerts or notifications when inventory levels fall
          below a predetermined threshold, ensuring timely replenishment.
        </p>

        {/* Reorder point setup form */}
        <form className="reorder-form">
          {Object.entries(reorderPoint).map(([item, point]) => (
            <div className="form-iten" key={item}>
              <label>{item} Reorder Point:</label>
              <input
                type="number"
                value={point}
                onChange={(e) =>
                  handleSetReorderPoint(item, parseInt(e.target.value))
                }
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default MedicalSupplies;
