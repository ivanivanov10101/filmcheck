import React, { useReducer } from "react";
import { reducer } from "../../helpers/reducer";

function ReadMoreCollapse({ content }) {
  const initialState = {
    sliceLast: "300",
    read: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  if (!content) return null;

  const slicedContent = content.substring(0, state.sliceLast);

  const readMore = () => {
    dispatch({ type: "READ_MORE" });
  };
  const readLess = () => {
    dispatch({ type: "READ_LESS" });
  };
  return (
    <>
      <p className="content">
        {slicedContent}
        {content.length > "180" ? <>{!state.read ? "..." : ""}</> : ""}
      </p>
      {content.length > "180" ? (
        <>
          {!state.read ? (
            <p className="read-more" onClick={readMore}>
              [ Read More ]
            </p>
          ) : (
            <p className="read-more" onClick={readLess}>
              [ Read Less ]
            </p>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default ReadMoreCollapse;
