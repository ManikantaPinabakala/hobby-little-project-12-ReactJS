import MeetUpContext from '../../context/MeetUpContext'

import {
  RegisterPageContainer,
  AppLogo,
  FormContainer,
  RegisterImage,
  Form,
  JoinHeading,
  FormLabel,
  InputElement,
  SelectElement,
  OptionElement,
  RegisterNowButton,
  ErrorMessage,
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

const Register = props => (
  <MeetUpContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        onChangeRegisteredStatus,
        updateShowError,
      } = value

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()

        if (name === '') {
          updateShowError()
        } else {
          onChangeRegisteredStatus()

          const {history} = props
          history.replace('/')
        }
      }

      return (
        <RegisterPageContainer>
          <AppLogo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <FormContainer>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <Form onSubmit={onSubmitForm}>
              <JoinHeading>Let us join</JoinHeading>
              <FormLabel htmlFor="name">NAME</FormLabel>
              <InputElement
                type="text"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={onChangeName}
              />
              <FormLabel htmlFor="topics">TOPICS</FormLabel>
              <SelectElement id="topics" value={topic} onChange={onChangeTopic}>
                {topicsList.map(eachTopic => (
                  <OptionElement key={eachTopic.id} value={eachTopic.id}>
                    {eachTopic.displayText}
                  </OptionElement>
                ))}
              </SelectElement>
              <RegisterNowButton type="submit">Register Now</RegisterNowButton>
              {showError ? (
                <ErrorMessage>Please enter your name</ErrorMessage>
              ) : null}
            </Form>
          </FormContainer>
        </RegisterPageContainer>
      )
    }}
  </MeetUpContext.Consumer>
)

export default Register
