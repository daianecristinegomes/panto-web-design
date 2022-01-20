import react from "react";
import "./footer.css"
import IconFB from "../../assets/icon-fb.png"
import IconTT from "../../assets/icon-tt.png"
import IconInsta from "../../assets/icon-insta.png"

const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <h6>Follow Us</h6>

                <ul className="ul-footer">
                    <li className="social-links">
                        <a><img className="icon-fb" src={IconFB} alt="icone facebook" /></a>
                        <a href="">Facebook</a>
                    </li>

                    <li className="social-links">
                        <a><img className="icon-tt" src={IconTT} alt="icone twitter" /></a>
                        <a href="">Twitter</a>
                    </li>

                    <li className="social-links">
                        <a><img className="icon-ista" src={IconInsta} alt="icone instagram" /></a>
                        <a href="">Instagram</a>
                    </li>
                </ul>
            </div>

            <div className="end-footer">
                <span className="copyright">Copyright © 2021</span>
                <a className="terms" href="">Terms & Conditions</a>
                <a className="privacy" href="privacy">Privacy Policy</a>
            </div>
        </footer>
    );
}
export default Footer;