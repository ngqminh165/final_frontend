import React, {useState} from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PartyCard from "./components/Party/PartyCard"
import PartyContainer from "./components/Party/PartyContainer"
import CreateForm from "./components/Party/PartyCreate.js"
import SignInSide from "./components/Login/SignIn"
import SignUp from "./components/Login/SignUp"
import PartyDetail from "./components/Party/PartyDetail"
import {LoginContext} from "./Contexts/LoginContext"
import PartyDetail2 from "./components/Party/PartyDetail2"

function App() {
  const [usernameDisplay, setUserNameDisplay] = useState('Login');

  return (
    <LoginContext.Provider value={{usernameDisplay, setUserNameDisplay}}>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div className="homepage__content-component px-3 px-md-0 ml-md-4">
            <PartyCard />
          </div>
          <div className="homepage__content-component px-3 px-md-0 ml-md-4">
            <PartyContainer />
          </div>
        </Route>
        <Route path="/login" exact>
        {/* <Login Page /> */}
          <SignInSide />
        </Route>
        <Route path="/covid" exact>
        {/* <Create Page /> */}
          <PartyDetail2 />
        </Route>
        <Route path="/create" exact>
        {/* <Create Page /> */}
          <CreateForm />
        </Route>
        <Route path="/signup" exact>
        {/* <Create Page /> */}
          <SignUp />
        </Route>
        <Route path="/partydetail/:id">
        {/* <Create Page /> */}
          <PartyDetail />
        </Route>
      </Switch>
    </Router>
    </LoginContext.Provider>
  )
}

export default App
