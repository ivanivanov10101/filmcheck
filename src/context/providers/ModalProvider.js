import {useReducer} from "react";
import ModalContext from "../ModalContext";
import ModalReducer from "../reducers/ModalReducer";
const ModalProvider = (props) => {

    const [state, dispatch] = useReducer(ModalReducer, {
        modelStatus: false,
        current: '',
    }, undefined);

    return (
        <ModalContext.Provider value={{state, dispatch}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
