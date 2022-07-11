let db;
export const intitializeDb = async (state, version, dbName, key, message, index) => {
    return await new Promise((resolve, reject) => {
        const openRequest = window.indexedDB.open('w2w_idxDb', version);
        openRequest.onupgradeneeded = (e) => {
            db = e.target.result;
            const cIDStore = db.createObjectStore('Inbox', { keyPath: 'did' });
            cIDStore.createIndex('did', 'did', { unique: true });
            const cIDStore1 = db.createObjectStore('CID_store', { keyPath: 'cid' });
            cIDStore1.createIndex("cid", "cid", { unique: true });
            const cIDStore2 = db.createObjectStore('Intent', { keyPath: 'did' });
            cIDStore2.createIndex('did', 'did', { unique: true });
        }
        openRequest.onsuccess = (e) => {
            db = e.target.result;

            if (state === 'Insert') {

                return resolve(addData(db, key, dbName, message, index))
            }
            else if (state === 'Read') {
                return resolve(viewData(db, key, dbName, index))
            }
        }
        openRequest.onerror = e => {
            console.error('Database failed to open');
            return reject(e.target.errorCode);
        }
    })
}
export const addData = async (db, key, dbName, chatMesage, index) => {
    return await new Promise((resolve, reject) => {
        const newItem = {
            body: chatMesage
        }
        if (dbName === 'Inbox' || dbName === 'Intent') {
            newItem['did'] = key
        }
        if (dbName === 'CID_store') {
            newItem['cid'] = key
        }
        console.log(newItem);
        const tx = db.transaction(dbName, 'readwrite');
        const objectStore = tx.objectStore(dbName);

        const query = objectStore.put(newItem);

        query.onsuccess = (e) => {
            console.log("success");
            return resolve(query.result)
        }
        query.onerror = (e) => {
            console.log(e.target.error, dbName);
            return reject(e.target.error);
        }
        tx.oncomplete = () => {
            db.close();
        }
    })

}

export const viewData = async (db, key, dbName, index) => {
    return await new Promise((resolve, reject) => {
        const tx = db.transaction(dbName, 'readonly');
        const objStore = tx.objectStore(dbName);
        const idx = objStore.index(index);
        const query = idx.get(key);
        query.onsuccess = (e) => {

            return resolve(query.result);
        }
        query.onerror = (e) => {
            console.log(e.target.errorCode, dbName);
            reject(e.target.errorCode);
        }
    })
}