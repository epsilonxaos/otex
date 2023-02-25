import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import Logo from "./logo";
import { Link, animateScroll as scroll } from "react-scroll";

const ListMenu = () => {
    return(
        <ul id="nav" className="list-unstyled list-menu mb-1 d-md-flex align-items-md-center justify-content-md-end">
            <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-61} duration={500} >ABOUT</Link></li>
            <li><Link activeClass="active" to="vision" spy={true} smooth={true} offset={-61} duration={500} >VISION</Link></li>
            <li><Link activeClass="active" to="caseStudy" spy={true} smooth={true} offset={-61} duration={500} >CASE STUDY</Link></li>
            <li><Link activeClass="active" to="metrics" spy={true} smooth={true} offset={-61} duration={500} >METRICS</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-61} duration={500} >CONTACT</Link></li>
        </ul>
    )
}

const Header = ({theme}) => {
    const [active, setActive] = useState(false);
    const ref = useClickOutside(() => setActive(false));

    const handlerToggle = () => setActive(!active);

    return (
        <>
            <div ref={ref}>
                <nav className={`menu--desk py-3 theme-${theme}`} id="navbar">
                    <div className="container-fluid w-14">
                        <div className="row align-items-center">
                            <div className="col-6 col-md-3">
                                <Logo />
                            </div>
                            <div className="col-6 text-right d-md-none">
                                <div className={`menu menu-3 ${active && ('active')}`} onClick={() => handlerToggle()}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="col-12 d-none d-md-block col-md-9">
                                <ListMenu />
                            </div>
                        </div>
                    </div>
                </nav>

                <div className={`sidebar d-md-none ${active && ('active')}`}>
                    <ListMenu />
                </div>

            </div>
            
            {active && (<div className="backdrop"></div>)}
        </>
    );
};
  
export default Header;