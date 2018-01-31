/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import TextInput from '../TextInput';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {};

  render() {
    return (
      <div className={styles.overlay}>
      <div className={styles.linkForm}>
        <div className={styles.heading}>Add link</div>
        <TextInput
          className={styles.input}
          placeholder="url"
          ref={(f) => {this.emailField = f;}}
          type="text"
        />
      <TextInput
          className={styles.input}
          placeholder="description"
          ref={(f) => {this.descriptionField = f;}}
          type="text"
        />
      <div className={styles.actionContainer}>
        <div className={styles.button} onClick={this.props.cancelLogin}>
          cancel
        </div>
        <div className={styles.button} onClick={this.login}>
          add
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default LinkForm;
