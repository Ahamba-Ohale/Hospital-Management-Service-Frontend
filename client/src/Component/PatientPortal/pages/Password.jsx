import { FiCheckCircle } from "react-icons/fi";

export default function Password() {

  return (
    <>
        <div className="modal_container">
           <label htmlFor="oldPassword">Old Password</label>
           <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              className='modal_input'
              required
            />
        </div>

        <div className="modal_container">
           <label htmlFor="newPassword">New Password</label>
           <input
              type="password"
              id="newPassword"
              name="newPassword"
              className='modal_input'
              required
            />
        </div>

        <div className="modal_container">
           <label htmlFor="confirmPassword">Confirm Password</label>
           <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className='modal_input'
              required
            />
        </div>

        <div className="modal_container-btn">
            <button>
                Save Changes
                <FiCheckCircle size={20} style={{ marginLeft: '.5rem' }} />
            </button>
        </div>
    </>
  );
}