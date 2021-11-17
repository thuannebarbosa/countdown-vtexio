import { TimeSplit } from '../typings/global'


const fillWithZero = (digits: number, number: number): string => {
  const filled = `${'0'.repeat(digits - 1)}${number}`

  return filled.slice(filled.length - digits)
}

export const parseTimeRemaining = (totalSeconds: number): TimeSplit => {

  var days = Math.floor(totalSeconds / 86400);
  var hours = Math.floor((totalSeconds - (days * 86400)) / 3600);
  var minutes = Math.floor((totalSeconds - (days * 86400) - (hours * 3600)) / 60);
  var seconds = Math.floor((totalSeconds - (days * 86400) - (hours * 3600) - (minutes * 60)));
  

  
  return {
    days: fillWithZero(2, days),
    hours: fillWithZero(2, hours),
    minutes: fillWithZero(2, minutes),
    seconds: fillWithZero(2, seconds),
    
  }
}

/**
 * @param targetDate ISOString for the date that the countdown will expire
 * @param dispatchFn A function that updates the state of the component
**/
export const tick = (
  targetDate: string,
  dispatchFn: React.Dispatch<React.SetStateAction<TimeSplit>>
) => {
  const ONE_SECOND_IN_MILLIS = 1000
  const finalDate = new Date(targetDate)
  const now = new Date() 

  
  const secondsLeft =
    (finalDate.getTime() / 1000) - ( now.getTime() / 1000)

  setTimeout(() => {
    dispatchFn(parseTimeRemaining(secondsLeft))
  }, ONE_SECOND_IN_MILLIS)

}

export const getTwoDaysFromNow = () => {
  const today = new Date()
  today.setDate(today.getDate() + 2)
  return today.toISOString()
}
