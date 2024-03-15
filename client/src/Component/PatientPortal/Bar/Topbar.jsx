import { IoSearchOutline } from 'react-icons/io5';
import { LuChevronFirst, LuChevronLast } from 'react-icons/lu';
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Topbar({ handleToggleClick }) {
    const [isFirstIcon, setIsFirstIcon] = useState(true);

    const handleIconClick = () => {
        setIsFirstIcon(prevIsFirstIcon => !prevIsFirstIcon);
        handleToggleClick();
    };

    return (
        <div className="patient_topbar">
            <div className="toggle">
                {isFirstIcon ? (
                    <i><LuChevronFirst size={25} onClick={handleIconClick} /></i>
                ) : (
                    <i><LuChevronLast size={25} onClick={handleIconClick} /></i>
                )}
            </div>
            <div className="search">
                <label className="">
                    <input type="text" placeholder="Search here" />
                    <IoSearchOutline size={20} />
                </label>
            </div>
            <div className="user_details">
                <div className="bell"></div>
                <div className="img_box">
                    <img src='/doctor.jpg' />
                </div>
                <h4>John Doe</h4>
            </div>
        </div>
    );
}