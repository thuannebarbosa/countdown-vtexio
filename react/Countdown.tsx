// store-block/react/Countdown.tsx
import React, { useState} from 'react'
import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

interface CountdownProps {
  title: string
  targetDate: string
  isON: boolean
}

const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

const CSS_HANDLES = ['container', 'countdown', 'title', 'days', 'hours', 'minutes', 'seconds', 'span']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  title,
  targetDate = DEFAULT_TARGET_DATE,
  isON
}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const titleText = title || <FormattedMessage id="countdown.title" />

  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, setTime)

  //const isONCheck = isON ? 'true' : 'false'

  

  return ( 

    
    <div>
      
      {isON ? 
        <div className={`${handles.container} t-heading-2 fw3 w-100 c-muted-1`}>
          <div className={`${handles.title} db tc`}>{titleText}</div>
          <div className={`${handles.countdown} db tc`}>
            <p className={`${handles.days}`}>{`${timeRemaining.days}`} <span className={`${handles.span}`}>days</span> </p>
            <p className={`${handles.hours}`}>{`${timeRemaining.hours}`} <span className={`${handles.span}`}>hrs</span></p><span>:</span>
            <p className={`${handles.minutes}`}>{`${timeRemaining.minutes}`} <span className={`${handles.span}`}>mins</span></p><span>:</span>
            <p className={`${handles.seconds}`}>{`${timeRemaining.seconds}`} <span className={`${handles.span}`}>secs</span></p>
          </div>
        </div> 
      : '' }
    </div> )
    
    
}


Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      default: null,

    },
    targetDate: {
      title: 'Final Date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: null,
    },
    isON: {
      title: 'isON',
      description: 'isON ?',
      type: 'boolean',
      default: null,
    }
  },
}

export default Countdown