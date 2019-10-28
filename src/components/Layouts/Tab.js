import React from 'react';

const Tab = ({ activeTab, label, onClick }) => (
  <li
    className={
      activeTab === label ? 'tab-list-item tab-list-active' : 'tab-list-item'
    }
    onClick={() => onClick(label)}
    tabIndex="0"
  >
    {label}
  </li>
);

export default Tab;
