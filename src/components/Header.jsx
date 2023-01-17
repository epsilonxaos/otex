import Logo from "./logo";

const Header = ({theme}) => {
    return (
        <nav className={`menu--desk py-3 theme-${theme}`} id="navbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <Logo />
                    </div>
                    <div className="col-12 col-md-6">
                        <ul id="nav" className="list-unstyled d-flex align-items-center justify-content-between">
                            <li className="active"><a>ABOUT</a></li>
                            <li className=""><a>TECHNOLOGY</a></li>
                            <li className=""><a>VISION</a></li>
                            <li className=""><a>CASE STUDY</a></li>
                            <li className=""><a>METRICS</a></li>
                            <li className=""><a>CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
  
export default Header;