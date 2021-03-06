/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import TextInput from '../TextInput';
// import { addLink } from ''

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      urlError: '',
      descriptionError: '',
    };
    this.onAdd = this.onAdd.bind(this);
  }

  static propTypes = {
    addLink: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
    cancelAddLink: React.PropTypes.func.isRequired,
  };


  // state = {
  //   urlError: '',
  //   descriptionError: '',
  // };

  onAdd() {
    const url = this.url.value();
    const description = this.description.value();
    let urlError = null;
    let descriptionError = null;
    if(!url.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?//=]*)/)) {
      urlError = 'Invalid url';
    }
    if(!description) {
      descriptionError = 'Please describe';
    }


    this.setState({urlError, descriptionError});  //shorthand, same name as key (this.state.descriptionError)
    if(urlError || descriptionError) {
      return;
    }
    // debugger;
    this.props.addLink({
      topicName: this.props.topicName,
      url,
      description: description,
    });
    // console.log('onAdded', url, description);
  }

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>Add link</div>
          <TextInput
            className={styles.input}
            placeholder="url"
            errorText={this.state.urlError}
            ref={(inputField) => {this.url = inputField;}}
          />
        <TextInput
            className={styles.input}
            placeholder="description"
            errorText={this.state.descriptionError}
            ref={(inputField) => {this.description = inputField;}}
          />
        <div className={styles.actionContainer}>
          <div className={styles.button} onClick={this.props.cancelAddLink}>
            cancel
          </div>
          <div className={styles.button} onClick={this.onAdd}>
            add
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default LinkForm;
