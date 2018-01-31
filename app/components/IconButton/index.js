/**
*
* IconButton
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import styles from './styles.css';

function IconButton({onClick, icon, iconClass, buttonClass}) {
  return (
    <div
      className={classNames(styles.iconButtton, buttonClass)}
      onClick={onClick}>
      <FontAwesome className={iconClass} name={icon} />
    </div>
  );
}
IconButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
};
export default IconButton;