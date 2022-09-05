import '../styles/SocialsScroll.css';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import email from '../assets/email.svg';

function Socials(){
    return(
        <div className="social-scroll">
            <div className="social">
                <ul className="social__list">
                    <a className="social__link" href="https://www.instagram.com/harris_webd/">
                        <li className="social__el">
                            <img className="social__img" alt="Logo instagram" src={ instagram } />
                        </li>
                    </a>
                    <a className="social__link" href="https://www.linkedin.com/in/steven-harris-b5977222a/">
                        <li className="social__el">
                            <img className="social__img" alt="Logo linkedin" src={ linkedin } />
                        </li>
                    </a>
                    <a className="social__link" href="mailto: harris.harris.steven@hotmail.com">
                        <li className="social__el">
                            <img className="social__img" alt="Logo twitter" src={ email } />
                        </li>
                    </a>
                </ul>
            </div>
            <div className="scroll">
                <ul className="scroll__list">
                    <li className="scroll__el">s</li>
                    <li className="scroll__el">c</li>
                    <li className="scroll__el">r</li>
                    <li className="scroll__el">o</li>
                    <li className="scroll__el">l</li>
                    <li className="scroll__el scroll__el--last">l</li>
                    <li className="scroll__line"></li>
                </ul>
            </div>
        </div>
    );
}

export default Socials;