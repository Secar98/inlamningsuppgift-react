import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div>




      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
