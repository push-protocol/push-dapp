export const getAppropriateTimestamp = (time: Date) => {
  let day = new Date();

  if (day.getDate() == time.getDate() && day.getMonth() == time.getMonth() && day.getFullYear() == time.getFullYear()) {
    const localTime: string = time.toLocaleTimeString('en-US');
    const finalTime: string = localTime.slice(0, -6) + ' ' + localTime.slice(-2).toLowerCase();
    return finalTime;
  }
  day.setDate(day.getDate() - 1);
  if (day.getDate() == time.getDate() && day.getMonth() == time.getMonth() && day.getFullYear() == time.getFullYear()) {
    return 'Yesterday';
  }
  return `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear() % 100}`;
};
