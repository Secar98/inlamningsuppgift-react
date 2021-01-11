import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage'
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <div>




      <Switch>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route
          path="/customers/:id"
          component={CustomerDetailPage}
        />

        <Route path="/customers">
          <CustomerListPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
