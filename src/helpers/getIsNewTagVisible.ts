const getIsNewTagVisible = (startDate:Date, durationInDays:number)=>{
    const currTimestamp = new Date().getTime();
    const startTimestamp = startDate.getTime();
    // console.log("currTimestamp",currTimestamp);
    // console.log("startTimestamp", startTimestamp);
    
    if(currTimestamp-startTimestamp>=durationInDays*24*60*60*1000){
        return false;
    }
    return true;
}

export default getIsNewTagVisible;