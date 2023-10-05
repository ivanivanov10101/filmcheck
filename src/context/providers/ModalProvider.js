import {useReducer} from "react";
import ModalContext from "../ModalContext";
import ModelReducer from "../reducers/ModelReducer";
const ModalProvider = (props) => {

    const [state, dispatch] = useReducer(ModelReducer, {
        modalStatus: false,
        current: '',
    }, undefined);

    return (
        <ModalContext.Provider value={{state, dispatch}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
