import React, { useEffect, useState, useCallback, useContext } from 'react'
import './intentBar.css'
import IntentFeed from '../intentFeed/intentFeed'
import { Feeds, getIntents } from '../../../../api'
import { AppContext, Context } from '../w2wIndex'

const IntentBar = (): JSX.Element => {
  const { did }: AppContext = useContext<AppContext>(Context)
  const [allIntents, setAllIntents] = useState<Feeds[]>([])

  const getAllIntents = useCallback(async () => {
    const allIntentsResult: Feeds[] = await getIntents(did.id)
    setAllIntents(allIntentsResult)
  }, [])

  useEffect(() => {
    getAllIntents()
  }, [])
  return (
    <div className="search">
      <div className="intentsidebar_message">{<IntentFeed AllIntents={allIntents} />}</div>
    </div>
  )
}

export default IntentBar
