import React, {Fragment} from 'react';

import Nav from './components/Nav'
import Container from './components/Container'

import FormState from './context/formulario/formState'

function App() {

  return (
    <FormState>
      <Fragment>
        <Nav />
        <Container/>
      </Fragment>
    </FormState>
  );
}

export default App;
