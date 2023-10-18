import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import { CLOSE_MODEL } from "../context/types/ModelTypes";

const Model = (props) => {
  const { state, dispatch } = useContext(ModalContext);

  const close = (e) => {
    if (e.target.getAttribute("class") === "model") {
      dispatch({ type: CLOSE_MODEL });
    }
  };
  return state.modelStatus && state.current === props.current ? (
    <div className="model" onClick={close}>
      <div className="model__body">{props.children}</div>
    </div>
  ) : (
    ""
  );
};

export default Model;
