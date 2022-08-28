let db: IDBDatabase

export const intitializeDb = async <T>(
  state: string,
  version: number,
  dbName: string,
  key: string,
  message: T,
  index: string
): Promise<any> => {
  return await new Promise((resolve, reject) => {
    const openRequest = window.indexedDB.open('w2w_idxDb', version)
    openRequest.onupgradeneeded = (e: any) => {
      db = e.target.result
      const cIDStore = db.createObjectStore('Inbox', { keyPath: 'did' })
      cIDStore.createIndex('did', 'did', { unique: true })
      const cIDStore1 = db.createObjectStore('CID_store', { keyPath: 'cid' })
      cIDStore1.createIndex('cid', 'cid', { unique: true })
      const cIDStore2 = db.createObjectStore('Intent', { keyPath: 'did' })
      cIDStore2.createIndex('did', 'did', { unique: true })
    }
    openRequest.onsuccess = (e: any) => {
      db = e.target.result

      if (state === 'Insert') {
        return resolve(addData<T>(db, key, dbName, message))
      } else if (state === 'Read') {
        return resolve(viewData(db, key, dbName, index))
      }
    }
    openRequest.onerror = (e: any) => {
      console.error('Database failed to open')
      return reject(e.target.errorCode)
    }
  })
}
export const addData = async <T>(db: IDBDatabase, key: string, dbName: string, chatMesage: T) => {
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
    const tx: IDBTransaction = db.transaction(dbName, 'readwrite')
    const objectStore: IDBObjectStore = tx.objectStore(dbName)
    const query = objectStore.put(newItem)

    query.onsuccess = (e: any) => {
      // console.log("success");
      return resolve(query.result)
    }
    query.onerror = (e: any) => {
      console.log(e.target.error, dbName)
      return reject(e.target.error)
    }
    tx.oncomplete = () => {
      db.close()
    }
  })
}

export const viewData = async (db: IDBDatabase, key: string, dbName: string, index: string) => {
  return await new Promise((resolve, reject) => {
    const tx: IDBTransaction = db.transaction(dbName, 'readonly')
    const objStore: IDBObjectStore = tx.objectStore(dbName)
    const idx: IDBIndex = objStore.index(index)
    const query = idx.get(key)
    query.onsuccess = (e) => {
      return resolve(query.result)
    }
    query.onerror = (e: any) => {
      console.log(e.target.errorCode, dbName)
      reject(e.target.errorCode)
    }
  })
}
