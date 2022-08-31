import IntentFeed from '../intentFeed/intentFeed'
import './intentBar.css'

const IntentBar = (): JSX.Element => {
  return (
    <div className="search">
      <div className="intentsidebar_message">{<IntentFeed />}</div>
    </div>
  )
}

export default IntentBar
