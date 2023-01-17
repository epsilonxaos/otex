import NextSeccion from "./nextSeccion";

const Technology = () => {
	return (
		<div className="technology panel-pin  min-h-screen container-fluid d-flex flex-column justify-content-between" data-theme="black" style={{ paddingTop: "70px", paddingBottom: "50px", background: "#EAEAEA" }}>
			<div className="row justify-content-center">
				<div className="col-12 col-md-11">
					<div className="text-right" style={{ paddingBottom: "70px", }} >
						<h1 className="title-tech">TECHNOLOGY</h1>
					</div>
					<div className="row">
						<div className="col-12 col-md-4 col-xs-6 text-center">
							<div className="card card-tecnology h-100">
								<div className="img-technology">
									<img src="src/assets/img/Aggregator.svg" alt="" />
								</div>

								<div className="p-3">
									<p className="title-text-tech">OTEX AGGREGATOR</p>
									<p className="text-tech">Aggregator that searches for the best possible achievable exchange rate for any token pair swap across several (private and public) liquidity pools.</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-4 col-xs-6 text-center">
							<div className="card card-tecnology h-100">
								<div className="img-technology">
									<img src="src/assets/img/Market.svg" alt="" />
								</div>

								<div className="p-3">
									<p className="title-text-tech">OTEX MARKET MAKER</p>
									<p className="text-tech">Market making system. Our liquidity pool is growing. Currently, we offer +100k USD in liquidity across different token pairs. We are prepared to offer the most competitive quotes and market make long-tail token pairs.</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-4 col-xs-6 text-center">
							<div className="card card-tecnology h-100">
								<div className="img-technology">
									<img src="src/assets/img/Trade.svg" alt="" />
								</div>

								<div className="p-3">
									<p className="title-text-tech">OTEX TRADE EXECUTION</p>
									<p className="text-tech">Gas-optimized and MEV protected trade route execution smart contracts.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<NextSeccion />
		</div>
	);
};

export default Technology;
