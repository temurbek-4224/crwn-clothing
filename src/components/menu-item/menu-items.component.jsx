import React from "react";
import "./menu-item.style.scss";
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, history, linkUrl, size, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div style={{
        background: `url(${imageUrl})`
      }} className='background-image' />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
