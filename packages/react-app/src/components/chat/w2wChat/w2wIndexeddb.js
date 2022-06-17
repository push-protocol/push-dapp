let db;
export const intitializeDb =async (state,version,dbName,cid,message,index)=>{
    return await  new Promise((resolve,reject)=>{
        const openRequest = window.indexedDB.open('w2w_idxDb',1);
        openRequest.onupgradeneeded=e=>{
            db = e.target.result;
            const cIDStore = db.createObjectStore(dbName,{keyPath:index});
            cIDStore.createIndex(index,index,{unique:true});
        }
        openRequest.onsuccess= (e)=>{
            db = e.target.result;
            if(state==='Insert')
            {
                
                return resolve(addData(db, cid,dbName, message))
            }
            else if(state==='Read')
            {
                return resolve(viewData(db,cid,dbName))

            }
        }
        openRequest.onerror=e=>{
            console.error('Database failed to open');
            return reject(e.target.errorCode);
        }
    })
    
}

export const addData =async (db,cid,dbName,chatMesage)=>{
    return await new Promise((resolve,reject)=>{
        const newItem = {
            cid:cid,
            body:chatMesage
        }
        const tx = db.transaction(dbName,'readwrite');
        const objectStore = tx.objectStore(dbName);
        const query = objectStore.add(newItem);
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

export const viewData =async(db,cid,dbName,index)=>{
    return await  new Promise((resolve,reject)=>{
        const tx = db.transaction(dbName,'readonly');
        const objStore = tx.objectStore(dbName);
        const idx = objStore.index(index);
        const query = idx.get(cid);
        query.onsuccess = (e)=>{
            console.table(query.result);
            return resolve(query.result);
        }
        query.onerror = (e)=>{
            console.log(e.target.errorCode);
            reject(e.target.errorCode);
        }
    })
}