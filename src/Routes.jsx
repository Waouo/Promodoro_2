/* eslint-disable react/prop-types */
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomePage from './pages/HomePage'

const Routes = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        classNames={'animation-forward'}
        timeout={500}
        key={location.pathname}
      >
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
})

export default Routes
