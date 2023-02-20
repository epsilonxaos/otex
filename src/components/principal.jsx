import NextSeccion from "./nextSeccion";
import NumberToCard from "./numberToCard";

import aggregator from "../assets/img/Aggregator.svg";
import market from "../assets/img/Market.svg";
import trade from "../assets/img/Trade.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Principal = () => {
	return (
		<>
			<div className="panel-pin" data-theme="white">
				{/* Video portada */}
				<div className="principal d-flex align-items-center">
					<div className="container-fluid w-14">
						<div className="row justify-content-center">
							<div className="col-12 centrado">
								<h1 className="tlo-main mb-0" data-aos="fade-up">OPTIMAL <br className="d-none d-lg-block" /> TRADE</h1>
								<h1 className="tlo-main mb-0" data-aos="fade-up" data-aos-delay="400">EXECUTION</h1>
							</div>
						</div>
					</div>

					<NextSeccion toSeccion={"about"} theme={'white'} visibleLine={false} className={"animate__animated animate__fadeIn animate__slow animate__delay-2s"} hiddenMovil={false} />

				</div>

			</div>

			<div className="panel-pin" data-theme="black">
				{/* Que es Otex */}
				<div className="principal p-0 min-h-auto bg-white" id="about">
					<div className="container-fluid w-14 h-100">
						<div className="min-h-height d-flex justify-content-between flex-column h-100 py-40">
							{/* Info */}
							<div className="row mb-5 justify-content-xl-between">
								<div className="col-12 col-md-5 col-xl-6 mb-4 text-center text-lg-left pr-xl-0">
									<h1 className="titulos" data-aos="fade-up">WHAT’S OTEX</h1>
								</div>        
								<div className="col-12 col-md-7 col-xl-6 pr-xl-5">
									<div className="wrapper-text" data-aos="fade-up" data-aos-delay="200">
										<p className="textos mb-3">OTEX helps decentralized exchanges execute asset swaps at the best possible prices — pulling liquidity across different liquidity providers —, for the lowest possible cost — reducing gas consumption wherever possible — and in the safest way possible — protecting from MEV.</p>
										<p className="textos">The stack of proprietary on-chain and off-chain software we currently maintain and are integrating across different DeFi protocols are:</p>
									</div>
								</div>
							</div>

							{/* Cards */}
							{/* <div className="row text-center mb-5">
								<div className="col-12 col-md-4 col-xs-6 mb-3">
									<div className="wrapper p-3 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in-up" data-aos-delay="200">
										<NumberToCard number={"01"} numberSize={"03"} />
										<p className="textos">
											In-house built DEX aggregators that address bespoke price discovery requirements imposed by different decentralized exchanges.
										</p>
									</div>
								</div>
								<div className="col-12 col-md-4 col-xs-6 mb-3">
									<div className="wrapper p-3 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in-up" data-aos-delay="400">
										<NumberToCard number={"02"} numberSize={"03"} />
										<p className="textos">
											Market making RFQ systems that underwrite just-in-time (deep) liquidity.
										</p>
									</div>
								</div>
								<div className="col-12 col-md-4 col-xs-6 mb-3">
									<div className="wrapper p-3 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in-up" data-aos-delay="600">
										<NumberToCard number={"03"} numberSize={"03"} />
										<p className="textos">
											Gas-optimized settlement execution contracts.
										</p>
									</div>
								</div>
							</div> */}

							<div className="row text-center m80 mb-md-5 mb-xl-5">
								<div className="col-12 col-md-4 col-xs-6 mb-3 mb-lg-0 mb-xl-3">
									<div className="card card-tecnology my-0 d-flex justify-content-center align-items-center position-relative " data-aos="zoom-in-up" data-aos-delay="200">
										<NumberToCard number={"01"} numberSize={"03"} theme={"black"}  />
										<div className="p-3" data-aos="flip-up" data-aos-delay="400">
											<div className="img-technology">
												<img src={aggregator} alt="OTEX AGGREGATOR"   />
											</div>
											<p className="textos gotic mb-3">OTEX AGGREGATOR</p>
											<p className="textos">Aggregator that searches for the best possible achievable exchange rate for any token pair across several (private and public) liquidity pools.</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 col-xs-6 mb-3 mb-lg-0 mb-xl-3">
									<div className="card card-tecnology my-0 d-flex justify-content-center align-items-center position-relative " data-aos="zoom-in-up" data-aos-delay="300">
										<NumberToCard number={"02"} numberSize={"03"} theme={"black"}  />
										<div className="p-3" data-aos="flip-up" data-aos-delay="500">
											<div className="img-technology" >
												<img src={market} alt="OTEX MARKET MAKER"  />
											</div>
											<p   className="textos gotic mb-3">OTEX MARKET MAKER</p>
											<p  data-aos="flip-up"  className="textos">Market making system. <br /> Our liquidity pool is growing. Currently it offers +100k USD in liquidity that assists us in providing very competitive quotes for any token pair.</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 col-xs-6 mb-3 mb-lg-0 mb-xl-3">
									<div className="card card-tecnology my-0 d-flex justify-content-center align-items-center position-relative " data-aos="zoom-in-up" data-aos-delay="400">
										<NumberToCard number={"03"} numberSize={"03"} theme={"black"}  />
										<div className="p-3" data-aos="flip-up" data-aos-delay="600">												
											<div className="img-technology"  >
												<img src={trade} alt="OTEX TRADE EXECUTION"  />
											</div>
											<p  className="textos gotic mb-3">OTEX TRADE EXECUTION</p>
											<p  className="textos">Gas-optimized and MEV protected trade route execution smart contracts.</p>
										</div>
									</div>
								</div>
							</div>

							{/* Text */}
							<div className="row justify-content-center text-center">
								<div className="col-12 col-md-9 col-lg-8 col-xl-7">
									<p className="textos textos-finales" data-aos="zoom-in" data-aos-delay="600"  >Our systems have helped settled <b style={{color:"#AF48FF"}}>+1B USD</b> of on-chain transactions. <br className="d-none d-md-block" />  We are keen to speak with new and established protocols to explore the <br className="d-none d-md-block" /> possibility of integrating our infrastructure into your ecosystem.</p>
									<p className="textos morado clic"><Link to="contact" spy={true} smooth={true} offset={-61} duration={500}>Contact Us</Link></p>
								</div>
							</div>
						</div>
					
						<NextSeccion toSeccion={"vision"} theme={'black'} visibleLine={false} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Principal;