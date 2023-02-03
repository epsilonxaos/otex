import NextSeccion from "./nextSeccion";

import vision from "../assets/img/vision.svg";

const Vision = () => {
	return (
		<div className="panel-pin vision p-0" data-theme="white" id="vision">
			<div className="container-fluid w-14">
				<div className="min-h-height py-40 d-flex flex-column justify-content-center">
					<div className="row align-items-center">
						<div className="col-12 col-md-6 col-xs-12 pl-lg-5 mb-4 mb-md-0 centrado">
							<div className="mb-4" data-aos="fade-right"  >
								<h1 className="titulos mb-md-5">OUR VISION</h1>
							</div>
							<p className="textos mb-3 mb-xl-4" data-aos="fade-right" data-aos-delay="200" >Our long-term goal is to develop OTEX to the point it becomes the most active enabler of transactions on-chain. In short, we are aiming for a future in which no on-chain transaction is executed and settled without OTEX being involved (from providing liquidity, to smart order routing, to mining and settling the transactions).</p>
							<p className="textos-vision pda20" data-aos="fade-right" data-aos-delay="400">HOW WILL WE ACHIEVE OUR VISION?</p>
							<ul className="textos style0" data-aos="fade-right" data-aos-delay="600" >
								<li className="mb-3 mb-xl-4">We started by developing trade optimization and trade execution needed by specialized protocols such as COW protocol.</li>
								<li className="mb-3 mb-xl-4">As we improve our technology, we will aim to integrate our systems in to new protocols or simply start participating in existing markets.</li>
							</ul>
						</div>
						<div className="col-12 col-md-6 col-xs-12 text-center mb-3 mb-md-0">
							<img src={vision} className="max-w w-75" data-aos="zoom-in-up" />
						</div>
					</div>
				</div>
			</div>

			<NextSeccion theme={'white'} visibleLine={false} />
		</div>
	);
};

export default Vision;