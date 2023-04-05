import moment from "moment";

export const DATE_FORMAT_DDMMYY: string = "DD MMM, YYYY";

export const getDateFromTimestamp = (timestamp: EpochTimeStamp): string => {
  return moment(timestamp).format(DATE_FORMAT_DDMMYY);
}

export const getIsNewTagVisible = (startDate:Date, durationInDays:number)=>{
  const currTimestamp = new Date().getTime();
  const startTimestamp = startDate.getTime();
  // console.log("currTimestamp",currTimestamp);
  // console.log("startTimestamp", startTimestamp);
  
  if(currTimestamp-startTimestamp>=durationInDays*24*60*60*1000){
      return false;
  }
  return true;
}

// returns true if time is remaining from now to end timestamp
export const timeRemaining = (endTimestamp: EpochTimeStamp): boolean => {
  const currTimestamp = new Date().getTime();

  return currTimestamp < endTimestamp;
}

export const nextDaysDateFromTimestamp = (endTimestamp: EpochTimeStamp, nextExtraDays: number): string => {
  return moment(endTimestamp).add(nextExtraDays, 'days').format(DATE_FORMAT_DDMMYY)
}

export const getAppropriateTimestamp = (time: Date):string => {
  let day = new Date();

  if ((day.getDate() === time.getDate()) && (day.getMonth() === time.getMonth()) && (day.getFullYear() === time.getFullYear())) {
    const localTime: string = time.toLocaleTimeString('en-US');
    const finalTime: string = localTime.slice(0, -6) + ' ' + localTime.slice(-2).toLowerCase();
    return finalTime;
  }
  day.setDate(day.getDate() - 1);
  if ((day.getDate() === time.getDate()) && (day.getMonth() === time.getMonth()) && (day.getFullYear() === time.getFullYear())) {
    return 'Yesterday';
  }
  return `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear() % 100}`;
};
