const Technology = () => {
  return (
    <div
      className="technology"
      style={{ paddingTop: "70px", background: "#EAEAEA" }}
    >
      <div className="container-fluid pad70">
        <div className="row">
          <div
            className="col-12 col-md-12 col-xs-12 text-right"
            style={{
              paddingBottom: "70px",
            }}
          >
            <h1 className="title-tech">TECHNOLOGY</h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 col-xs-6 text-center">
              <div className="card card-tecnology">
                <div className="img-technology">
                  <img src="src/assets/img/Aggregator.svg" alt="" />
                </div>

                <p className="title-text-tech">OTEX AGGREGATOR</p>
                <p className="text-tech">
                  Aggregator that searches for the best possible achievable
                  exchange rate for any token pair swap across several (private
                  and public) liquidity pools.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xs-6 text-center">
              <div className="card card-tecnology">
                <div className="img-technology">
                  <img src="src/assets/img/Market.svg" alt="" />
                </div>

                <p className="title-text-tech">OTEX MARKET MAKER</p>
                <p className="text-tech">
                  Market making system. Our liquidity pool is growing.
                  Currently, we offer +100k USD in liquidity across different
                  token pairs. We are prepared to offer the most competitive
                  quotes and market make long-tail token pairs.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xs-6 text-center">
              <div className="card card-tecnology">
                <div className="img-technology">
                  <img src="src/assets/img/Trade.svg" alt="" />
                </div>

                <p className="title-text-tech">OTEX TRADE EXECUTION</p>
                <p className="text-tech">
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
            <img
              src="src/assets/img/flechaN.svg"
              style={{ cursor: "Pointer" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
