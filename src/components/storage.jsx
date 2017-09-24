import React from 'react';
import firebase from './firebase-config';

class FileUpload extends React.Component {
  constructor () {
    super()

    this.state = {
      uploadValue: 0
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange (event) {
    const file = event.target.files[0]
    const storageref = firebase.storage().ref(`pictures/${file.name}`);
    const taks = storageref.put(file)
    // Tener enc uenta las reglas en firebase que estan como publicas.
    // Documentacion https://firebase.google.com/docs/storage/security/start?authuser=0
    taks.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      });
    }, (err) => {
      this.setState({
        message: `Ha ocurrido un error -> ${ err.message }`
      })
    }, () => {
      this.setState({
        message: 'Archivo subido!',
        picture: taks.snapshot.downloadURL
      })
    })
  }

  render () {
    return (
      <div>
        <progress value={ this.state.uploadValue } max='100'></progress>
        <br/>
        <input type="file" onChange={ this.handleOnChange } name="file"/>
        <br/>
        <span>{ this.state.message }</span>
        <img src={ this.state.picture } alt={ this.state.picture } width='100'/>
      </div>
    );
  }
}

export default FileUpload;
