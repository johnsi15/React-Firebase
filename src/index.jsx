import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDZOR8AzbpTbvK_AFMYaiWkK_Ep3h4I5dY",
  authDomain: "react-3cc70.firebaseapp.com",
  databaseURL: "https://react-3cc70.firebaseio.com",
  projectId: "react-3cc70",
  storageBucket: "react-3cc70.appspot.com",
  messagingSenderId: "1084116364757"
};
firebase.initializeApp(config);

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'John Andrey'
    }
  }
  // Este método se ejecuta cuando el componente se está por renderizar. 
  componentWillMount() {
    console.log('Component apunto de renderizar.');
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
    return <h1>Hola { this.state.name }!</h1>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
