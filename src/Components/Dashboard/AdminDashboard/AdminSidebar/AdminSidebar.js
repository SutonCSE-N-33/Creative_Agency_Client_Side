import React from 'react';
import './AdminSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faPerson, faDoorClosed} from '@fortawesome/free-solid-svg-icons'
const AdminSidebar = ({handleCategories}) => {
    return (
        <div>
        <div className='container-fluid admin-sidebar mt-5 ps-4' style={{cursor:"pointer"}}>
        <p onClick={()=>handleCategories('Service List')}><FontAwesomeIcon width="50px" icon={faDoorClosed}/>Service List</p>
        <p onClick={()=>handleCategories('Add Service')}><FontAwesomeIcon width="50px" icon={faPlus}/>Add Service</p>
        <p onClick={()=>handleCategories('Make Admin')}><FontAwesomeIcon width="50px" icon={faPerson}/>Make Admin</p>
    </div>
        </div>
    );
};

export default AdminSidebar;