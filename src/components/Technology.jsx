const Technology = () => {
  return (
    <div
      className="technology"
      style={{ paddingTop: "70px", Background: "#EAEAEA" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-12 col-xs-12 text-right"
            style={{
              paddingBottom: "70px",
            }}
          >
            <h1>TECHNOLOGY</h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 col-xs-6 text-center">
              <div className="">
                <img src="src/assets/img/Aggregator.svg" alt="" />
                <p>OTEX AGGREGATOR</p>
                <p>
                  Aggregator that searches for the best possible achievable
                  exchange rate for any token pair swap across several (private
                  and public) liquidity pools.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xs-6 text-center">
              <div className="">
                <img src="src/assets/img/Market.svg" alt="" />
                <p>OTEX MARKET MAKER</p>
                <p>
                  Market making system. Our liquidity pool is growing.
                  Currently, we offer +100k USD in liquidity across different
                  token pairs. We are prepared to offer the most competitive
                  quotes and market make long-tail token pairs.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xs-6 text-center">
              <div className="">
                <img src="src/assets/img/Trade.svg" alt="" />
                <p>OTEX TRADE EXECUTION</p>
                <p>
                  Gas-optimized and MEV protected trade route execution smart
                  contracts.
                </p>
              </div>
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

export default Technology;
