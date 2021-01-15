import React, { useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { StyledNavLi, StyledNavUl } from './components/StyledElements';
import { UserContext } from './context/UserContext';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage'
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import LoginPage from './pages/LoginPage'


function App() {
  const history = useHistory()
  const [token, setToken] = useState()


  useEffect(() => {
    userLoggedin();
  }, [])

  function userLoggedin() {
    if (localStorage.getItem("WEBB20")) {
      history.push('/home')
      setToken(true)
    } else {
      history.push('/login')
    }
  }

  return (
    <div>
      <UserContext.Provider value={{ token, setToken }}>
        {token ?
          <StyledNavUl>
            <StyledNavLi>
              <Link to="/home">Home</Link>
            </StyledNavLi>
            <StyledNavLi>
              <Link to="/home/create">Create Customer</Link>
            </StyledNavLi>
          </StyledNavUl>
          : <div />
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
