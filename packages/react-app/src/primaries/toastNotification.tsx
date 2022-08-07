import React from "react";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import styled from "styled-components";

type LoaderToastType = { msg: string, color: string }

const LoaderToast = ({ msg, color }: LoaderToastType) => (
  <Toaster>
    <Loader type="Oval" color={color} height={30} width={30} />
    <ToasterMsg>{msg}</ToasterMsg>
  </Toaster>
);

export const showToastNotification = (loaderMessage: string) => {
  const toastId = toast(
    <LoaderToast msg={loaderMessage} color="#35c5f3" />,
    {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );

  return toastId;
}

export const updateToastNotification = (toastId: React.ReactText, toastMessage: string, toastType: "SUCCESS" | "ERROR") => {
  toast.update(toastId, {
    render: <Toaster>{toastMessage}</Toaster>,
    style: {
      // width:"10vw",
      // height: "20vh",
      background: "linear-gradient(90.15deg, #FF2070 -125.65%, #FF2D79 -125.63%, #FFF9FB 42.81%)",
      boxShadow: "0px 0px 10px 0px #00000005",
      borderRadius: "20px",
      padding: "2% 5%",
    },
    autoClose: 5000,
  });
}

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;
const ToasterMsg = styled.div`
  margin: 0px 10px;
`;