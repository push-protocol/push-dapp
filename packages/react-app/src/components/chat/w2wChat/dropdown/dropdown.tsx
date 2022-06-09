import React,{useRef} from 'react';
import './dropdown.css';
//@ts-ignore
import line from '../w2wAsset/line.jpg';
const Dropdown = ()=>{
    const showDropdown:any = useRef();

    const clickHandler = ()=>{
        showDropdown.current.classList.toggle('active');
    }
    return (
      <>
        <div className="dropdown_container">
              <div onClick={clickHandler} className='dropdownIcon'>
                <i className ="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <div className="dropdown_menu " ref={showDropdown} >
                <ul>
                   <li><i className="fa fa-ban" aria-hidden="true"></i>Block</li>
                   <li><img src={line}/></li>
                    <li><i className="fa fa-microphone-slash" aria-hidden="true"></i>Mute</li>
                </ul>
              </div>
          </div>
      </>
      )
}
export default Dropdown;