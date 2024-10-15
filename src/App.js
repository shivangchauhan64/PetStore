import './App.css';
import {
  ProfileCardCollection 
 } from './ui-components';
 import {
  NavBarHeader 
 } from './ui-components';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
function App() {
  return (
    <div className="App">
      <NavBarHeader />
      <header className="App-header">
        <ProfileCardCollection />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
