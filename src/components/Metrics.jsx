import NextSeccion from "./nextSeccion";

const Metrics = () => {
	return (
		<div className="panel-pin  min-h-screen" data-theme="white">
			<div className="metrics d-flex flex-column justify-content-between">
				<div className="container-fluid w-14" style={{paddingBottom:"80px"}}>
					<div className="row justify-content-center" >
						<div className="col-12">
							<div className="text-left" style={{ paddingBottom: "80px", }} >
								<h1 className="titulos">Metrics</h1>
								<img src="src/assets/img/flechametrics.svg" alt="" />
							</div>
							<div className="row metrics-card"  >
								<div className="col-12 col-md-4 rect-metrics text-center" >
									<p className="titulos">+1B</p>
									<p className="textos">VOLUME SETTLED</p>
								</div>
								<div className="col-12 col-md-4 rect-metrics text-center">
									<p className="titulos">+10,000</p>
									<p className="textos">TRADE OPTIMISED</p>
								</div>
								<div className="col-12 col-md-4 rect-metrics text-center">
									<p className="titulos">+10</p>
									<p className="textos">INTEGRATED PROTOCOLS</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<NextSeccion theme={'white'} />			
			</div>
		</div>
	);
};

export default Metrics;
