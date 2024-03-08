import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Select from "react-select";

const HealthInfo = () => {
  const [bmiReview, setBMIReview] = useState("");
  const [genotype, setGenotype] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [allergies, setAllergies] = useState("");
  const [habits, setHabits] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height to meters

    if (!isNaN(weightInKg) && !isNaN(heightInM) && heightInM > 0) {
      const bmi = weightInKg / (heightInM * heightInM);
      return bmi.toFixed(2);
    } else {
      return null;
    }
  };

  const handleSaveChanges = () => {
    const bmiResult = calculateBMI();

    // Set review statement based on BMI
    if (bmiResult !== null) {
      if (bmiResult < 18.5) {
        setBMIReview("Underweight");
      } else if (bmiResult >= 18.5 && bmiResult < 25) {
        setBMIReview("Normal Weight");
      } else if (bmiResult >= 25 && bmiResult < 30) {
        setBMIReview("Overweight");
      } else {
        setBMIReview("Obese");
      }
    }

    // Handle save changes logic here
  };

  const bloodTypeOptions = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "C+", label: "C+" },
    { value: "C-", label: "C-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ];

  return (
    <div className="patient-content__heal">
      <div className="formm">
        <form>
          <label htmlFor="genotype">
            Genotype:
            <input
              type="text"
              id="genotype"
              name="genotype"
              value={genotype}
              onChange={(e) => setGenotype(e.target.value)}
              className="input-field"
              placeholder="Genotype"
            />
          </label>

          <label htmlFor="bloodType">
            Blood Type:
            <Select
              id="bloodType"
              name="bloodType"
              value={bloodType}
              onChange={(selectedOption) => setBloodType(selectedOption)}
              options={bloodTypeOptions}
              placeholder="Blood Group"
            />
          </label>

          <label htmlFor="weight">
            Weight (kg):
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="input-field"
              placeholder="Enter your Weight..."
            />
          </label>

          <label htmlFor="height">
            Height (cm):
            <input
              type="number"
              id="height"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="input-field"
              placeholder="Enter your Height..."
            />
          </label>

          <br />

          <label htmlFor="bmiResult">
            {" "}
            Your BMI:
            <input
              type="text"
              id="bmiResult"
              value={calculateBMI() !== null ? calculateBMI() : ""}
              readOnly
              placeholder="BMI Result"
            />
          </label>
          <p className="bmi-review">{bmiReview}</p>

          <br />

          <label htmlFor="allergies">
            Allergies:
            <TextareaAutosize
              id="allergies"
              name="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="input-field"
              placeholder="Allergies"
            />
          </label>
          <br />

          <label htmlFor="habits">
            Habits:
            <TextareaAutosize
              id="habits"
              name="habits"
              value={habits}
              onChange={(e) => setHabits(e.target.value)}
              className="input-field"
              placeholder="What are some of your daily habits"
            />
          </label>

          <br />

          <label htmlFor="medicalHistory">
            Medical History
            <TextareaAutosize
              id="medicalHistory"
              name="medicalHistory"
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
              className="input-field"
              placeholder=""
            />
          </label>
        </form>
      </div>

      <button type="button" className="save-btn" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
};

export default HealthInfo;
