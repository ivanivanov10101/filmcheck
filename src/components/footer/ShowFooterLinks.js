import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { Fragment } from "react";

const ShowFooterLinks = ({ links, external }) => {
  return links.map((link) => (
    <ul className="footer__ul" key={link.id}>
      <li className="footer__ul__li">
        {external ? (
          <Fragment>
            <BsChevronLeft size={12} />
            <Link to={link.route} target="_blank" rel="noreferrer">
              {link.name}
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link
              to={
                link.hasOwnProperty("route")
                  ? link.route
                  : `/details/${link.id}`
              }
            >
              {link.name}
            </Link>
          </Fragment>
        )}
      </li>
    </ul>
  ));
};
export default ShowFooterLinks;
