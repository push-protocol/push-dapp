import { randomBytes } from '@stablelib/random';
import { toString } from 'uint8arrays/to-string';
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
        const response = await fetch('http://localhost:4000/apis/w2w/getUsers');
        const data =  await response.json();
        console.log(data);
        return data;
    }
    catch(err){

    }
}
export const createUser = async (did:string)=>{
    try{
        const response  = await fetch('http://localhost:4000/apis/w2w/createUser',{
            method:'PUT',
            headers:{
                "content-Type":'application/json'
            },
            body:JSON.stringify({
                did
            })
        });
        const data = await response.json();
        return data;
    }
    catch(err)
    {

    }
}

export const getKeys = async (Did:string)=>{
    try{
        console.log("keys");
        const response = await fetch('http://localhost:4000/apis/w2w/keys/did/'+Did);
        const data:any = await response.json();
        console.log(data);
        return data;
        
       
    }
    catch(err){
        console.log(err);
    }

}

export const updateKeys = async (Did:string,privateKey:string,publicKey:string)=>{
    try{
        const response  = await fetch('http://localhost:4000/apis/w2w/keys/did/'+Did,{
            method:'PUT',
            headers:{
                "content-Type":'application/json'
            },
            body:JSON.stringify({
                publicKey,
                privateKeyCID:privateKey
            })
        });
        return response.json();
    }
    catch(err)
    {

    }
}
export function randomString() {
    return toString(randomBytes(16), 'base64');
}
