import '../styles/Banner.css';

function Banner(){
    return(
        <section className="banner">
            <ul className="banner__list">
                <li className="banner__el">
                    <ul className="banner__hello">
                        <li className="banner__text"><p>Hi&nbsp;im</p></li>
                        <li className="banner__line"></li>
                    </ul>
                </li>
                <li className="banner__el">
                    <h1 className="banner__title">
                        <span className="banner__letter--one">S</span>
                        <span className="banner__letter--two">t</span>
                        <span className="banner__letter--three">e</span>
                        <span className="banner__letter--four">v</span>
                        <span className="banner__letter--five">e</span>
                        <span className="banner__letter--six">n</span>
                    </h1>
                </li>
                <li className="banner__el">
                    <p className="banner__post">A web developer</p>
                </li>
            </ul>
        </section>
    );
}

export default Banner;