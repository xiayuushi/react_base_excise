import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import ChannelA from './ChannelA'
import ChannelB from './ChannelB'
import NotFound from './NotFound'

const Channel = () => {
  return (
    <div>
      <NavLink to="/channel/channela">ChannelA</NavLink>
      <NavLink to="/channel/channelb/666">ChannelB</NavLink>
      <hr />
      <Switch>
        <Redirect exact from="/channel/" to="/channel/channela"></Redirect>
        <Route path="/channel/channela" component={ChannelA} />
        <Route path="/channel/channelb/:id" component={ChannelB} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Channel
