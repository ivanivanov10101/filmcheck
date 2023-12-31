import { useContext, useState } from "react";
import ModalContext from "../../context/ModalContext";
import { OPEN_MODEL } from "../../context/types/ModelTypes";

const ReviewModel = (props) => {
  const { dispatch } = useContext(ModalContext);
  const [state, setState] = useState({
    review: "",
  });
  const registerForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={registerForm}>
      <div className="form__heading">
        <h3>Add Your Review Here...</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="review-group__control"
          value={state.review}
          onChange={(e) => setState({ ...state, review: e.target.value })}
        />
      </div>
      <div className="group model__row">
        <span
          className="btn-dark"
          onClick={() =>
            dispatch({ type: OPEN_MODEL, payload: props.currentModel })
          }
        >
          Submit
        </span>
      </div>
    </form>
  );
};

export default ReviewModel;
