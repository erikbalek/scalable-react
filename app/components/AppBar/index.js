/**
*
* AppBar
*
*/

import React from 'react';

import styles from './styles.css';
import FontAwesome from 'react-fontawesome';

function AppBar({ toggleDrawer }) {
  return (
    <div className={styles.appBar}>
      <div className={styles.iconButtton} onClick={toggleDrawer}>
        <FontAwesome className={styles.icon} name="bars" />
      </div>
      <div className={styles.heading}>
        Coder daily
      </div>
      <div className={styles.linkContainer}>Log in</div>
    </div>
  );
}
AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default AppBar;
