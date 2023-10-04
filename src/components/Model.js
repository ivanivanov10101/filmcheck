import {useContext} from "react";
import ModalContext from "../context/ModalContext";
import {CLOSE_MODAL} from "../context/types/ModalTypes";

const Model  = (props) =>{
    const {state, dispatch} = useContext(ModalContext);

    const close = (e) => {
        if(e.target.getAttribute('class') === 'model'){
            dispatch({type: CLOSE_MODAL});
        }
    }
    return state.modelStatus && state.current === props.current ? (<div className='model' onClick={close}>
            <div className='model__body'>
                {props.children}
            </div>
        </div>):
        ('');
}

export default Model;
