import NextSeccion from "./nextSeccion";

import aggregator from "../assets/img/Aggregator.svg";
import market from "../assets/img/Market.svg";
import trade from "../assets/img/Trade.svg";

const Technology = () => {
	return (
		<div className=" panel-pin technology p-0 " data-theme="black">
			<div className="container-fluid w-14">
				<div className="d-flex flex-column justify-content-between py-40 min-h-height">
					<h1 className="titulos text-right mb-4 mb-lg-5">TECHNOLOGY</h1>

					<div className="row text-center">
						<div className="col-12 col-md-4 col-xs-6 mb-3 mb-lg-0 mb-xl-3">
							<div className="card card-tecnology d-flex flex-columns align-items-center">
								<div className="col-5 col-xl-6 d-flex align-items-end justify-content-center">
									<div className="img-technology">
										<img src={aggregator} alt="OTEX AGGREGATOR" />
									</div>
								</div>
								<div className="p-3">
									<p className="textos public">OTEX AGGREGATOR</p>
									<p className="textos">Aggregator that searches for the best possible achievable exchange rate for any token pair swap across several (private and public) liquidity pools.</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-4 col-xs-6 mb-3 mb-lg-0 mb-xl-3">
							<div className="card card-tecnology d-flex flex-columns align-items-center">
								<div className="col-5 col-xl-6 d-flex align-items-end justify-content-center">
									<div className="img-technology">
										<img src={market} alt="OTEX MARKET MAKER" />
									</div>
								</div>
								<div className="p-3">
									<p className="textos public">OTEX MARKET MAKER</p>
									<p className="textos">Market making system. Our liquidity pool is growing. Currently, we offer +100k USD in liquidity across different token pairs. We are prepared to offer the most competitive quotes and market make long-tail token pairs.</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-4 col-xs-6 mb-3 mb-lg-0 mb-xl-3">
							<div className="card card-tecnology d-flex flex-columns align-items-center">
								<div className="col-5 col-xl-6 d-flex align-items-end justify-content-center">
									<div className="img-technology">
										<img src={trade} alt="OTEX TRADE EXECUTION" />
									</div>
								</div>
								<div className="p-3">												
									<p className="textos public">OTEX TRADE EXECUTION</p>
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
