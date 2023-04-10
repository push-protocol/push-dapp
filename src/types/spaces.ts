export interface Spaces {
    [key: string]: any;
   }
  
   export interface UserSpaces {
   [key: string]: {
    spaces:Spaces
     ,
    spaceRequests: Spaces,
  
   };
   }