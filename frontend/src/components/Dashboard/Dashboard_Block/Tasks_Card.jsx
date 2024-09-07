import React from "react";
import { useState } from "react";
import CreateItemSearch from "../Ebay_Block/CreateItemSearch";

// Icons
import roundPlus from "../../../assets/icons/roundPlus.svg"
import largeBag from "../../../assets/icons/largeBag.svg"

function Tasks_Card() {
    const [createItemOpen, setCreateItemOpen] = useState(false);
    
    function handleCreateItemOpen() {
        setCreateItemOpen(!createItemOpen);
    }

    const handleOrdersClick = () => {
        // Redirect the user to eBay's authorization page
        alert("Temporarily unavailable")
        // window.location.href = 'https://4bt9r3ws-4000.usw2.devtunnels.ms/auth/ebay/signin'; 
    };

    return (
    <div className="dashboard-card col-lg-6">
        <div className="gap-2">
            <div className="dashboard-card col-xxl-4 mb-5 mb-lg-0 w-100 py-2 bg-white">
                <div className="p-2 px-4 d-inline-flex align-items-center feature">
                   <h6>Tasks</h6>
                </div>
                <div className="divider">.</div>
                        
                <div className="dashboard-card_body h-75 gap-3">
                    <div onClick={handleCreateItemOpen} className="task-item text-center">
                        <div
                        className="task-item_body" 
                        data-toggle="modal" data-target="#exampleModalCenter">
                            <img src={roundPlus} alt="" />
                            <h6>New item</h6>
                        </div>
                    </div>

                    {createItemOpen && <CreateItemSearch handleClose={handleCreateItemOpen} />}

                    <div onClick={handleOrdersClick} className="task-item text-center">
                        <div className="task-item_body">
                            <img src={largeBag} alt="" />
                            <h6>Orders</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Tasks_Card;
