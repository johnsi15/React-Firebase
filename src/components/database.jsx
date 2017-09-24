import React from 'react';
import firebase from './firebase-config';

class Database extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'John Andrey'
    }
  }
  // Este método se ejecuta cuando el componente se está por renderizar. 
  componentWillMount() {
    console.log('Component apunto de renderizar.');
    // Esta config se hace tambien del lado de firebase.
    const nameRef = firebase.database().ref().child('object').child('name');
    // Recibimos una captura de los datos que ay en la database
    nameRef.on('value', snapshot => {
      this.setState({
        name: snapshot.val()
      });
    });
    // Nota: tener en cuenta las reglas de seguridad -> https://firebase.google.com/docs/database/security/quickstart
  }

  // Mas info -> https://platzi.com/blog/ciclo-de-vida-de-un-componente-de-reactjs/
  componentDidMount() {
    console.log('El component se renderizo.');
  }

  // Tener en cuenta el estado "state" no se debe modificar nunca en este punto del render.
  render () {
    return (
      <section>
        <h1>Hola { this.state.name }!</h1>
      </section>
    )
  }
}

export default Database;
