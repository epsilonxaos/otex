import NextSeccion from "./nextSeccion";

import aggregator from "../assets/img/Aggregator.svg";
import market from "../assets/img/Market.svg";
import trade from "../assets/img/Trade.svg";
import NumberToCard from "./numberToCard";

const Technology = () => {
	return (
		<div className=" panel-pin technology p-0 " data-theme="black" id="technology">
			<div className="container-fluid w-14">
				<div className="d-flex flex-column justify-content-between py-40 min-h-height">
					<div className="mb-4">
						<h1 className="titulos mb-lg-5">TECHNOLOGY</h1>
					</div>

					<div className="row text-center m80 mb-md-5 mb-xl-5">
						<div className="col-12 col-md-4 col-xs-6 mb-3 mb-lg-0 mb-xl-3">
							<div className="card card-tecnology my-0 d-flex justify-content-center align-items-center position-relative">
								<NumberToCard number={"01"} numberSize={"03"} theme={"black"} />
								<div className="p-3">
									<div className="img-technology">
										<img src={aggregator} alt="OTEX AGGREGATOR" />
									</div>
									<p className="textos gotic mb-3">OTEX AGGREGATOR</p>
									<p className="textos">Aggregator that searches for the best possible achievable exchange rate for any token pair across several (private and public) liquidity pools.</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-4 col-xs-6 mb-3 mb-lg-0 mb-xl-3">
							<div className="card card-tecnology my-0 d-flex justify-content-center align-items-center position-relative">
								<NumberToCard number={"02"} numberSize={"03"} theme={"black"} />
								<div className="p-3">
									<div className="img-technology">
										<img src={market} alt="OTEX MARKET MAKER" />
									</div>
									<p className="textos gotic mb-3">OTEX MARKET MAKER</p>
									<p className="textos">Market making system. <br /> Our liquidity pool is growing. Currently it offers +100k USD in liquidity that assists us in providing very competitive quotes for any token pair.</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-4 col-xs-6 mb-3 mb-lg-0 mb-xl-3">
							<div className="card card-tecnology my-0 d-flex justify-content-center align-items-center position-relative">
								<NumberToCard number={"03"} numberSize={"03"} theme={"black"} />
								<div className="p-3">												
									<div className="img-technology">
										<img src={trade} alt="OTEX TRADE EXECUTION" />
									</div>
									<p className="textos gotic mb-3">OTEX TRADE EXECUTION</p>
									<p className="textos">Gas-optimized and MEV protected trade route execution smart contracts.</p>
								</div>
							</div>
						</div>
					</div>

				</div>
				
				<NextSeccion />
			</div>
				
			

		</div>
	);
};

export default Technology;
