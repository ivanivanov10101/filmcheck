import { Link } from "react-router-dom";
import { Fragment } from "react";

const ShowFooterLinks = ({ links }) => {
  return links.map((link) => (
    <ul className="footer__ul" key={link.id}>
      <li className="footer__ul__li">
        {
          <Fragment>
            <Link to={link.route}>{link.name}</Link>
          </Fragment>
        }
      </li>
    </ul>
  ));
};
export default ShowFooterLinks;
