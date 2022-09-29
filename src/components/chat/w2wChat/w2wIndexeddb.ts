import { Feeds } from 'api';
import { MessageIPFS } from 'helpers/w2w/ipfs';

let db: IDBDatabase;

/**
 *
 * @param state
 * @param dbName
 * @param key It must be a DID or CID
 * @param message
 * @param index
 * @returns
 */

export const intitializeDb = async <T extends string | MessageIPFS | Feeds[]>(
  state: 'Read' | 'Insert',
  dbName: 'Inbox' | 'Intent' | 'CID_store',
  key: string,
  message: T,
  index: 'did' | 'cid'
): Promise<IDBValidKey> => {
  return await new Promise((resolve, reject) => {
    const openRequest = window.indexedDB.open('w2w_idxDb', 2);
    openRequest.onupgradeneeded = (e: any) => {
      db = e.target.result;
      const cIDStore = db.createObjectStore('Inbox', { keyPath: 'did' });
      cIDStore.createIndex('did', 'did', { unique: true });
      const cIDStore1 = db.createObjectStore('CID_store', { keyPath: 'cid' });
      cIDStore1.createIndex('cid', 'cid', { unique: true });
      const cIDStore2 = db.createObjectStore('Intent', { keyPath: 'did' });
      cIDStore2.createIndex('did', 'did', { unique: true });
    };
    openRequest.onsuccess = (e: any) => {
      db = e.target.result;

      if (state === 'Insert') {
        return resolve(addData<T>(db, key, dbName, message));
      } else if (state === 'Read') {
        return resolve(viewData(db, key, dbName, index));
      }
    };
    openRequest.onerror = (e: any) => {
      console.error('Database failed to open');
      return reject(e.target.errorCode);
    };
  });
};
export const addData = async <T extends string | MessageIPFS | Feeds[]>(
  db: IDBDatabase,
  key: string,
  dbName: string,
  chatMesage: T
): Promise<IDBValidKey> => {
  return await new Promise((resolve, reject) => {
    const newItem = {
      body: chatMesage
    };
    if (dbName === 'Inbox' || dbName === 'Intent') {
      newItem['did'] = key;
    }
    if (dbName === 'CID_store') {
      newItem['cid'] = key;
    }
    const tx: IDBTransaction = db.transaction(dbName, 'readwrite');
    const objectStore: IDBObjectStore = tx.objectStore(dbName);
    const query = objectStore.put(newItem);
    
    query.onsuccess = (e: any) => {
      return resolve(query.result);
    };
    query.onerror = (e: any) => {
      console.log(e.target.error, dbName);
      return reject(e.target.error);
    };
    tx.oncomplete = () => {
      db.close();
    };
  });
};

export const viewData = async (db: IDBDatabase, key: string, dbName: string, index: string): Promise<any> => {
  return await new Promise((resolve, reject) => {
    const tx: IDBTransaction = db.transaction(dbName, 'readonly');
    const objStore: IDBObjectStore = tx.objectStore(dbName);
    const idx: IDBIndex = objStore.index(index);
    const query: IDBRequest<any> = idx.get(key);
    query.onsuccess = (e: any) => {
      // console.log((query))
      return resolve(query.result);
    };
    query.onerror = (e: any) => {
      console.log(e.target.errorCode, dbName);
      reject(e.target.errorCode);
    };
  });
};
