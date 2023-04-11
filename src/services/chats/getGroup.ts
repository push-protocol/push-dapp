
import { IGroup } from "types/chat";
import { getGroupbyChatId } from "./getGroupByChatId";
import { getGroupByName } from "./getGroupByName";

export const getGroup = async (searchedGroup:string,setInvalidSearch:()=>void): Promise<IGroup> => {
    let group: IGroup;
    try{
        group = await getGroupbyChatId(searchedGroup);
      } catch (err) {
        if((err.message as string).includes('No group with chatId')){
          try{
            group = await getGroupByName(searchedGroup);
          }
      catch(err){
        setInvalidSearch();
      }
        
        }else{
          setInvalidSearch();
        }
        
      }
    return group;

};