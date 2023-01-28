import NextSeccion from "./nextSeccion";

const Principal = () => {
	return (
		<div className="panel-pin" data-theme="white">
            {/* Video portada */}
            <div className="principal d-flex align-items-center">
                <div className="container-fluid w-14">
                    <div className="row justify-content-center">
                        <div className="col-12 centrado">
                            <h1 className="tlo-main mb-0">OPTIMAL <br className="d-none d-lg-block" /> TRADE</h1>
                            <h1 className="tlo-main mb-0">EXECUTION</h1>
                        </div>
                    </div>
                </div>

                <NextSeccion theme={'white'} />

            </div>

            {/* Que es Otex */}
            <div className="principal p-0 min-h-auto" id="about">
                <div className="container-fluid w-14 h-100">
					<div className="min-h-height d-flex justify-content-between flex-column h-100 py-40">
						{/* Info */}
						<div className="row mb-5 justify-content-xl-between">
							<div className="col-12 col-md-5 col-xl-6 mb-4 text-center text-lg-left pr-xl-0">
								<h1 className="titulos">WHAT’S OTEX</h1>
							</div>        
							<div className="col-12 col-md-7 col-xl-6 pr-xl-5">
								<div className="wrapper-text">
									<p className="textos mb-3">OTEX helps decentralized exchanges execute asset swaps at the best possible prices — pulling liquidity across different liquidity providers —, for the lowest possible cost — reducing gas consumption wherever possible — and in the safest way possible — protecting from MEV.</p>
									<p className="textos">The stack of proprietary on-chain and off-chain software we currently maintain and are integrating across different DeFi protocols are:</p>
								</div>
							</div>
						</div>

						{/* Cards */}
						<div className="row text-center mb-5">
							<div className="col-12 col-md-4 col-xs-6 mb-3">
								<div className="wrapper p-3 d-flex align-items-center justify-content-center">
									<p className="textos">
										In-house built DEX aggregators that address bespoke price discovery requirements imposed by different decentralized exchanges.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-4 col-xs-6 mb-3">
								<div className="wrapper p-3 d-flex align-items-center justify-content-center">
									<p className="textos">
										Market making RFQ systems that underwrite just-in-time (deep) liquidity.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-4 col-xs-6 mb-3">
								<div className="wrapper p-3 d-flex align-items-center justify-content-center">
									<p className="textos">
										Gas-optimized settlement execution contracts
									</p>
								</div>
							</div>
						</div>

						{/* Text */}
						<div className="row justify-content-center text-center">
							<div className="col-12 col-md-9 col-lg-8 col-xl-7">
								<p className="textos">Our systems have helped settled <b style={{color:"#AF48FF"}}>+1B USD</b> of on-chain transactions. <br className="d-none d-md-block" />  We are keen to speak with new and established protocols to explore the <br className="d-none d-md-block" /> possibility of integrating our infrastructure into your ecosystem.</p>
							</div>
						</div>
					</div>
                
                    <NextSeccion theme={'white'} visibleLine={false} />
                </div>
            </div>
        </div>
	);
};

export default Principal;