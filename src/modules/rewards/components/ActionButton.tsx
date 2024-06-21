import React, { useState } from 'react';
import CommonButtonComponent from './CommonButtonComponent';

type Props = {
  userId: string;
  activityTypeId: string;
  refetchActivity: any;
};

//Action Button Common for other Activities
const ActionButton: React.FC<Props> = ({
  userId,
  activityTypeId,
  refetchActivity
}) => {

  console.log("userId, activityTypeId, refetchActivity", userId, activityTypeId, refetchActivity);

  const handleVerification = () => {
    console.log(" Verification is called")
  }


  return (
    <CommonButtonComponent
      label='Verify'
      onClick={handleVerification}
    />
  );
};

export default ActionButton;