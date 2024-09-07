import React from "react";
import { useState } from "react";
import PopupSectionItem from "./PopupSectionItem";

import Loading from '../../../assets/images/Loading.svg'

function CreateItemSearchResults( {data, error, isLoading, onItemClick} ) {
    
    return (
                <div className="popup-section search-results">
                    <div className="popup-section_header w-100">
                        <h6 className="my-0 mx-2">SEARCH RESULTS</h6>
                    </div>
                    <div className="popup-section_main">
                            {isLoading && 
                                <div className="loading-image w-100">
                                    <img src={Loading} alt="" />
                                </div>
                            }

                        <div className="items-section">
                            {!error && data.map((item) => (
                                <div key={item.itemId} onClick={() => onItemClick(item)}>
                                    <PopupSectionItem
                                      itemImg={item.pictureUrl}
                                      itemTitle={item.title}
                                      itemId={item.itemId}
                                      itemCondition={item.condition}
                                    />
                                </div> 
                            ))}

                            {error && <h6 className="error text-center my-5 text-danger">{error}</h6>}
                        </div>
                    </div>
                </div>

    );
}

export default CreateItemSearchResults;
