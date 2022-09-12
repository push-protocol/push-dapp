import { Feeds, getIntents } from 'api'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import IntentFeed from '../intentFeed/intentFeed'
import { AppContext, Context } from '../w2wIndex'
import './intentBar.css'

const IntentBar = (): JSX.Element => {
  return (
    <div className="search">
      <div className="intentsidebar_message">{<IntentFeed />}</div>
    </div>
  )
}

export default IntentBar
