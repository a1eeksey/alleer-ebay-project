import React from "react";
import blueEllipse from "../../../assets/icons/blueEllipse.svg"
function Info_Card() {
    return (
    <div className="dashboard-card col-lg-6">
        <div className="gap-2">
            <div className="dashboard-card col-xxl-4 mb-5 mb-lg-0 w-100 py-2 bg-white">
                <div className="p-2 px-4 d-inline-flex align-items-center feature">
                   <h6>Information</h6>
                </div>
                <div className="divider">.</div>
                        
                <div className="dashboard-card_body h-75">
                    <div className="info-card w-100 h-100 px-4">
                        <div className="info-card_header d-flex align-items-center">
                            <img src={blueEllipse} alt="..." />
                            <h6 className="px-2 mb-0">Ebay seller info</h6>
                        </div>

                        <div className="info-card_body mt-5">
                            <div className="info-card_item mb-3">
                                <h6>Account type:</h6>
                                <h6>Business</h6>
                            </div>

                            <div className="info-card_item mb-3">
                                <h6>Feedback:</h6>
                                <h6>100%</h6>
                            </div>

                            <div className="info-card_item mb-3">
                                <h6>Region:</h6>
                                <h6>US</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Info_Card;
