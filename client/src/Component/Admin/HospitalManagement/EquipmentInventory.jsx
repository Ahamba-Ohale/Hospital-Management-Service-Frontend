import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const EquipmentInventory = () => {
  return (
    <div className="equipment-inventory-container">
      <h2>Equipment Inventory Management</h2>
      <div className="equipment-info">
        <h3>Equipment Tracking</h3>
        <p>
          Keep an inventory of medical equipment used within the hospital,
          including details such as equipment name, serial number, and location.
        </p>

        <table className="invoice-table">
          <thead>
            <th>
              <b>Equipment Name</b>
            </th>
            <th>
              <b>Serial No.</b>
            </th>
            <th>
              <b>Date of purchase</b>
            </th>
            <th>
              <b>Vendor</b>
            </th>
            <th>
              <b>Quantity</b>
            </th>
            <th>
              <b>Price</b>
            </th>
            <th>
              <b>Total</b>
            </th>
            <th>
              <b>Action</b>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>PFizer</td>
              <td>Syringes</td>
              <td>21-3-2024</td>
              <td>090 999 0009</td>
              <td>20</td>
              <td>100</td>
              <td>100,000</td>
              <td>
                <div>
                  <RiDeleteBin5Line />
                </div>
              </td>
            </tr>
            <tr>
              <td>PFizer</td>
              <td>Syringes</td>
              <td>21-3-2024</td>
              <td>090 999 0009</td>
              <td>20</td>
              <td>100</td>
              <td>100,000</td>
              <td>
                <div>
                  <RiDeleteBin5Line />
                </div>
              </td>
            </tr>
            <tr>
              <td>PFizer</td>
              <td>Syringes</td>
              <td>21-3-2024</td>
              <td>090 999 0009</td>
              <td>20</td>
              <td>100</td>
              <td>100,000</td>
              <td>
                <div>
                  <RiDeleteBin5Line />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="invoice-btn">+ Add Equipment</div>
      </div>
    </div>
  );
};

export default EquipmentInventory;
