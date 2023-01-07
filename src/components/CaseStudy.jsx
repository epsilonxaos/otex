const CaseStudy = () => {
  return (
    <div className="casestudy" style={{ paddingTop: "70px", Background: "#EAEAEA" }} >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-xs-12 text-center">
            <h1>CASE STUDY: COW PROTOCOL</h1>
            <p>
              OTEX integrated its systems to develop a trade batch execution optimization system a.k.a. ‘solver’ for COW protocol.
              
            </p>
          </div>
          <div
            className="col-12 col-md-12 col-xs-12 text-center"
            style={{ paddingTop: "80px" }}
          >
            <hr style={{ border: "0.5px solid #000000" }} />
            <img src="src/assets/img/flechaN.svg" style={{cursor:"Pointer"}} alt="" />
          </div>
          <div className="text-center">
            <hr style={{ border: " 0.5px solid #000000" }} />
          </div>

          <div className="row" style={{ paddingTop: "50px"}}>
            <div className="col-12 col-md-6 col-xs-12">
              <p>
                Our trade batch execution optimization system makes use of all
                the systems developed by OTEX to achieve the following:
              </p>
            </div>
            <div className="col-12 col-md-6 col-xs-12">
              <img src="src/assets/img/CaseStudy.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
