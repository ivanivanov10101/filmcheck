import FooterIntro from "./FooterIntro";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                    <div className="footer__container__block">
                        <div className="row container">
                            <div className="col-6 p-15 footer-links">
                              <FooterLinks/>
                            </div>
                            <div className="col-6 p-15">
                              <FooterIntro/>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;
