import React from 'react';
import { FaHome, FaCalendarAlt, FaUserFriends, FaCog } from 'react-icons/fa'; // Import necessary icons
import '../../assets/css/sidebar.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
    const navigate = useNavigate();  
    
    const handleNavigation = (path) => {
        closeSidebar();
        navigate(path);
    };
    
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-button" onClick={() => handleNavigation('/dashboard')}>
                <FaHome className="option-icon" />
                Dashboard
            </button>
            <button className="sidebar-button" onClick={() => handleNavigation('/events')}>
                <FaCalendarAlt className="option-icon" />
                Events
            </button>
            <button className="sidebar-button" onClick={() => handleNavigation('/users')}>
                <FaUserFriends className="option-icon" />
                Users
            </button>
            <button className="sidebar-button" onClick={() => handleNavigation('/settings')}>
                <FaCog className="option-icon" />
                Settings
            </button>
        </div>
    );
};

export default Sidebar;
