import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const SupplyMgt = () => {
  return (
    <div className="supply-chain-management-container">
      <h2>Supply Chain Management</h2>

      <div className="supplier-information">
        <h3>Supplier Information</h3>
        <p>
          Maintain a database of suppliers/vendors, including contact details, pricing information,
          and delivery schedules.
        </p>

        <div className="medicine">
              <h3>Supplier</h3>

              <table className="invoice-table">
                <thead>
                  <th><b>Vendor</b></th>
                  <th><b>Item Supplied</b></th>
                  <th><b>Created At</b></th>
                  <th><b>Contact</b></th>
                  <th><b>Quantity</b></th>
                  <th><b>Price</b></th>
                  <th><b>Total</b></th>
                  <th><b>Action</b></th>
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

              <div className="invoice-btn">+ Add Supplies</div>
              </div>

      </div>

     
    </div>
  );
};

export default SupplyMgt;
