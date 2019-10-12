import React from "react";

const Tab = ({ activeTab, label, onClick }) => {
  return (
    <li
      className={
        activeTab === label ? "tab-list-item tab-list-active" : "tab-list-item"
      }
      onClick={() => onClick(label)}>
      {label}
    </li>
  );
};

export default Tab;
