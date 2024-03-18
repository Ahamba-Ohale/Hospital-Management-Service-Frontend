import { FiCheckCircle, FiTrash2, FiUploadCloud } from "react-icons/fi";
import Select from 'react-select';
import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';

export default function Information() {

    const titles = [
        { value: 'Mr.', label: 'Mr.' },
        { value: 'Mrs.', label: 'Mrs.' },
        { value: 'Dr.', label: 'Dr.' },
        { value: 'Ms.', label: 'Ms.' },
        { value: 'Master', label: 'Master' },
        { value: 'Other', label: 'Other' },
    ];

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
                <label htmlFor="title">Title</label>
                <Select
                    id="title"
                    name="title"
                    placeholder=""
                    options={titles}
                />
            </div>

            <div className="modal_container">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className='modal_input'
                    required
                />
            </div>

            <div className="modal_container">
                <label htmlFor="phoneNumber">Phone Number</label>
                <PhoneInput
                    defaultCountry="US"
                    className="modal_input"
                />
            </div>

            <div className="modal_container">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className='modal_input'
                    required
                />
            </div>

            <div className="modal_container-btns">
                <button>
                    Delete Account
                    <FiTrash2 size={20} style={{ marginLeft: '1rem' }} />
                </button>

                <button>
                    Save Changes
                    <FiCheckCircle size={20} style={{ marginLeft: '1rem' }} />
                </button>
            </div>
        </>
    );
}