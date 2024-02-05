import "./Home"

function Top() {
  return (
    <div>
        <div className="masterbar">
            <div className="row no-gutters owl-carousel mobile-carousel">
                <div className="col-12 col-md-3 item">
                    <h6><p>SENSEX&nbsp;<span className='badge badge-success ticker'>72085.63</span><span className='text-success'>&nbsp;<i className='fas fa-caret-up'></i>&nbsp;+<span className='Number'>440.33</span> (+<span className='Number'>0.61</span>%)</span></p></h6>
                </div>
                <div className="col-12 col-md-3 item">
                    <h6><p>NIFTY&nbsp;<span className='badge badge-success ticker'>21853.80</span><span className='text-success'>&nbsp;<i className='fas fa-caret-up'></i>&nbsp;+<span className='Number'>156.35</span> (+<span className='Number'>0.72</span>%)</span></p></h6>
                </div>
                <div className="col-12 col-md-3 item">
                    <h6><p >BANKNIFTY&nbsp;<span className='badge badge-danger ticker'>45970.95</span><span className='text-danger'>&nbsp;<i className='fas fa-caret-down'></i>&nbsp;<span className='Number'>-217.70</span> (<span className='Number'>-0.47</span>%)</span></p></h6>
                </div>

                <div className="col-12 col-md-3 item">
                    <h6><p>NIFTYIT&nbsp;<span className='badge badge-success ticker'>37323.25</span><span className='text-success'>&nbsp;<i className='fas fa-caret-up'></i>&nbsp;+<span className='Number'>788.70</span> (+<span className='Number'>2.16</span>%)</span></p></h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top