import NextSeccion from "./nextSeccion";

const Principal = () => {
	return (
		<div className="panel-pin" data-theme="white">
            <div 
                className="principal min-h-screen container-fluid d-flex flex-column justify-content-between"
                style={{ background: "#000", paddingTop: "70px", paddingBottom: "50px" }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-11">
                        <div className="row centrar">
                            <h1 className="title-text-principal">OPTIMAL <br /> TRADE <br /> EXECUTION</h1>
                        </div>
                    </div>
                </div>
                <NextSeccion theme={'white'} />

            </div>
            <div className="principal min-h-screen container-fluid d-flex flex-column justify-content-between" style={{ background: "#000", paddingTop: "70px", paddingBottom: "50px" }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-11">
                        <div className="row">
                            <div className="col-12 col-md-6 col-xs-12">
                                <h1 className="title-text-principal2">WHAT’S OTEX</h1>
                            </div>        
                            <div className="col-12 col-md-6 col-xs-12 ">
                                <p className="title-principal pda20">OTEX helps decentralized exchanges execute asset swaps at the best possible prices — pulling liquidity across different liquidity providers —, for the lowest possible cost — reducing gas consumption wherever possible — and in the safest way possible — protecting from MEV.</p>
                                <p className="title-principal">The stack of proprietary on-chain and off-chain software we currently maintain and are integrating across different DeFi protocols are:</p>
                            </div> 
                        </div>
                        <div className="row" style={{paddingTop:"70px",paddingBottom:"70px"}}>
                            <div className="col-12 col-md-4 col-xs-6 text-center">
                                <div className="card card-principal h-100">
                                    

                                    <div className="p-3">
                                        
                                        <p className="title-principal">In-house built DEX aggregators that address bespoke price discovery requirements imposed by different decentralized exchanges.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-xs-6 text-center">
                                <div className="card card-principal h-100">
                                    

                                    <div className="p-3">
                                        
                                        <p className="title-principal">Market making RFQ systems that underwrite just-in-time (deep) liquidity.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-xs-6 text-center">
                                <div className="card card-principal h-100">
                                    

                                    <div className="p-3">
                                        
                                        <p className="title-principal">Gas-optimized settlement execution contracts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                

                    <div className="text-center">
                        <p className="title-principal">Our systems have helped settled <b style={{color:"#AF48FF"}}>+1B USD</b> of on-chain transactions. <br />  We are keen to speak with new and established protocols to explore the <br /> possibility of integrating our infrastructure into your ecosystem.</p>
                    </div>
                </div>
                <NextSeccion theme={'white'} />
            </div>
        </div>
	);
};

export default Principal;