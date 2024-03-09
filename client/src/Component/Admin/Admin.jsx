import React from 'react'
import Sidebar from './AdminSidebar/Sidebar'
import Main from './AdminSidebar/Main'

function Admin() {
  return (
    <div className='body'>

      <div className="dashboard">
        <Sidebar />
        <Main />
      </div>
    
    </div>
  )
}

export default Admin
