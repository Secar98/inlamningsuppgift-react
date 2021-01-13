import React, { useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage'
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import LoginPage from './pages/LoginPage'


function App() {
  const history = useHistory()
  const [token, setToken] = useState();

  useEffect(() => {
    if (localStorage.getItem("WEBB20")) {
      history.push('/home')
      setToken(true)
    } else {
      history.push('/login')
    }
  }, [])


  //  function ge(Me() {
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
      <UserContext.Provider value={{ token, setToken }}>
        {token ?
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/home/create">Create Customer</Link>
            </li>
            <li>
              My page
        </li>
          </ul>
          : console.log("du måste logga in")
        }

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/home/create">
            <CustomerCreatePage />
          </Route>

          <Route
            path="/home/:id/edit"
            component={CustomerUpdatePage}
          />

          <Route
            path="/home/:id"
            component={CustomerDetailPage}
          />

          <Route path="/home">
            <CustomerListPage />
          </Route>

        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
