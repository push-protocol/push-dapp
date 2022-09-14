import React from "react";
import { toast } from "react-toastify";
import FadeLoader from "react-spinners/FadeLoader";
import styled, { ThemeProvider,useTheme } from "styled-components";
import { MdOutlineClose } from "react-icons/md";

type LoaderToastType = { msg: string, loaderColor: string, textColor:string }

const override: React.CSSProperties = {
  // width: "fit-content",
  height: "45px",
};

const LoaderToast = ({ msg, loaderColor, textColor }: LoaderToastType) => (
  <LoaderNotification>
    <FadeLoader
      color={loaderColor}
      height={9}
      width={2.5}
      margin={0}
      css={override}
    />
    <LoaderMessage style={{
      color: textColor
    }}>{msg}</LoaderMessage>
  </LoaderNotification>
);

const CloseButton = ({ closeToast }) => (<Button onClick={closeToast}>
  <MdOutlineClose color="#657795" size="100%" />
</Button>)

export type ShowLoaderToastType = ({loaderMessage} : {loaderMessage: string}) => React.ReactText;

export type ShowMessageToastType = ({toastTitle, toastMessage, toastType, getToastIcon}:{toastTitle: string, toastMessage: string, toastType: "SUCCESS" | "ERROR", getToastIcon?: (size: number) => JSX.Element}) => void

const useToast = (
    autoClose: number = 3000,
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "top-right"
  ) => {
  const toastId = React.useRef(null);
  const themes = useTheme();

  let isLoaderToastShown = false;

  const showLoaderToast : ShowLoaderToastType = ({loaderMessage}) => {
    isLoaderToastShown = true;
    return toastId.current = toast(
      <ThemeProvider theme={themes}>
        <LoaderToast msg={loaderMessage} loaderColor="#CF1C84" textColor={themes.toastTextColor} />
      </ThemeProvider>,
      {
        position,
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
        style: {
          background: themes.mainBg,
          border: `1px solid ${themes.toastBorderColor}`,
          boxShadow: `10px 10px 10px ${themes.toastShadowColor}`,
          borderRadius: "20px",
        }
      })
    }

  const showMessageToast : ShowMessageToastType = ({toastTitle, toastMessage, toastType, getToastIcon}) => {
    const toastUI = 
    <Toast>
      <ToastIcon>
        {getToastIcon ? getToastIcon(30) : ""}
      </ToastIcon>
      <ToastContent>
        <ToastTitle style={{
          color: themes.fontColor
        }}>
          {toastTitle}
        </ToastTitle>
        <ToastMessage style={{
          color: themes.toastTextColor
        }}>
          {toastMessage}
        </ToastMessage>
      </ToastContent>
    </Toast>;

    const toastRenderParams = {
      position,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: toast.TYPE.DEFAULT,
      closeButton: CloseButton,
      autoClose: autoClose,
      style: {
        background: toastType === "SUCCESS" ? themes.toastSuccessBackground : themes.toastErrorBackground,
        boxShadow: `10px 10px 10px ${themes.toastShadowColor}`,
        borderRadius: "20px",
      },
    }

    console.log("toastId", toastId.current);

    if(!isLoaderToastShown){
      // render a new toast
      toastId.current = toast(
        toastUI,
        {
          ...toastRenderParams
        }
      );
    }

    // update the old toast
    toast.update(toastId.current, {
      render: toastUI,
      ...toastRenderParams 
    });
  }

  return {
    showLoaderToast, showMessageToast
  }
}

const LoaderNotification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1% 3%;
`;
const LoaderMessage = styled.div`
  margin-left: 3%;
  font-family: Manrope;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3rem;
  letter-spacing: 0em;
  text-align: left;
`;

const Toast = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 1.5% 1%;
`;
const ToastIcon = styled.div`
  width:15%;
  margin-right: 4%;
`;
const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ToastTitle = styled.div`
  font-family: Manrope;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.4rem;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 1%;
`;
const ToastMessage = styled.div`
  font-family: Manrope;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3rem;
  letter-spacing: 0em;
  text-align: left;
`;

const Button = styled.button`
  cursor:pointer;
  background:none;
  margin:0;
  padding:0;
  width: 1.3rem;
  height: 1.3rem;
`

export default useToast;