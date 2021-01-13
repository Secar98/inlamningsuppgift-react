import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage'
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import LoginPage from './pages/LoginPage'


function App() {
  const history = useHistory()
  history.push('/login')

  //  function getMe() {
  //   const url = "https://frebi.willandskill.eu/api/v1/me/"
  //   const token = localStorage.getItem("WEBB20")
  //   fetch(url, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${token}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }

  return (
    <div>
      <ul>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/customers/create">Create Customer</Link>
        </li>
        <li>
          My page
        </li>
      </ul>


      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/customers/create">
          <CustomerCreatePage />
        </Route>

        <Route
          path="/customers/:id/edit"
          component={CustomerUpdatePage}
        />

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
