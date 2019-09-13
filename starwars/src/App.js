import React, {useState, useEffect} from 'react';
import './App.css';
import Person from './components/Person'
import axios from 'axios'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 
  const [people, setPeople] = useState([])
  //to get list of films
  //const [films, setFilms] = useState([])

  useEffect(()=>{
      axios.get('https://swapi.co/api/people')
      .then(
          response => {
              console.log(response)
              
                 const people = response.data.results
                 setPeople(people)
              
          })
      .catch(error =>{
          console.log('There was an error when fetching API')
      })
  }, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
     <div>
      {people.map(person =>{
        return(
        <Person
          name={person.name}
          birth_year={person.birth_year}
          gender={person.gender}
          films={person.films}
        />

        )
      })}
      </div>
    </div>
  ) 
}

export default App;
