/**
*
* AppBar
*
*/

import React from 'react';

import styles from './styles.css';
import IconButton from '../IconButton';
import { Link } from 'react-router';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login" >Log in</Link>);
  return (
    <div className={styles.appBar}>
      <IconButton
        buttonClass={styles.iconButton} onClick={toggleDrawer}
        iconClass={styles.icon} icon="bars"
      />
      <div className={styles.heading}>
        Coder daily
      </div>
      <div className={styles.linkContainer} >
        {loginLink}
      </div>

    </div>
  );
}
AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
};

export default AppBar;
