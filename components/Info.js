const Info = () =>{
    return (
        <>
            <div className="info-container">
                <div className="row">
                    <div className=" col-12 col-md-5">
                        <div className="info-card-left">
                           Education
                        </div>
                    </div>
                    <div className="col px-0 d-md-block d-none ">
                        <div className="rect" style={{height:'125px'}}></div>
                        <div className="circle"></div>
                        <div className="rect" style={{height:'125px'}}></div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="info-card-right">
                           <ul>
                               <li>High School  -   SBDP Inter College</li>
                               <li>Intermediate -   SBDP Inter College</li>
                               <li>Graduation   -   IIT Mandi, Civil Engineering</li>
                           </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="info-card-left" style={{marginTop:'150px'}}>
                           Projects
                        </div>
                    </div>
                    <div className="col px-0 d-md-block d-none">
                        <div className="rect" style={{height:'200px'}}></div>
                        <div className="circle"></div>
                        <div className="rect" style={{height:'200px'}}></div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="info-card-right">
                           <ul>
                               <li>2d Bird Hunter</li>
                               <li>Retaining Wall stability calculator</li>
                               <li>Autonomus Car with Balancing Plateform</li>
                               <li>Damage Detection in Structure</li>
                               <li>Low cost Air Monitoring system</li>
                           </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="info-card-left" style={{marginTop:'50px'}}>
                           Work Experience
                        </div>
                    </div>
                    <div className="col px-0 d-md-block d-none">
                        <div className="rect" style={{height:'100px'}}></div>
                        <div className="circle"></div>
                        <div className="rect" style={{height:'100px'}}></div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="info-card-right">
                           <ul>
                               <li>Web Developer-   Omnibulls</li>
                               <li>Full Stack Dev -   CareerVira</li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Info;