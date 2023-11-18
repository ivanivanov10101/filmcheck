import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const MovieSecondaryButtons = () => {
  return (
    <div className="stats-position-secondary-buttons">
      <button className="buttons button-6">
        <ShareIcon />
      </button>
      <button className="buttons button-6">
        <VisibilityIcon />
      </button>
      <button className="buttons button-6">
        <FavoriteIcon />
      </button>
      <button className="buttons button-6">
        <BookmarkIcon />
      </button>
      <button className="buttons button-6">
        <FormatListBulletedIcon />
      </button>
    </div>
  );
};

export default MovieSecondaryButtons;
