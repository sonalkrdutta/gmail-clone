import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import {
  BrowserRouter as Router ,
  Switch ,
  Route,
  } from "react-router-dom"
  import Mail from './Mail'
  import EmailList from './EmailList'
  import SendMail from './SendMail'
  import { selectSendMessageIsOpen} from './features/mailSlice'
  import { useSelector} from 'react-redux'

function App() {
  const SendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Switch>
        <Route path="/mail">
          <Mail/>
        </Route>
        <Route path="/">
          <EmailList/>
        </Route>
      </Switch>
      </div>
      {SendMessageIsOpen && <SendMail/>}
    </div>
    </Router>
        );
}

export default App;
