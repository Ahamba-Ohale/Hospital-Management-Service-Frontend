
import React, { useState, useEffect } from 'react'
import { GrFormView  } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import ViewMedRec from './ViewMedRec';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingEffect from '../../LoadingEffects/LoadingEffect';

const MedicalRecord = () => {

  const { patient_id } = useParams();
  const [patientData, setPatientData] = useState(null);
  const apiUrl = `http://localhost:8080/api`;

  const [NewMedRecord, setNewMedRecord] = useState(false);



const MedicalRecord = () => {

  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const loading = LoadingEffect();

  const toggleAddModal = () => {
    setAddModalVisible(!isAddModalVisible);
  };




  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/patients/${patient_id}`);
        setPatientData(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientData();
  }, [apiUrl, patient_id]);
 
  if (!patientData) {
    return <div style={{
      display: 'flex',
      position: 'fixed',
      top: '50%',
      left: '50%',
    }}>{loading}</div>;
  }
   





  

 

  return (
    <div className="patient-content__med">
      <div className="patient-content__top">
        <h2>Medical Record</h2>


        <Link to={`/Add-new-record/${patient_id}`}><button
          type="button"
          onClick={() => setNewMedRecord(!NewMedRecord)}
          className="patient-content__medre"
        >
          New Entry
        </button></Link>

      </div>

      <div className="patient-content__medd">
        <div className="patient-content__med1">
          <div className="patient-content__date">
            <p>
              <b>2nd, Feb 2024</b>
            </p>
          </div>
          <div className="patient-content__right">
            <p>
              <b>Complaint:</b> , Headache
            </p>
            <p>
              <b>Diagnosis:</b> Malaria, Hypertension
            </p>
            <p>
              <b>Treatment:</b> Surgery, Chemotherapy
            </p>
            <p>
              <b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen
            </p>
          </div>
          <div className="patient-content__amt">
            <p>
              <b>$15000</b>
            </p>
          </div>
          <div className="patient-content__ico">
            <Link to="/ViewMedRec">
              <div onClick={toggleAddModal}>
                <GrFormView size={20} />
              </div>
            </Link>
            <div className="del">
              <RiDeleteBin5Line size={20} />
            </div>
          </div>
        </div>
        <div className="patient-content__med1">
          <div className="patient-content__date">
            <p>
              <b>2nd, Feb 2024</b>
            </p>
          </div>
          <div className="patient-content__right">
            <p>
              <b>Complaint:</b> Fever, Headache
            </p>
            <p>
              <b>Diagnosis:</b> Malaria, Hypertension
            </p>
            <p>
              <b>Treatment:</b> Surgery, Chemotherapy
            </p>
            <p>
              <b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen
            </p>
          </div>
          <div className="patient-content__amt">
            <p>
              <b>$15000</b>
            </p>
          </div>
          <div className="patient-content__ico">
            <Link to="/ViewMedRec">
              <div onClick={toggleAddModal}>
                <GrFormView size={20} />
              </div>
            </Link>
            <div className="del">
              <RiDeleteBin5Line size={20} />
            </div>
          </div>
        </div>
        <div className="patient-content__med1">
          <div className="patient-content__date">
            <p>
              <b>2nd, Feb 2024</b>
            </p>
          </div>
          <div className="patient-content__right">
            <p>
              <b>Complaint:</b> Fever, Headache
            </p>
            <p>
              <b>Diagnosis:</b> Malaria, Hypertension
            </p>
            <p>
              <b>Treatment:</b> Surgery, Chemotherapy
            </p>
            <p>
              <b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen
            </p>
          </div>
          <div className="patient-content__amt">
            <p>
              <b>$15000</b>
            </p>
          </div>
          <div className="patient-content__ico">
            <Link to="/ViewMedRec">
              <div onClick={toggleAddModal}>
                <GrFormView size={20} />
              </div>
            </Link>
            <div className="del">
              <RiDeleteBin5Line size={20} />
            </div>
          </div>
        </div>
      </div>
      {isAddModalVisible && <ViewMedRec onClose={toggleAddModal} />}
    </div>
  );
};

export default MedicalRecord;
