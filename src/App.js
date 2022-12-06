import React from 'react'
import './App.css';
import {Routes , Route , Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ContactList from './components/contacts/ContactList/ContactList';
import AddContact from './components/contacts/AddContact/AddContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/view/:contactID'} element={<ViewContact/>}/>
        <Route path={'/contacts/edit/:contactID'} element={<EditContact/>}/>
      </Routes>
    </div>
  )
}

export default App; 
