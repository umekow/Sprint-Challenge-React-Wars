

import React from 'react'
import styled from 'styled-components'


const Title = styled.div`
    background:#442F11
    color:white; 
    text-align:center; 
    width:100%; 
    padding:2px; 

`

const Header = (props) => {
    return(

        <Title>
            <h3>{props.name}</h3>
        </Title>
    )
}

export default Header