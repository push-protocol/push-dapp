let db;
export const intitializeDb =async (state,version,dbName,key,message,index)=>{
    return await  new Promise((resolve,reject)=>{
        const openRequest = window.indexedDB.open('w2w_idxDb',version);
        openRequest.onupgradeneeded=e=>{
            db = e.target.result;
            const cIDStore = db.createObjectStore(dbName,{keyPath:index});
            cIDStore.createIndex(index,index,{unique:true});
        }
        openRequest.onsuccess= (e)=>{
            db = e.target.result;
            if(state==='Insert')
            {
                
                return resolve(addData(db, key,dbName, message,index))
            }
            else if(state==='Read')
            {
                return resolve(viewData(db,key,dbName,index))

            }
        }
        openRequest.onerror=e=>{
            console.error('Database failed to open');
            return reject(e.target.errorCode);
        }
    })
    
}

export const addData =async (db,key,dbName,chatMesage,index)=>{
    return await new Promise((resolve,reject)=>{
        
        
        const newItem = {
            body:chatMesage
        }
        if(dbName==='Inbox')
        {
            newItem['did'] = key
        }
        if(dbName==='CID_store')
        {
            newItem['cid'] = key
        }
       
        const tx = db.transaction(dbName,'readwrite');
        const objectStore = tx.objectStore(dbName);
       /* const v = viewData(db,key,dbName,index);
        console.log(v)
        if(v)
        {
            let deleted = objectStore.delete(key);
            deleted.onsuccess = (e)=>{
                const query = objectStore.add(newItem);
                console.log(newItem);
                query.onsuccess = (e)=>{
                    return resolve(query.result)
                }
                query.onerror = (e)=>{
                    return reject(e.targert.errorCode);
                }
            }
        }*/
        const query = objectStore.add(newItem);
        console.log(newItem);
        query.onsuccess = (e)=>{
            return resolve(query.result)
        }
        query.onerror = (e)=>{
            return reject(e.targert.errorCode);
        }
        tx.oncomplete = ()=>{
           db.close();
        }
    })

}

export const viewData =async(db,key,dbName,index)=>{
    return await  new Promise((resolve,reject)=>{
        const tx = db.transaction(dbName,'readonly');
        const objStore = tx.objectStore(dbName);
        const idx = objStore.index(index);
        const query = idx.get(key);
        query.onsuccess = (e)=>{
           
            return resolve(query.result);
        }
        query.onerror = (e)=>{
            console.log(e.target.errorCode);
            reject(e.target.errorCode);
        }
    })
}