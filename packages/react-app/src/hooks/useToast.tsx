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

const useToast = () => {
  const toastId = React.useRef(null);
  const themes = useTheme();

  const showToast = (loaderMessage: string) =>
    toastId.current = toast(
      <ThemeProvider theme={themes}>
        <LoaderToast msg={loaderMessage} loaderColor="#CF1C84" textColor={themes.toastTextColor} />
      </ThemeProvider>,
      {
        position: "top-right",
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
          // boxShadow: "0px 0px 10px 0px #00000005",
          boxShadow: "10px 10px 10px #ccc",
          borderRadius: "20px",
        }
      }
    );

  const updateToast = (toastTitle: string, toastMessage: string, toastType: "SUCCESS" | "ERROR", getToastIcon: (size: number) => JSX.Element = null) => {
    const successBgGradient = themes.scheme==="dark"
    ? "linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)"
    : "linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #F3FFF9 42.81%)";

    const errorBgGradient = themes.scheme==="dark"
    ? "linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)"
    : "linear-gradient(90.15deg, #FF2070 -125.65%, #FF2D79 -125.63%, #FFF9FB 42.81%)";


    toast.update(toastId.current, {
      render:
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
        </Toast>
      ,
      type: toast.TYPE.DEFAULT,
      closeButton: CloseButton,
      autoClose: 3000,
      style: {
        background: toastType === "SUCCESS" ? successBgGradient : errorBgGradient,
        // boxShadow: "0px 0px 10px 0px #00000005",
  boxShadow: "10px 10px 10px #ccc",
        borderRadius: "20px",
      },
    });
  }

  return {
    showToast, updateToast
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