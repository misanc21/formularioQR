import React from 'react';

import Nav from './components/Nav'
import Container from './components/Container'

import FormState from './context/formulario/formState'

function App() {

  return (
    <FormState>
        <Nav />
        <Container/>
    </FormState>
  );
}

export default App;
