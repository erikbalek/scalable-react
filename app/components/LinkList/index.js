/**
*
* LinkList
*
*/

import React from 'react';
import Link from '../Link';

import styles from './styles.css';

function LinkList({ links, topicName }) {
  const linkNodes = links.map(l => {
    return (
      <Link key={l.id} link={l}>

      </Link>
    );
  });
  return (
    <div className={styles.linkList}>
      {topicName}
      <span>{linkNodes}</span>
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
};
export default LinkList;
