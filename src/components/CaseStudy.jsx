import NextSeccion from "./nextSeccion";


import caseStudy1 from '../assets/img/study1.svg';
import caseStudy2 from '../assets/img/study2.svg';
import caseStudy3 from '../assets/img/study3.svg';
import caseStudy4 from '../assets/img/study4.svg';
import caseStudy5 from '../assets/img/casestudy05.png';

const CaseStudy = () => {
	return (
		<div className="panel-pin" data-theme="black" id="caseStudy">
			<div className="casestudy p-0">
				<div className="container-fluid w-14">
					<div className="min-h-height d-flex flex-column justify-content-around py-40">
						<div className="wrapper text-center m150">
							<h1 className="titulos"> CASE STUDY: <br className="d-none d-lg-block" /> COW PROTOCOL </h1>
							<p className="textos mb-4 pt-30"> OTEX integrated its systems to develop a trade batch execution <br className="d-none d-md-block" /> optimization system a.k.a. ‘solver’ for COW protocol. </p>
						</div>
						
						<div className="row lineItems m80">
							<div className="col-md-3 mb-3 text-center">
								<div className="img-case">
									<img src={caseStudy1} alt="PRICE DISCOVERY" />
								</div>
								<p className="textos card p-3">PRICE DISCOVERY</p>
							</div>
							<div className="col-md-3 mb-3 text-center">
								<div className="img-case">
									<img src={caseStudy2} alt="MARKET MAKING" />
								</div>
								<p className="textos card p-3 ">MARKET MAKING</p>
							</div>
							<div className="col-md-3 mb-3 text-center">
								<div className="img-case">
									<img src={caseStudy3} alt="TRADE EXECUTION" />
								</div>
								<p className="textos card p-3">TRADE EXECUTION</p>
							</div>
							<div className="col-md-3 mb-3 text-center">
								<div className="img-case">
									<img src={caseStudy4} alt="SETTLEMENT" />
								</div>
								<p className="textos card p-3">SETTLEMENT</p>
							</div>
						</div>
					</div>	
				</div>
				
				<NextSeccion />
			</div>
			
			
			
			<div className="casestudy p-0 position-relative">
				<div className="container-fluid w-14 pb-3">
					<div className="min-h-height py-40 ">
						<div className="row pt-5 pb-5">
							<div className="col-12 col-md-6 col-xs-12 pl-lg-4 mb-4 mb-md-0">
								<p className="text-casestudy mb-5 pb-4 centrado">Our trade batch execution optimization system makes use of all the systems developed by OTEX to achieve the following:</p>
							
								<ul className="list-unstyled list-info p-0 m-0 overflow-hidden">
									<li><p className="p-3 mb-0 pr-5 mr-lg-5 pl-4" > <span className="pr-5">01</span>  Efficient and accurate price discovery</p></li>
									<li><p className="p-3 mb-0 pr-5 mr-lg-5 pl-4" > <span className="pr-5">02</span>  Market maker RFQ integrations</p></li>
									<li><p className="p-3 mb-0 pr-5 mr-lg-5 pl-4" > <span className="pr-5">03</span>  Settlement cost optimization</p></li>
									<li><p className="p-3 mb-0 pr-5 mr-lg-5 pl-4" > <span className="pr-5">04</span>  Trade execution optimization at batch level</p></li>
								</ul>

							</div>
							<div className="col-12 col-md-6 col-xs-12 text-center">
								<img className="img-case2 max-w mx-auto" src={caseStudy5}  alt="Case study" />
							</div>
						</div>
					</div>
				</div>
				<NextSeccion visibleLine={false} />
			</div>
		</div> 
		
	);
};

export default CaseStudy;
