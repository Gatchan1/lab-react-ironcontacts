import './App.css';
import * as data from "./contacts.json"

const contacts = data
console.log("contaaacts:",contacts[0])

//sacar de ahí el array de 5 contactos!!!!

const contactsList = [
  {
    "name": "Idris Elba",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "popularity": 11.622713,
    "id": "11731993-0604-4bee-80d5-67ad845d0a38",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Johnny Depp",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    "popularity": 15.656534,
    "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Monica Bellucci",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    "popularity": 16.096436,
    "id": "0ad5e441-3084-47a1-9e9b-b917539bba71",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Gal Gadot",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
    "popularity": 10.049256,
    "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Ian McKellen",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
    "popularity": 10.070132,
    "id": "0067ae32-97b6-4431-898e-eb1c10150abb",
    "wonOscar": false,
    "wonEmmy": false
  }]

function Contact(contact) {
  let hasOscar = contact.wonOscar ? <img src={require("./images/trophy.png")} className="award" alt='trophy'/> : ""

  let hasEmmy = contact.wonEmmy ? <img src={require("./images/trophy.png")} className="award" alt='trophy'/> : ""

  return(
    <tr>
    <td><img src={contact.pictureUrl} alt='Contact'/></td>
    <td>{contact.name}</td>
    <td>{contact.popularity}</td>
    <td>{hasOscar}</td>
    <td>{hasEmmy}</td>
  </tr>
  )
}

function addRandomContact() {

}

function App() {
  return <div className="App">
  <h1>IronContacts</h1>
    <table>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won an Oscar</th>
      <th>Won an Emmy</th>
    </tr>
    {Contact(contactsList[0])}
    {Contact(contactsList[1])}
    {Contact(contactsList[2])}
    {Contact(contactsList[3])}
    {Contact(contactsList[4])}
    </table>
    <button onClick={addRandomContact}>Add Random Contact</button>
  </div>;
}

export default App;