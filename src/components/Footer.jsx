import bgfooter from '../assets/img/footerbg.svg';
import { BsDiscord, BsLinkedin, BsTelegram } from "react-icons/bs";
const Footer = () => {
	return (
		<div className="panel-pin footer pt-5 pb-0" data-theme="black" id="contact">
            <div className="container-fluid w-14">
                <div className="d-flex flex-column justify-content-around py-40 pb-2 min-h-height">

                   <div className="row">
                        <div className="col-md-12">
                            <div className='footer-bg medio' style={{backgroundImage:`url(${bgfooter })`}} data-aos="fade-up">
                            <p data-aos="zoom-out" data-aos-delay="100" className='textos mb-0'> “OTEX is defying legacy web2 and web3 trade execution middleware <br /> by combining the best of both worlds” </p>
                            <p data-aos="zoom-out" data-aos-delay="200" className='textos mb-0' style={{paddingTop:"30px"}}> Félix Farías </p>
                            <p data-aos="zoom-out" data-aos-delay="300" className='t-founder tlight'> Founder</p>
                            </div>
                        </div>
                    </div> 

                    <div className="col-12 justify-content-center " style={{paddingTop:"50px",paddingBottom:"50px"}}>
                        <ul className="centro p-0 list-unstyled m-0 socialMedia" data-aos="zoom-in-up" data-aos-delay="300">
                            <li className="col-12 col-md-4 col-xs-6  title-footer-buttons footer-botones"><a data-aos="fade-up" data-aos-delay="300"> <BsLinkedin className='svgFooter' />  Linkedin</a></li>
                            <li className="col-12 col-md-4 col-xs-6  title-footer-buttons footer-botones"><a data-aos="fade-up" data-aos-delay="400"> <BsDiscord className='svgFooter' /> Discord</a></li>
                            <li className="col-12 col-md-4 col-xs-6  title-footer-buttons footer-botones"><a data-aos="fade-up" data-aos-delay="500"> <BsTelegram className='svgFooter' /> Telegram</a></li>
                        </ul>
                    </div>
                    <div className="text-center ">
                        <p className='leyend' data-aos="zoom-in" data-aos-delay="500">
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
