import {Link} from 'react-router-dom'

import MeetUpContext from '../../context/MeetUpContext'

import {
  AppContainer,
  AppLogo,
  AppInnerContainer,
  WelcomeHeading,
  RegisterInstruction,
  RegisterButton,
  HomeImage,
  HelloGreeting,
  WelcomeToTopicText,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <MeetUpContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        const topicSelected = topicsList.find(
          eachTopic => eachTopic.id === topic,
        )

        return (
          <AppContainer>
            <AppLogo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
            <AppInnerContainer>
              {isRegistered ? (
                <>
                  <HelloGreeting>Hello {name}</HelloGreeting>
                  <WelcomeToTopicText>
                    Welcome to {topicSelected.displayText}
                  </WelcomeToTopicText>
                </>
              ) : (
                <>
                  <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
                  <RegisterInstruction>
                    Please register for the topic
                  </RegisterInstruction>
                  <Link to="/register">
                    <RegisterButton onClick={onRegister}>
                      Register
                    </RegisterButton>
                  </Link>
                </>
              )}
              <HomeImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </AppInnerContainer>
          </AppContainer>
        )
      }}
    </MeetUpContext.Consumer>
  )
}

export default Home
