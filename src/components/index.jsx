import React from 'react';
import FileUpload from './storage.jsx';
import DataBase from './database.jsx';

class App extends React.Component {
  
  // Tener en cuenta el estado "state" no se debe modificar nunca en este punto del render.
  render () {
    return (
      <section>
        <DataBase />
        <FileUpload />
      </section>
    )
  }
}

export default App;
