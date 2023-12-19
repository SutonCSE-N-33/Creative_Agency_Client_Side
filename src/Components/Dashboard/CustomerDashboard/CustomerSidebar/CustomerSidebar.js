import React from 'react';
import './CustomerSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDoorClosed,faMessage } from '@fortawesome/free-solid-svg-icons'
const CustomerSidebar = ({handleCategories}) => {

    return (
        <div className='container-fluid mt-5 customer-sidebar ps-4' style={{cursor:"pointer"}}>
            <p onClick={()=>handleCategories('Order')}><FontAwesomeIcon width="50px" icon={faCartShopping}/>Order</p>
            <p onClick={()=>handleCategories('Service List')}><FontAwesomeIcon width="50px" icon={faDoorClosed}/>Service List</p>
            <p onClick={()=>handleCategories('Review')}><FontAwesomeIcon width="50px" icon={faMessage}/>Review</p>
        </div>
    );
};

export default CustomerSidebar;