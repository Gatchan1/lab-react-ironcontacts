import './App.css';
import contactsJSON from "./contacts.json"
import { useState } from 'react';


function App() {
  const initialContacts = contactsJSON.slice(0,5)
  const [contacts, setContacts] = useState(initialContacts)
  const initialRemainingContacts = contactsJSON.slice(5)
  const [remainingContacts, setRemainingContacts] = useState(initialRemainingContacts)

  function addRandomContact() {
    let contactIndex = Math.floor(Math.random()*remainingContacts.length);
    setContacts([...contacts, remainingContacts[contactIndex]]);
    let newRemainingContacts = remainingContacts.toSpliced(contactIndex, 1)
    setRemainingContacts(newRemainingContacts)
  }

  function sortByName() {
    let sortedContactsByName = contacts.slice();
    sortedContactsByName.sort((a,b) => (a.name > b.name) ? 1 : -1)
    setContacts(sortedContactsByName)
  }

  function sortByPopularity() {
    let sortByPopularity = contacts.slice();
    sortByPopularity.sort((a,b) => (a.popularity > b.popularity) ? 1 : -1)
    setContacts(sortByPopularity)
  }


  return <div className="App">
  <h1>IronContacts</h1>
  {remainingContacts.length > 0 ? <button onClick={addRandomContact}>Add Random Contact</button> : ""}
  <br/>
  <button onClick={sortByName}>Sort by Name</button>
  <button onClick={sortByPopularity}>Sort by Popularity</button> 
    <table>
    <tr>
      <th>Picture</th>
      <th>Name</th> {/* <--iteration 4 */}
      <th>Popularity</th> {/* <--iteration 4 */}
      <th>Won an Oscar</th>
      <th>Won an Emmy</th>
    </tr>
    {contacts.map(contact=>{
      let hasOscar = contact.wonOscar ? <img src={require("./images/trophy.png")} className="award" alt='trophy'/> : ""
      let hasEmmy = contact.wonEmmy ? <img src={require("./images/trophy.png")} className="award" alt='trophy'/> : ""

      return <tr key={contact.id}>
    <td><img src={contact.pictureUrl} alt='Contact'/></td>
    <td>{contact.name}</td>
    <td>{contact.popularity}</td>
    <td>{hasOscar}</td>
    <td>{hasEmmy}</td>
  </tr>
    })}
    </table>
    
  </div>;
}

export default App;