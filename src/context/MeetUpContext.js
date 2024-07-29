import React from 'react'

const MeetUpContext = React.createContext({
  isRegistered: false,
  name: '',
  topic: 'ARTS_AND_CULTURE',
  changeName: () => {},
  changeTopic: () => {},
  changeRegisteredStatus: () => {},
  showError: false,
  updateShowError: () => {},
})

export default MeetUpContext
