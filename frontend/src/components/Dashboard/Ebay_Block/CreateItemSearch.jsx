import React, { useState } from "react";
import CreateItemSearchMain from "./CreateItemSearchMain";

import { useEbaySearch } from "../../../hooks/useEbaySearch";

// icons
import closeIcon from '../../../assets/icons/closeIcon.svg'
import minimize from '../../../assets/icons/minimize.svg'
import search from '../../../assets/icons/search.svg'
import emptyInbox from '../../../assets/icons/emptyInbox.svg'



function CreateItemSearch({ handleClose }) {
    const [requestKeywords, setRequestKeywords] = useState('')
    const [ebayResults, setEbayResults] = useState(null);
    const {ebaySearch, isLoading, error} = useEbaySearch()

    const fetchData = async (requestKeywords) => {
        try {
          const results = await ebaySearch(requestKeywords);
          setEbayResults(results);
          console.log(results);
        } catch (error) {
          console.error(error);
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setEbayResults([])
        fetchData(requestKeywords)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };
    
    return (
    <div className="overlay">
        <div className="popup-item-block">
        <div className="popup-item-header">
                <div className="images">
                    <img src={minimize} alt="" />
                    <img onClick={handleClose} src={closeIcon} alt="" />
                </div>
            </div>
            <div className="popup-item-title my-4">
                <h5>What do you want to sell?</h5>
            </div>
            <div className="popup-item-search-section flex-column-reverse flex-sm-row">
                <h5 className="my-0 text-center">Ebay US</h5>

                <div className="input-box w-100">
                    <input placeholder="Enter keywords" type="text"
                    onChange={(e) => setRequestKeywords(e.target.value)} 
                    value={requestKeywords} 
                    onKeyDown={handleKeyDown}
                    class="form-control" />
                    <img onClick={handleSubmit} src={search} alt="" />                   
                  </div>
            </div>

            {error && <h6 className="error text-center my-5 text-danger">{error}</h6>}

            {!ebayResults && 
                <div className="empty-results h-75 d-flex align-items-center justify-content-center">
                    <img src={emptyInbox} alt="" />
                    <p>No data</p>
                </div>
            }

            {ebayResults && <CreateItemSearchMain data={ebayResults} error={error} isLoading={isLoading} handleClose={handleClose} />}
        </div>
    </div>

    );
}

export default CreateItemSearch;
