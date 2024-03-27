import { useState } from 'react';
import { IoIosCheckmark } from "react-icons/io";

export default function Prescriptions() {
    const [activeModal, setActiveModal] = useState(null); // State to manage active modal

    // Function to handle card click
    const handleCardClick = (modalTitle) => {
        setActiveModal(activeModal === modalTitle ? null : modalTitle); // Toggle the active modal
    };

    // Modal content for each prescription
    const modalContent = {
        "Paracetamol": [
            "Headache",
            "Sight",
            "Dumbness",
            "Stomach ache"
        ],
        "Black tonic": [
            "Malaria",
            "Headache",
            "Deafness",
            "Blindness"
        ],
        "Red Tonic": [
            "Blood",
            "Eye",
            "Malaria",
            "Nose"
        ],
        "Malaria medicine": [
            "Pain",
            "Bites",
            "Mosquito",
            "Joints"
        ]
    };

    return (
        <>
            <div className="patient_main-title">My Prescriptions</div>
            <section className="patient_prescriptions">
                <section className="patient_prescriptions-sides">
                    <div className="prescribe_left">
                        <div className="prescribe_header">
                            <p>Active Prescriptions</p>
                            <div>Sort by date</div>
                        </div>
                        <div className="prescribe_table">
                            {/* Map through your prescribe cards */}
                            {[
                                { title: "Paracetamol", validity: "23.10.2024", info: "Take two times daily, After meals." },
                                { title: "Black tonic", validity: "23.10.2024", info: "Take two times daily, After meals." },
                                { title: "Red Tonic", validity: "23.10.2024", info: "Take two times daily, After meals." },
                                { title: "Malaria medicine", validity: "23.10.2024", info: "Take two times daily, After meals." },
                            ].map((card, index) => (
                                <div className={`prescribe_card${activeModal === card.title ? " active_card" : ""}`} key={index} onClick={() => handleCardClick(card.title)}>
                                    <div className="prescribe_specification">
                                        <p>{card.title}</p>
                                        <span>{card.validity}</span>
                                    </div>
                                    <span>Validity 06.11.2024</span>
                                    <span>{card.info}</span>
                                    <div className="prescribe_img">
                                        <img src="/Logo.png" alt="profile" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="prescribe_right">
                        <div className="prescribe_top">
                            <img src="/drug.png" alt="drugs" />
                            {activeModal ? (
                                <div className="prescribe_modal">
                                    <h3 className="prescribe_modal-title">{activeModal}</h3>
                                    <ul className="prescribe_modal-list">
                                        {/* Render modal content based on selected prescription */}
                                        {modalContent[activeModal].map((item, index) => (
                                            <li className="prescribe_modal-item" key={index}>
                                                <i className="prescribe_modal-icon"><IoIosCheckmark strokeWidth={50} /></i>
                                                <p className="prescribe_modal-info">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p className="prescribe_guide">Click on a card to see more details on the drug.</p>
                            )}
                        </div>
                        <div className="prescribe_bottom">
                            <div className="prescribe_header">
                                <p>Expired Prescriptions</p>
                                <div>Sort by date</div>
                            </div>
                            <div className="prescribe_table">
                                <div className="prescribe_card">
                                    <div className="prescribe_specification">
                                        <p>Paracetamol</p>
                                        <span>23.10.2024</span>
                                    </div>
                                    <span>Validity 06.11.2024</span>
                                    <span>Take two times daily,<br /> After meals.</span>
                                    <div className="prescribe_img">
                                        <img src="/Logo.png" alt="profile" />
                                    </div>
                                </div>
                                <div className="prescribe_card">
                                    <div className="prescribe_specification">
                                        <p>Paracetamol</p>
                                        <span>23.10.2024</span>
                                    </div>
                                    <span>Validity 06.11.2024</span>
                                    <span>Take two times daily,<br /> After meals.</span>
                                    <div className="prescribe_img">
                                        <img src="/Logo.png" alt="profile" />
                                    </div>
                                </div>
                                <div className="prescribe_card">
                                    <div className="prescribe_specification">
                                        <p>Paracetamol</p>
                                        <span>23.10.2024</span>
                                    </div>
                                    <span>Validity 06.11.2024</span>
                                    <span>Take two times daily,<br /> After meals.</span>
                                    <div className="prescribe_img">
                                        <img src="/Logo.png" alt="profile" />
                                    </div>
                                </div>
                                <div className="prescribe_card">
                                    <div className="prescribe_specification">
                                        <p>Paracetamol</p>
                                        <span>23.10.2024</span>
                                    </div>
                                    <span>Validity 06.11.2024</span>
                                    <span>Take two times daily,<br /> After meals.</span>
                                    <div className="prescribe_img">
                                        <img src="/Logo.png" alt="profile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}