const ReviewModalSubmitted = (props) =>{
  const loginForm = (e) =>{
    e.preventDefault();
  }
  return (<form onSubmit={loginForm}>
    <div className="model__heading">
      <h3>Review Added!</h3>
    </div>
  </form>)
}

export default ReviewModalSubmitted;
