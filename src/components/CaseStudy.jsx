const CaseStudy = () => {
  return (
    <div className="casestudy" style={{ paddingTop: "70px", Background: "#EAEAEA" }} >
      <div className="container-fluid pad70">
        <div className="row">
          <div className="col-12 col-md-12 col-xs-12 text-center">
            <h1 className="title-text-casestudy">CASE STUDY: <br /> COW PROTOCOL</h1>
            <p className="text-casestudy pda20">
              OTEX integrated its systems to develop a trade batch execution <br />  optimization system a.k.a. ‘solver’ for COW protocol.
              
            </p>
          </div>
          <div
            className="col-12 col-md-12 col-xs-12 text-center"
            style={{ paddingTop: "80px" }}
          >
            <hr style={{ border: "0.5px solid #000000" }} />
            <img src="src/assets/img/flechaN.svg" style={{cursor:"Pointer"}} alt="" />
          </div>
         

          <div className="row centrar" style={{ paddingTop: "50px"}}>
            <div className="col-12 col-md-6 col-xs-12">
              <p className="text-casestudy">
                Our trade batch execution optimization system makes use of all
                the systems developed by OTEX to achieve the following:
              </p>
            </div>
            <div className="col-12 col-md-6 col-xs-12">
              <img src="src/assets/img/casestudy05.svg" alt="" />
            </div>
          </div>
          <div
            className="col-12 col-md-12 col-xs-12 text-center"
            style={{ paddingTop: "80px" }}
          >
            <hr style={{ border: "0.5px solid #000000" }} />
            <img src="src/assets/img/flechaN.svg" style={{cursor:"Pointer"}} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
