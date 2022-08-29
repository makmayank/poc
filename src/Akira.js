import logo from './logo.svg';
import React, { useState, useEffect } from 'react'; 
import AkiraCollage from "./Akira.jpg";
import {
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
//import {AmplifySignOut } from ''
import './App.css';
import { API, Storage } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react'; 
import { listNotes } from './graphql/queries'; 
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { image:'' }
const  photoCount = 22;
//let AmplifySignOut = "";
function Akira({ signOut }) { 
  
var sectionStyle= {width:"100%",
  height:"700px",
				   backgroundSize:"cover",
				   backgroundImage: "url("+AkiraCollage+")"};
  
  return (
    <div style={sectionStyle}>
      <Heading >Anank</Heading>
      <withAuthenticator />
    </div>   ); }

export default withAuthenticator(Akira);


/*
import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify'; 
import { withAuthenticator } from '@aws-amplify/ui-react'; 
import {AmplifySignOut } from ''
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }
function App(){

  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }
  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }
  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );

}
export default withAuthenticator(App);

*/
/*
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// function App({ signOut }) {
//   return (
//     <View className="App">
//       <Card>
//         <Image src={logo} className="App-logo" alt="logo" />
//         <Heading level={1}>We now have Auth!</Heading>
//       </Card>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
//   );
// }

export default withAuthenticator(App);
//export default App;
*/