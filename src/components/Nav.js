import React from 'react'
import styled from 'styled-components'

const Navbar = styled.nav `
    background: #009688;
    margin: 0;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
`

const Titulo = styled.h1 `
    color: white;
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem;
`

const Nav = () => {
    return ( 
        <Navbar>
            <Titulo> Generador de Qr</Titulo>
        </Navbar>
    );
}
 
export default Nav;