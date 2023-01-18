import bgfooter from '../assets/img/footerbg.svg';
import { BsDiscord, BsLinkedin, BsTelegram } from "react-icons/bs";
const Footer = () => {
	return (
		<div className="panel-pin footer" data-theme="white">
            <div className="container-fluid w-14">
                <div className="d-flex flex-column justify-content-between">
                    
                    
                        {/* <div className="col-12 footer-bg  " style={{backgroundImage:`url(${bgfooter })`,height:"450px",borderRadius:"16px"}}>
                            <p className='textos'>
                                “OTEX is defying legacy web2 and web3 trade execution middleware <br />
                                by combining the best of both worlds”
                            </p>
                            <p className='textos' style={{paddingTop:"30px"}}>
                            Felix Faria 
                            </p>
                            <p className='t-founder'>
                            Founder</p>
                        </div> */}
                        
                        <div className="col-12 justify-content-center " style={{paddingTop:"50px",paddingBottom:"50px"}}>
                            <ul className="centro p-0 list-unstyled m-0 socialMedia">
                                <li className="col-12 col-md-4 col-xs-6  title-footer-buttons footer-botones"><a> <BsLinkedin className='svgFooter'/>  Linkedin</a></li>
                                <li className="col-12 col-md-4 col-xs-6  title-footer-buttons footer-botones"><a> <BsDiscord className='svgFooter'/> Discord</a></li>
                                <li className="col-12 col-md-4 col-xs-6  title-footer-buttons footer-botones"><a> <BsTelegram className='svgFooter'/> Telegram</a></li>
                            </ul>
                        </div>
                        <div className="text-center ">
                            <p className='leyend'>
                                DESIGN & DEVELOPMENT BY MADEBYPARTNERS® <br />
                                2023 OTEX®. ALL RIGHTS RESERVED.
                            </p>
                            
                        </div>
                    
                </div>
            </div>
        </div>
		
	);
};

export default Footer;
