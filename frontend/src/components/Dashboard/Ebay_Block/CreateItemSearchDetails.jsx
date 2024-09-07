import React from "react";
import { useState } from "react";
import CreateItemSearchDetailsSlider from "./CreateItemSearchDetailsSlider";

import Loading from '../../../assets/images/Loading.svg'

function CreateItemSearchDetails( {selectedItem, error, isLoading} ) {
    
    const itemSpecifics = Array.isArray(selectedItem.itemSpecifics) 
    ? selectedItem.itemSpecifics.map((aspect, index) => (
        <p key={index}>{aspect.name}: {aspect.value}</p>
      ))
    : <p>No item specifics available.</p>;


    console.log(selectedItem);
    

    return (
                <div className="popup-section d-none d-lg-block">
                    <div className="popup-section_header w-100">
                        <h6 className="my-0 mx-2">ITEM DETAILS</h6>
                    </div>
                    
                    <div className="popup-section_main details">

                            {isLoading && 
                                <div className="loading-image w-100">
                                    <img src={Loading} alt="" />
                                </div>
                            }


                        <div className="items-section w-100">
                            <div className="item-details-image">
                                {/* <img src={selectedItem.pictureUrl} alt="..." /> */}
                                <CreateItemSearchDetailsSlider mainPicture={selectedItem.mainPicture} additionalPicturesArray={selectedItem.picturesArray}/>
                            </div>
                            <h5 className="my-3">{selectedItem.title}</h5>

                            <div className="item-details">
                                <p className="mx-4 px-3">Listing details</p>
                                <div className="item-details-section">
                                    <p>Id: {selectedItem.itemId}</p>
                                    <p>Condition: {selectedItem.condition}</p>
                                    <p>Price: {selectedItem.price}$</p>
                                    <p>Location: {selectedItem.itemLocationObject.city}</p>
                                    <p>Return policy: {selectedItem.returnTerms.returnsAccepted ? "Returns are accepted within " + selectedItem.returnTerms.returnPeriod.value + " days" : "Not accepted"}</p>
                                    <p>{selectedItem.returnTerms.returnShippingCostPayer} pays for return shipping</p>
                                </div>
                            </div>

                            <div className="item-details">
                                <p className="mx-4 px-3">Item specifics</p>
                                <div className="item-details-section">
                                    <p>{itemSpecifics}</p>
                                </div>
                            </div>

                            <div className="item-details">
                                <p className="mx-4 px-3">Shipping details</p>
                                <div className="item-details-section">
                                    <p>Ships to: {selectedItem.shipRegionsIncluded}</p>
                                    <p>Shipping cost: {selectedItem.shippingCost != 0 ? selectedItem.shippingCost + '$' : 'Free'}</p>
                                    <p>Shipping type: {selectedItem.shippingOptions[0].shippingServiceCode}</p>
                                </div>
                            </div>

                            <div className="item-details">
                                <p className="mx-4 px-3">Seller information</p>
                                <div className="item-details-section">
                                    <p>Username: {selectedItem.sellerInfo.username}</p>
                                    <p>Feedback: {selectedItem.sellerInfo.feedbackPercentage}%</p>
                                </div>
                            </div>

                            <div className="item-details">
                                <p className="mx-4 px-3">Additional information</p>
                                <div className="item-details-section">
                                    <p>Marketplace ID: {selectedItem.marketplaceId}</p>
                                    <p>Category: {selectedItem.categoryName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    );
}

export default CreateItemSearchDetails;


/* 
                                 <p>Shipping options: {selectedItem.shippingOptions}</p>
                                    {selectedItem.shippingOptions.map((option) => (
                                        <div key={option}>
                                            <p>Cost: {option.shippingCost.value}</p>
                                            <p>Service code: {option.shippingServiceCode}</p>
                                            <p>Shipping type: {option.type}</p>
                                        </div> 
                                    ))}



*/