import NextSeccion from "./nextSeccion";

const Metrics = () => {
	return (
		<div className="panel-pin metrics min-h-screen container-fluid d-flex flex-column justify-content-between" 
			data-theme="white"
		style={{ paddingTop: "70px", paddingBottom: "50px",background: "#000" }}>
			<div className="row justify-content-center">
				<div className="col-12 col-md-11">
					<div className="text-left" style={{ paddingBottom: "70px", }} >
						<h1 className="title-metrics">Metrics</h1>
                        <img src="src/assets/img/flechametrics.svg" alt="" />
					</div>
					<div className="row card-metrics" >
						<div className="col-12 col-md-4 rect-metrics text-center" >
							<p className="title-text-metrics">+1B</p>
							<p className="text-metrics">VOLUME SETTLED</p>
						</div>
						<div className="col-12 col-md-4 rect-metrics text-center">
							<p className="title-text-metrics">+10,000</p>
							<p className="text-metrics">TRADE OPTIMISED</p>
						</div>
						<div className="col-12 col-md-4 rect-metrics text-center">
							<p className="title-text-metrics">+10</p>
							<p className="text-metrics">INTEGRATED PROTOCOLS</p>
						</div>
					</div>
					
				</div>
                
			</div>

			<NextSeccion theme={'white'} />
		</div>
	);
};

export default Metrics;
