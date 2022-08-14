import React, { useEffect, useState, useCallback, useContext } from 'react'
import './intentBar.css'
import IntentFeed from '../intentFeed/intentFeed'
import { Feeds, getIntents } from '../../../../api'
import { AppContext, Context } from '../w2wIndex'

const IntentBar = (): JSX.Element => {
  return (
    <div className="search">
      <div className="intentsidebar_message">{<IntentFeed />}</div>
    </div>
  )
}

export default IntentBar
