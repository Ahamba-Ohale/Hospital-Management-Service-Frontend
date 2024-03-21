import { FiCheckCircle, FiUploadCloud } from "react-icons/fi";
import { PiGenderMale, PiUser, PiTrainRegionalThin, PiAddressBookLight } from "react-icons/pi";
import { TbWeight, TbLineHeight } from "react-icons/tb";

export default function PersonalInfo() {
    return (
        <>
            <div className="modal_container modal_img">
                <label htmlFor="image">Profile Image</label>
                <FiUploadCloud size="40" color="#276ab3" />
                <p>Drag your image here</p>
                <p>(Only *jpg, *jpeg and *png images will be accepted)</p>
                <input
                    type="file"
                    id="image"
                    hidden
                    accept=".jpg, .jpeg, .png"
                />
            </div>

            <div className="modal_container">
                <div className="info_container">
                    <div className="personal_info">
                        <i><PiGenderMale size={40} color="#f5f5f5" /></i>
                        <div>
                            <span>Gender</span>
                            <p>Male</p>
                        </div>
                    </div>
                    <div className="personal_info">
                        <i><PiUser size={35} color="#f5f5f5" /></i>
                        <div>
                            <span>Age</span>
                            <p>47 yrs</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal_container">
                <div className="info_container">
                    <div className="personal_info">
                        <i><TbWeight size={35} color="#f5f5f5" /></i>
                        <div>
                            <span>Weight</span>
                            <p>59 kg</p>
                        </div>
                    </div>
                    <div className="personal_info">
                        <i><TbLineHeight size={35} color="#f5f5f5" /></i>
                        <div>
                            <span>Height</span>
                            <p>173 cm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal_container">
                <div className="info_container">
                    <div className="personal_info">
                        <i><PiTrainRegionalThin size={40} color="#f5f5f5" /></i>
                        <div>
                            <span>Country</span>
                            <p>Nigeria</p>
                        </div>
                    </div>
                    <div className="personal_info">
                        <i><PiAddressBookLight size={40} color="#f5f5f5" /></i>
                        <div>
                            <span>Address</span>
                            <p>
                                phase-1 Amour Delhi, 120871
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal_container-btn">
                <button>
                    Save Changes
                    <FiCheckCircle size={20} color="#f5f5f5" style={{ marginLeft: '.5rem' }} />
                </button>
            </div>
        </>
    );
}