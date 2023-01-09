const Vision = () => {
  return (
    <div className="vision" style={{background:"#000"}}>
      <div className="container-fluid pad70" >
        <div className="row centrar">
        
          <div className="col-12 col-md-6 col-xs-12">
              <h1 className="title-text-vision">OUR VISION</h1>
              <p className="title-vision pda20">
                Our long-term goal is to develop OTEX to the point it becomes
                the most active enabler of transactions on-chain. In short, we
                are aiming for a future in which no on-chain transaction is
                executed and settled without OTEX being involved (from providing
                liquidity, to smart order routing, to mining and settling the
                transactions).
              </p>
              <p className="text-vision pda20">HOW WILL WE ACHIEVE OUR VISION?</p>
              <ul className="title-vision ">
                <li className="pda20">
                  We started by developing trade optimization and trade
                  execution needed by specialized protocols such as COW
                  protocol.
                </li>
                <li className="pda20">
                  As we improve our technology, we will aim to integrate our
                  systems in to new protocols or simply start participating in
                  existing markets.
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-xs-12">
              <img src="src/assets/img/vision.svg" width="100%" height="100%" alt="" />
            </div>
          </div>
            
          </div>
          <div
            className="col-12 col-md-12 col-xs-12 text-center"
          >
            <hr style={{ border: "0.5px solid #fff" }} />
            <img
              src="src/assets/img/flechaB.svg"
              style={{ cursor: "Pointer" }}
              alt=""
            />
          </div>
        </div>
      
   
  );
};

export default Vision;
