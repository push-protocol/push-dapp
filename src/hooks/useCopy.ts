import { useState, useRef } from 'react';

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const copyToClipboard = () => {
    if (textRef.current) {
      const textToCopy = textRef.current.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  return { textRef, isCopied, copyToClipboard };
};
