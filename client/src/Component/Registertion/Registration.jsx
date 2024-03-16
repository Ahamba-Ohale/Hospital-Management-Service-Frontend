import React from 'react'
import Select from 'react-select';
import './Registration.css'

const Registration = () => {

    

    const options = [
        { label: 'Shark', value: 'Shark' },
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
    ];

  return (
    <div>
        <div className="reg-contain">
            <div className="reg-content">
                <h1 className="reg-h1">Register</h1>

                <Select
                    options={options}
                    isSearchable={false}
                    className="basic-single"
                    classNamePrefix="select"
                />
                <input type="text" name="Name" id="" className='reg-name' placeholder='UserName' required/>
                <input type="Password" name="Password" id="" className='reg-pword' placeholder='Password' required/>
                <button className='submt'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Registration