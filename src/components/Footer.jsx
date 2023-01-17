import bgfooter from '../assets/img/footerbg.svg';
import { BsDiscord, BsLinkedin, BsTelegram } from "react-icons/bs";
const Footer = () => {
	return (
		<div className="panel-pin footer min-h-screen container-fluid d-flex flex-column justify-content-between" data-theme="white" style={{ paddingTop: "70px", paddingBottom: "50px", background: "#000" }}>
            <div className="row justify-content-center">
                <div className="col-12 col-md-11 footer-bg text-center " style={{backgroundImage:`url(${bgfooter })`,height:"450px",borderRadius:"16px"}}>
                    <p className='title-footer'>
                        “OTEX is defying legacy web2 and web3 trade execution middleware <br />
                        by combining the best of both worlds”
                    </p>
                    <p className='title-footer' style={{paddingTop:"30px"}}>
                    Felix Faria 
                    </p>
                    <p className='title-footer2'>
                    Founder</p>
                </div>
                <div className="col-12 col-md-11 justify-content-center " style={{paddingTop:"50px",paddingBottom:"50px"}}>
                <ul className="d-flex justify-content-center p-0 list-unstyled m-0 socialMedia">
                    <li className="col-12 col-md-4 title-footer-buttons centrar footer-botones"><a> <BsLinkedin className='svgFooter'/>  Linkedin</a></li>
                    <li className="col-12 col-md-4 title-footer-buttons centrar footer-botones"><a> <BsDiscord className='svgFooter'/> Discord</a></li>
                    <li className="col-12 col-md-4 title-footer-buttons centrar footer-botones"><a> <BsTelegram className='svgFooter'/> Telegram</a></li>
                </ul>
                </div>
               
                <div className="text-center ">
                    <p className='title-footer-leyend'>
                        DESIGN & DEVELOPMENT BY MADEBYPARTNERS® <br />
                        2023 OTEX®. ALL RIGHTS RESERVED.
                    </p>
                    
                </div>
            </div>

        </div>
		
	);
};

export default Footer;
