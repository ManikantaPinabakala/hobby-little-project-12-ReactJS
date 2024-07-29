import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MeetUpContext from './context/MeetUpContext'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    name: '',
    topic: 'ARTS_AND_CULTURE',
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  updateShowError = () => {
    this.setState({showError: true})
  }

  onChangeRegisteredStatus = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state

    return (
      <MeetUpContext.Provider
        value={{
          name,
          isRegistered,
          topic,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          updateShowError: this.updateShowError,
          onChangeRegisteredStatus: this.onChangeRegisteredStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetUpContext.Provider>
    )
  }
}

export default App
