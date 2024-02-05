import "./Home.css"

function Search(){

    return (
        <>
        <div className="header">
            <div className="container-fluid">
                <div className="row no-gutters justify-content-center">
                    <div className="col-12 col-md-7">
                        <div className="searchcomp">
                            <h1>Investing Ka Search Engine</h1>
                            <p>The Modern Stock Screener that helps you pick better stocks.</p>
                            <div className="clearfix"></div>
                            <div className="form-group mt-3">
                                <input name="txtSearchComp" autocomplete="off" id="txtSearchComp" class="form-control searchbox" autofocus="" type="search" placeholder="Type a Company Name or Brand to Search" />
                                <div className="output"></div>
                            </div>
                            <div className="frequents">
                                <strong>What's Trending:</strong>
                                
                                        <p>ITC</p>
                                    
                                        <p>RELIANCE</p>
                                
                                    
                                        <p>IRCTC</p>
                                    
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Search;