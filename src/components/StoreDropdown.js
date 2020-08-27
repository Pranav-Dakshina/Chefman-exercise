import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const StoreDropdown = (props) => {
  const {stores, retail, setRetail} = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        {retail.store} <FontAwesomeIcon icon={dropdownOpen ? faAngleUp : faAngleDown} color="rgb(51, 242, 146)"/>
      </DropdownToggle>
      <DropdownMenu>
      {stores.map((item, idx) => {
        return <DropdownItem key={idx} onClick={() => {
          setRetail(item);
        }}>{item.store}</DropdownItem>
      })}
      </DropdownMenu>
    </Dropdown>
  );
}

StoreDropdown.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.shape({
    store: PropTypes.string,
    delivery: PropTypes.number,
    price: PropTypes.number
  })),
  setRetail: PropTypes.func,
  retail: PropTypes.shape({
    store: PropTypes.string,
    delivery: PropTypes.number,
    price: PropTypes.number
  })
}

export default StoreDropdown;
