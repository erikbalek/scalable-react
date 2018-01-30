/**
*
* Drawer
*
*/

import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const itemNodes = items.map(i => (
    <div className={styles.item} key={i[itemKeyAttr]} onClick={() => selectItem(i)}>
      {i[itemLabelAttr]}
    </div>
  ));
  // console.log('itemNodes', itemNodes);
  return (
    <div className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}
      >
      {itemNodes}
    </div>
  );
}
Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
}
export default Drawer;
