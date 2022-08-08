import React from "react";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import styled from "styled-components";

type LoaderToastType = { msg: string, color: string }

const LoaderToast = ({ msg, color }: LoaderToastType) => (
  <LoaderNotification>
    <Loader type="Oval" color={color} height={30} width={30} />
    <ToasterMsg>{msg}</ToasterMsg>
  </LoaderNotification>
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

export const updateToastNotification = (toastId: React.ReactText, toastTitle: string, toastMessage: string, toastType: "SUCCESS" | "ERROR", getToastIcon: (size: number) => JSX.Element = null) => {
  const successBgGradient = "linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #F3FFF9 42.81%)";
  const errorBgGradient = "linear-gradient(90.15deg, #FF2070 -125.65%, #FF2D79 -125.63%, #FFF9FB 42.81%)";

  toast.update(toastId, {
    render: <ToastNotification>
      <ToastIcon>
        {getToastIcon ? getToastIcon(30) : ""}
      </ToastIcon>
      <ToastContent>
        <ToastTitle>
          {toastTitle}
        </ToastTitle>
        <ToastMessage>
          {toastMessage}
        </ToastMessage>
      </ToastContent>
    </ToastNotification>,
    type: toastType === "SUCCESS" ? toast.TYPE.SUCCESS : toast.TYPE.ERROR,
    style: {
      background: toastType === "SUCCESS" ? successBgGradient : errorBgGradient,
      boxShadow: "0px 0px 10px 0px #00000005",
      borderRadius: "20px",
    },
    autoClose: 5000,
  });
}

const LoaderNotification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;
const ToastNotification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 3% 3%;
`;
const ToastIcon = styled.div`
  width:15%;
  margin-right: 2%;
`;
const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ToastTitle = styled.div`
  color: black;
  font-family: Manrope;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 1%;
`;
const ToastMessage = styled.div`
  color: #657795;
  font-family: Manrope;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
const ToasterMsg = styled.div`
  margin: 0px 10px;
`;