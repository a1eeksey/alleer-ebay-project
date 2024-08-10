import React from "react";
import emptyInbox from "../../assets/icons/emptyInbox.svg"

function Orders_Card() {
    return (
    <div className="dashboard-card col-lg-6">
        <div className="gap-2">
            <div className="dashboard-card col-xxl-4 mb-5 mb-lg-0 w-100 py-2 bg-white">
                <div className="p-2 px-4 d-inline-flex align-items-center feature">
                   <h6>Last 5 orders</h6>
                </div>
                <div className="divider">.</div>
                        
                <div className="dashboard-card_body h-75">
                    <div className="orders-card w-100 h-100 px-4">
                            <div className="orders-card_header d-flex align-items-center">
                                <h6 className="mb-0">TITLE</h6>
                                <h6 className="mb-0">ID</h6>
                            </div>

                            <div className="orders-card_body mt-5 text-center">
                                <img src={emptyInbox} alt="" />
                                <p>No Data</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Orders_Card;
