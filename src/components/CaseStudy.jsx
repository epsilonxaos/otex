import NextSeccion from "./nextSeccion";

const CaseStudy = () => {
	return (
		<div className="panel-pin" data-theme="black">
			<div className="casestudy p-0">
				<div className="container-fluid w-14">
					<div className="min-h-height d-flex flex-column justify-content-around py-40">
						<div className="wrapper text-center">
							<h1 className="titulos mb-2"> CASE STUDY: <br /> COW PROTOCOL </h1>
							<p className="textos mb-4"> OTEX integrated its systems to develop a trade batch execution <br /> optimization system a.k.a. ‘solver’ for COW protocol. </p>
						</div>
						
						<div className="row lineItems">
							<div className="col-md-3 mb-3 text-center">
								<div className="img-case">
									<img src="src/assets/img/study1.svg" alt="PRICE DISCOVERY" />
								</div>
								<p className="textos card p-3">PRICE DISCOVERY</p>
							</div>
							<div className="col-md-3 mb-3 text-center">
								<div className="img-case">
									<img src="src/assets/img/study2.svg" alt="MARKET MAKING" />
								</div>
								<p className="textos card p-3 ">MARKET MAKING</p>
							</div>
							<div className="col-md-3 mb-3 text-center">
								<div className="img-case">
									<img src="src/assets/img/study3.svg" alt="TRADE EXECUTION" />
								</div>
								<p className="textos card p-3">TRADE EXECUTION</p>
							</div>
							<div className="col-md-3 mb-3 text-center">
								<div className="img-case">
									<img src="src/assets/img/study4.svg" alt="SETTLEMENT" />
								</div>
								<p className="textos card p-3">SETTLEMENT</p>
							</div>
						</div>
					</div>	
				</div>
				
				<NextSeccion />
			</div>
			
			
			
			{/* <div className="casestudy justify-content-center ">
				<div className="container-fluid w-14" style={{paddingBottom:"80px"}}>
					<div className="row justify-content-center">
						<div className="col-12">
							<div className="row">
								<div className="col-12 col-md-6 col-xs-12">
									<p className="text-casestudy">Our trade batch execution optimization system makes use of all the systems developed by OTEX to achieve the following:</p>
								
									<ul className="list-unstyled card">
										<li className="textos"><p className="p-3 " > 01  Efficient and accurate price discovery</p></li>
										<li className="textos"><p className="p-3 " > 02  Market maker RFQ integrations</p></li>
										<li className="textos"><p className="p-3 " > 03  Settlement cost optimization</p></li>
										<li className="textos"><p className="p-3 " > 04  Trade execution optimization at batch level</p></li>
									</ul>

								</div>
								<div className="col-12 col-md-6 col-xs-12">
									<img className="max-w" src="src/assets/img/casestudy05.svg"  alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<NextSeccion />
			</div> */}
		</div> 
		
	);
};

export default CaseStudy;
