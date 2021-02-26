import { useContext } from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {ThemeContext} from "../contexts";

export default function Loading () {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`loading-indicator-div ${theme}`}>
            <AiOutlineLoading3Quarters className={`loading-indicator`} />
        </div>
    )
}
