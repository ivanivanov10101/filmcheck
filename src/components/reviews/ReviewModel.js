import {useContext, useState} from "react";
import ModalContext from "../../context/ModalContext";
import {OPEN_MODEL} from "../../context/types/ModelTypes";

const ReviewModel = (props) => {
  const {dispatch} = useContext(ModalContext);
  const [state, setState] = useState({
    review:''
  });
  const registerForm = (e) =>{
    e.preventDefault();
  }
  return (<form onSubmit={registerForm}>
    <div className="form__heading">
      <h3>Add Review</h3>
    </div>
    <div className='group'>
      <input
        type="text"
        name=""
        className="group__control"
        placeholder="Review"
        value={state.review}
        onChange={(e)=> setState({...state, review: e.target.value})}
      />
    </div>
    <div className='group model__row'>
      <input type="submit" name="" className="btn-dark" value="Submit"/>
      <span className="already-exists" onClick={()=> dispatch({type: OPEN_MODEL, payload: props.currentModel})}>Submit</span>
    </div>
  </form>)
}

export default ReviewModel;
