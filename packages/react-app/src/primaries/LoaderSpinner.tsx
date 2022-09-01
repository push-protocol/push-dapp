import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const override: React.CSSProperties = {
    // width: "fit-content",
    height: "45px",
};

const LoaderSpinner = () => {
    return (
        <FadeLoader
            color="#CF1C84"
            height={9}
            width={2.5}
            margin={0}
            css={override}
        />
    )
}

export default LoaderSpinner;