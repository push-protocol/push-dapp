import { useContext } from "react";
import { IGroup } from "types/chat";
import { getGroupbyChatId } from "./getGroupByChatId";
import { getGroupByName } from "./getGroupByName";
import { ChatUserContext } from 'contexts/ChatUserContext';
export const getGroup = async (searchedGroup:string,setInvalidSearch:()=>void): Promise<IGroup> => {
  const { pushUser } = useContext(ChatUserContext);
    let group: IGroup;
    try{
        group = await getGroupbyChatId(searchedGroup, pushUser);
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