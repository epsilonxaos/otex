const Vision = () => {
  return (
    <div className="vision" style={{Background:"#000"}}>
      <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 col-xs-12">
              <h1>OUR VISION</h1>
              <p>
                Our long-term goal is to develop OTEX to the point it becomes
                the most active enabler of transactions on-chain. In short, we
                are aiming for a future in which no on-chain transaction is
                executed and settled without OTEX being involved (from providing
                liquidity, to smart order routing, to mining and settling the
                transactions).
              </p>
              <p>HOW WILL WE ACHIEVE OUR VISION?</p>
              <ul>
                <li>
                  We started by developing trade optimization and trade
                  execution needed by specialized protocols such as COW
                  protocol.
                </li>
                <li>
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
          <div className="text-center">
            <hr/>
          </div>
        </div>
      </div>
   
  );
};

export default Vision;
