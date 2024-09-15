import { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    alert(`You clicked ${option}`);
    setDropdownOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <img src= '/images/user.png' alt = "user logo" className='user-icon'/>
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleOptionClick('Profile')}>Profile</li>
          <li onClick={() => handleOptionClick('Settings')}>Settings</li>
          <li onClick={() => handleOptionClick('Logout')}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
