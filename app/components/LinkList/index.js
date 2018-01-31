/**
*
* LinkList
*
*/

import React from 'react';
import Link from '../Link';
import IconButton from '../IconButton';
import styles from './styles.css';

function LinkList({ links, topicName, children, startAdd }) {
  const linkNodes = links.map(l => {
    return (
      <Link key={l.id} link={l} />
    );
  });
  return (
    <div className={styles.linkList}>
      <h2>{topicName}</h2>
      <span>{linkNodes}</span>
      <IconButton icon="plus" iconClass={styles.icon}
        buttonClass={styles.button} onClick={() => startAdd(topicName)}/>
      {children}
    </div>
  );
}
LinkList.propTypes = {
  topicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
  })),
  children: React.PropTypes.element,
  startAdd: React.PropTypes.func.isRequired,
};
export default LinkList;
