import React from "react";
import { useState } from "react";
import { useEbayGetListing } from "../../../hooks/useEbayGetListing";

import CreateItemSearchResults from "./CreateItemSearchResults";
import CreateItemSearchDetails from "./CreateItemSearchDetails";

function CreateItemSearchMain( {data, error, isLoading} ) {
    const [selectedItem, setSelectedItem] = useState(null);
    const {getListingError, getListingisLoading, ebayGetListing} = useEbayGetListing()

    const fetchData = async (item) => {
        try {
          const result = await ebayGetListing(item.itemId);
          setSelectedItem(result);
          console.log(result);
          
        } catch (error) {
          console.error(error);
        }
      };

    const handleItemClick = (item) => {
        setSelectedItem(null)
        fetchData(item)
    };

    return (
        <div>
            <div className="popup-sections-row">
                <CreateItemSearchResults data={data} error={error} isLoading={isLoading} onItemClick={handleItemClick} />
                {selectedItem && <CreateItemSearchDetails selectedItem={selectedItem} error={getListingError} isLoading={getListingisLoading} />} 
            </div>
        </div>

    );
}

export default CreateItemSearchMain;
