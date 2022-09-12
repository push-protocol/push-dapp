import React, { useRef, useState } from 'react'
import './dropdown.css'

const Dropdown = props => {
  const showDropdown: any = useRef()
  const [copied, setCopied] = useState<boolean>(false)

  const clickHandler = () => {
    showDropdown.current.classList.toggle('active')
  }
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }
  const handleClick = async wallet => {
    copyTextToClipboard(wallet).then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    })
  }

  return (
    <>
      <div className="dropdown_container">
        <div onClick={clickHandler} className="dropdownIcon">
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div className="dropdown_menu " ref={showDropdown}>
          <span>Wallets Linked Together</span>
          <ul>
            {props.wallets.map((wallet: string) => {
              return (
                <li key={wallet}>
                  {wallet}
                  {!copied ? (
                    <i
                      className="fa fa-clone"
                      aria-hidden="true"
                      onClick={() => {
                        handleClick(wallet)
                      }}
                    ></i>
                  ) : (
                    <i className="fa fa-check" aria-hidden="true"></i>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
export default Dropdown
