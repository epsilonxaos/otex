import bgfooter from '../assets/img/footerbg.svg';
import { BsDiscord, BsLinkedin, BsTelegram } from "react-icons/bs";
const Footer = () => {
	return (
		<div className="panel-pin footer pt-5" data-theme="black" id="contact">
            <div className="container-fluid w-14">
                <div className="d-flex flex-column justify-content-around py-40 pb-2 min-h-height">

                   <div className="row">
                        <div className="col-md-12">
                            <div className='footer-bg medio' style={{backgroundImage:`url(${bgfooter })`}}>
                            <p className='textos mb-0'> “OTEX is defying legacy web2 and web3 trade execution middleware <br />by combining the best of both worlds” </p>
                            <p className='textos mb-0' style={{paddingTop:"30px"}}> Félix Faria </p>
                            <p className='t-founder tlight'> Founder</p>
                            </div>
                        </div>
                    </div> 

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
