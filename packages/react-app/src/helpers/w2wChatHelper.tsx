
export const getInbox = async (Did:string)=>{
    try{
        const response = await fetch('http://localhost:4000/apis/w2w/inbox/did/'+Did);
        const data:any = await response.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}
export const postMessageToServer = async (time:number,text:string,wallet:string)=>{
    try{
        const response  = await fetch('/api/w2w/postMessage',{
            method:'POST',
            headers:{
                "content-Type":'application/json'
            },
            body:JSON.stringify({
                time,
                text,
                wallet
            })
        });
        if (response.status!==201)
        {
            throw new Error("something went wrong")
        }
        const data:any = await response.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}

export const getArrivalMessage = async ()=>{
    try{
        const response = await fetch('/api/w2w/arrivalMessage');
        if (response.status!==200)
        {
            throw new Error("something went wrong")
        }
        const data:any = await response.json();
        return data
    }
    catch(err){
        console.log(err);
    }
}

export const getPrevUsersFeed = async()=>{
    try{
        const response = await fetch('api/w2w/allChats');
        if(response.status!==200)
        {
            throw new Error("Failed");
        }
        const data:any =await response.json();
        return data.messages;
    }
    catch(err){
        console.log(err);
    }
}

export const getAllWallets = async ()=>{
    try{
        const response = await fetch('api/w2w/getWallets');
        const data =  await response.json();
        return data;
    }
    catch(err){

    }
}