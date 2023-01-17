import NextSeccion from "./nextSeccion";

const Vision = () => {
	return (
		<div className="panel-pin  min-h-screen " data-theme="white">
			<div className="vision d-flex flex-column justify-content-between">
				<div className="container-fluid w-14" style={{paddingBottom:"80px"}}>
					<div className="row justify-content-center">
						<div className="col-12">
							<div className="row centrar">
								<div className="col-12 col-md-6 col-xs-12">
									<h1 className="titulos">OUR VISION</h1>
									<p className="textos pda20">Our long-term goal is to develop OTEX to the point it becomes the most active enabler of transactions on-chain. In short, we are aiming for a future in which no on-chain transaction is executed and settled without OTEX being involved (from providing liquidity, to smart order routing, to mining and settling the transactions).</p>
									<p className="textos-vision pda20">HOW WILL WE ACHIEVE OUR VISION?</p>
									<ul className="textos">
										<li className="pda20">We started by developing trade optimization and trade execution needed by specialized protocols such as COW protocol.</li>
										<li className="pda20">As we improve our technology, we will aim to integrate our systems in to new protocols or simply start participating in existing markets.</li>
									</ul>
								</div>
								<div className="col-12 col-md-6 col-xs-12 text-center">
									<img src="src/assets/img/vision.svg" className="max-w" />
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

export default Vision;