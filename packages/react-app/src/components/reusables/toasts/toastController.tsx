
import { Slide, toast, ToastContainer, ToastOptions } from 'react-toastify';

import NotifToastUI from 'components/reusables/toasts/NotifToastUI';
import './toastOverrides.css';

export const showNotifcationToast = (payload: object, testing: boolean = false) => {
  const toastOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: testing ? 500000 : 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    rtl: false,
    closeButton: false,
    className: 'NotifToastOverride',
    onClick: () => {

    }
  }
  
  toast(
    <NotifToastUI payload={payload} />,
    toastOptions
  );
}
