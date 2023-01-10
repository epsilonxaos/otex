import NextSeccion from "./nextSeccion";

const Metrics = () => {
	return (
		<div className="metrics min-h-screen container-fluid d-flex flex-column justify-content-between" style={{ paddingTop: "70px", paddingBottom: "50px",background: "#000" }}>
			<div className="row justify-content-center">
				<div className="col-12 col-md-11">
					<div className="text-left" style={{ paddingBottom: "70px", }} >
						<h1 className="title-metrics">Metrics</h1>
                        <img src="src/assets/img/flechametrics.svg" alt="" />
					</div>
					
				</div>
                
			</div>

			<NextSeccion theme={'white'} />
		</div>
	);
};

export default Metrics;
