import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Header from './Header'
import axios from 'axios'

/*
color theme:
primary:#AC7123
secondary:#D7C078
tertiary:#442F11
accent:#33E6AC


*/

//styled components

const Card = styled.div`
    backgound:#AC7123

    ul{
        list-style-type:none;
    }

`

const Person = (props) => {
    return(
        <Card>
            <Header 
            name={props.name}
            />
            <h4>Description</h4>
            <p><span>Birth Year: </span>{props.birth_year}</p>
            <p><span>Gender: </span>{props.gender}</p>
            <h5>Films</h5>
            <ul>
               
                {
                    props.films.map(film => {
                        return(
                        <li>{film}</li>)
                        
                })}

            </ul>

        </Card>
    )
}

export default Person