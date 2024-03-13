import React, { useState } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import Select from "react-select";
import { LuSend } from "react-icons/lu";

const currency = [
  { value: "naira", label: "Naira" },
  { value: "usd (us dollar)", label: "USD (US Dollar)" },
  { value: "euro", label: "Euro" },
];

const CreateInvoice = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will go back to the previous page in history
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-body">
        <div className="header">
          <span className="search">
            <input type="text" placeholder="Search..." />
          </span>
          <div className="notify">
            <div className="bell"></div>
            <div className="img"></div>
            <h4>Patient name</h4>
          </div>
        </div>

        <div className="history">
          <div className="back" onClick={handleGoBack}>
            <IoReturnUpBack />
          </div>
          <div className="page-name">Create Invoice</div>
        </div>
        
        <div className="invoice-main">
          <div className="invoice-main__top">
            <div className="invoice-logo">
              <img src="Logo.png" alt="Logo" className="Logo" />
              <h2 className="hosp-name">Great Towers Specialist Hospital</h2>
            </div>

            <div className="invoice-date">
              <label htmlFor="Date">
                Date:
                <input type="date" name="Date" id="" required />
              </label>
            </div>
          </div>

          <div className="invoice-main__mid">
            <div className="invoice-card">
            <div className="invoice-card__text">
              <h2>From:</h2>
              <p>Great Towers Specialist Hospital</p>
              <p>info@greattowers.com</p>
              <p>+(234) 907 524 5232</p>
              </div>
            </div>
            <div className="invoice-card">
             <div className="invoice-card__text">
             <h2>To:</h2>
              <p>Patient name</p>
              <p>Email </p>
              <p>Phone</p>
             </div>
              <div className="invoice-card__add">
                + Add
              </div>
            </div>
          </div>

          <div className="invoice-main__bottom">
            <div className="invoice-main__botright">
              <table className="invoice-table">
                <thead>
                  <th>Item</th>
                  <th>Item Price (Ngn)</th>
                  <th>Quantity</th>
                  <th>Amount (Ngn)</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Surgery</td>
                    <td>100,000</td>
                    <td>1</td>
                    <td>100,000</td>
                    <td>
                      <div>
                        <RiDeleteBin5Line />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Surgery</td>
                    <td>100,000</td>
                    <td>1</td>
                    <td>100,000</td>
                    <td>
                      <div>
                        <RiDeleteBin5Line />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Surgery</td>
                    <td>100,000</td>
                    <td>1</td>
                    <td>100,000</td>
                    <td>
                      <div>
                        <RiDeleteBin5Line />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="invoice-btn">Add Item +</div>
            </div>

            <div className="invoice-main__botleft">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={currency.map((option) => ({
                  value: option.value,
                  label: option.label,
                }))}
                placeholder="Select Currency"
              />

              <form>
                <input type="number" placeholder="Discount" />

                <input type="number" placeholder="Tax(%)" />
              </form>

              <div className="invoice-resultt">
                <div className="result-right">
                  <p>Sub Total</p>
                  <p>Discount</p>
                  <p>Tax (%)</p>
                  <p>Grand Total</p>
                </div>

                <div className="result-left">
                  <p>
                    <b>$500</b>
                  </p>
                  <p>
                    <b>$5</b>
                  </p>
                  <p>
                    <b>7%</b>
                  </p>
                  <p>
                    <b>$590</b>
                  </p>
                </div>
              </div>

              <label htmlFor="notes"> Notes</label>
                <textarea name="notes"
                className="textarea"
                placeholder="Thank you for your business, We hope to work with you again"
                ></textarea>
              

              <button className="invoice-left__butt"> Save & Send Invoice <LuSend /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
