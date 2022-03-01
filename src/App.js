import logo from './logo.svg';
import contactsList from "./contacts.json"

import './App.css';
import { useState } from 'react';

function App() {

  const contacts = contactsList.slice(0,5)

  return (
    
      <div>
      <h1>Iron Contacts</h1>

      <button>Add Random Contact</button>
      
            <table>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
              </tr>
              <tbody>
      {contacts.map(contacts =>{

        return(
          <div>
              <tr>
                <th><img src={contacts.pictureUrl} width="100px"/></th>
                <th><h3> {contacts.name}</h3></th>
                <th><h4>{contacts.popularity}</h4></th>
                {contacts.wonOscar && <th>&#x1F3C6;</th>}
               
              </tr>
          </div>
        )
      })}
      </tbody>
      </table>
      </div>
       
    
   )
  }
  export default App