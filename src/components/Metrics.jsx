import NextSeccion from "./nextSeccion";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import { useState } from "react";

import flechametrics from '../assets/img/flechametrics.svg';

const Metrics = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
		triggerOnce: true
	});
	const [isInit, setIsInit] = useState(false);

	return (
		<div className="panel-pin metrics" data-theme="white" ref={ref} id="metrics">
				<div className="container-fluid w-14">
					<div className="d-flex flex-column justify-content-between justify-content-md-around mb-5 min-h-height" >
						<div className="centrado mb-5"	 >
							<h1 data-aos="flip-up" className="titulos mb-2">METRICS</h1>
							<img data-aos="fade-right" src={flechametrics} alt="Metricas" className="flechaMetrica" />
						</div>

						<div className="row metrics-card text-center"  data-aos="zoom-in-up" data-aos-delay="400" >
							<div className="col-12 col-md-4 rect-metrics centro" >
								<p className="titulos">+{(inView && !isInit) ? <CountUp start={0} end={1} delay={0} formattingFn={(value) => numberWithCommas(value)} /> : '1'}B</p>
								<p className="textos">USD VOLUME SETTLED</p>
							</div>
							<div className="col-12 col-md-4 rect-metrics centro">
								<p className="titulos">+{(inView && !isInit) ? <CountUp start={0} end={10000} delay={0.2} formattingFn={(value) => numberWithCommas(value)} /> : '10,000'}</p>
								<p className="textos">TRADES OPTIMISED</p>
							</div>
							<div className="col-12 col-md-4 rect-metrics centro">
								<p className="titulos">+{(inView && !isInit) ? <CountUp start={0} end={10} onEnd={() => setIsInit(true)} delay={0.4} formattingFn={(value) => numberWithCommas(value)} /> : '10'}</p>
								<p className="textos">INTEGRATED PROTOCOLS</p>
							</div>
						</div>
					</div>
				</div>
				<NextSeccion toSeccion={"contact"} theme={'white'} visibleLine={false} />			
			</div>
		
	);
};

function numberWithCommas(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default Metrics;
