//style helper functions

interface Element {
    name: string;
    property: string;
    value: string;
  }
const StyleHelper = {
  changeStyle: (elements:Element[]) => {
    elements.map((element)=>{
        document.getElementById(element.name).style[element.property] = element.value;
    });
    
  },
};
export default StyleHelper;
