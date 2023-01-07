const Header = () => {
    return (
        <nav className="menu--desk--white">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-12 col-md-4 col-xs-4">
                    
                    <a href="">
                        <img src="src/assets/img/Logo.svg" alt="" />
                    </a>
                </div>
                <div className="col-12 col-md-8 col-xs-8 ">
                    <ul id="nav">
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