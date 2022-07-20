import React, { useState, useEffect } from 'react'
import './ProfileHeader.css'
//@ts-ignore
import leftArrow from '../w2wAsset/leftArrow.png'
import { CID } from 'ipfs-http-client'
import { envConfig } from '@project/contracts'

const infura_URL = envConfig.infuraApiUrl

interface profileHeaderPropsType {
  profile_picture: string
  setProfile: any
}
const ProfileHeader = (props: profileHeaderPropsType) => {
  const [activeDropdown, setActiveDropdown] = useState(false)
  const [activeProfile, setActiveProfile] = useState(false)
  const [userProfileImage, setUserProfileImage] = useState('')
  useEffect(() => {
    try {
      CID.parse(props.profile_picture) // Will throw exception if invalid CID
      setUserProfileImage(infura_URL + `${props.profile_picture}`)
    } catch (err) {
      setUserProfileImage(props.profile_picture)
    }
  }, [props.profile_picture])
  return (
    <>
      {!activeProfile ? (
        <div className="profileSectionContainer">
          <div className="w2wUserProfileImg">
            <img src={userProfileImage} />
          </div>
          <div className="w2wUserProfileDropDown">
            <i className="fa fa-ellipsis-v" aria-hidden="true" onClick={() => setActiveDropdown(!activeDropdown)}></i>
            {activeDropdown && (
              <div className="profileSectionDropDown">
                <span
                  onClick={() => {
                    setActiveDropdown(false)
                    props.setProfile(true)
                    setActiveProfile(true)
                  }}
                >
                  Profile
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="profilesectionActiveContainer">
          <div className="profilesectionBackToNormalArrow">
            <img
              src={leftArrow}
              onClick={() => {
                props.setProfile(false)
                setActiveProfile(false)
              }}
            />
          </div>
          <div className="profilesectionHeading">Profile</div>
        </div>
      )}
    </>
  )
}
export default ProfileHeader
