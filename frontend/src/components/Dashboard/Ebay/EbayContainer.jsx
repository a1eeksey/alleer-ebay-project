import React from "react";
import PageTitle from "../PageTitle";
import { useState } from "react";
import CreateItemSearch from "../Ebay_Block/CreateItemSearch";

function EbayContainer({pageTitle}) {
    const [createItemOpen, setCreateItemOpen] = useState(false);
    
    function handleCreateItemOpen() {
        setCreateItemOpen(!createItemOpen);
    }

    return (
        <section>
        <PageTitle pageTitle={pageTitle}/>
            <div>
                <button
                onClick={handleCreateItemOpen}
                className="add-new-task btn btn-primary d-flex align-items-center gap-1"
                type="button"
                >
                <p className="my-0">Search</p>
                <p className="my-0 d-none d-md-flex">ebay</p>
                <p className="my-0">items</p>
                </button>
            </div>

            {createItemOpen && <CreateItemSearch handleClose={handleCreateItemOpen} />}
        </section>
    );
}

export default EbayContainer;
