import NextSeccion from "./nextSeccion";
import CountUp from "react-countup";
import { useCountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Metrics = () => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
		triggerOnce: true
	});

	return (
		<div className="panel-pin min-h-height" data-theme="white" ref={ref}>
			<div className="metrics d-flex flex-column justify-content-between">
				<div className="container-fluid w-14" style={{paddingBottom:"80px"}}>
					<div className="row justify-content-center" >
						<div className="col-12">
							<div className="text-left" style={{ paddingBottom: "80px", }} >
								<h1 className="titulos">Metrics</h1>
								<img src="src/assets/img/flechametrics.svg" alt="" />
							</div>

							

							<div className="row metrics-card" >
								<div className="col-12 col-md-4 rect-metrics text-center" >
									<p className="titulos">+1B</p>
									<p className="textos">VOLUME SETTLED</p>
								</div>
								<div className="col-12 col-md-4 rect-metrics text-center">
									<p className="titulos">+ {inView ? <CountUp start={0} end={10000} delay={0}> {({ countUpRef, }) => {console.log(countUpRef); return(<div> <span ref={countUpRef} /> </div> )}} </CountUp> : '10,000'}</p>
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

function numberWithCommas(num) {
	console.log(num);
	// return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const SimpleHook = ({endNumber}) => {
	const { countUp } = useCountUp({ start: 0, end: endNumber });
	return <div>{numberWithCommas(countUp)}</div>;
};

export default Metrics;
