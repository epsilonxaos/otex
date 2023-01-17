import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import Logo from "./logo";

const ListMenu = () => {
    return(
        <ul id="nav" className="list-unstyled list-menu mb-1 d-md-flex align-items-md-center justify-content-md-end">
            <li className="active"><a>ABOUT</a></li>
            <li className=""><a>TECHNOLOGY</a></li>
            <li className="active"><a>VISION</a></li>
            <li className=""><a>CASE STUDY</a></li>
            <li className=""><a>METRICS</a></li>
            <li className=""><a>CONTACT</a></li>
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