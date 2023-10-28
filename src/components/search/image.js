import {mergeClassName} from "../../utils";

export const Image = (props) => {
  return (
    <div
      className={mergeClassName(
        'bg-primary h-full w-full rounded-lg overflow-hidden',
        props.className
      )}
    >
      <img
        src={props.src}
        className="min-h-[200px] w-full h-full object-cover"
      ></img>
    </div>
  )
}
