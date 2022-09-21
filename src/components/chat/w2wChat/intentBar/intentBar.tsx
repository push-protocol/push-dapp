import { Feeds, getIntents } from 'api';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import IntentFeed from '../intentFeed/intentFeed';
import './intentBar.css';

const IntentBar = (): JSX.Element => {
  return (
    <div className="search">
      <div className="intentsidebar_message">{<IntentFeed />}</div>
    </div>
  )
}

export default IntentBar
