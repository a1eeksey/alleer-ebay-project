import React from "react";
import Feature_Item from "./Feature_Item";
import { Link } from 'react-router-dom';


// img
import ebayCertified from "../../assets/icons/ebayCertified.svg"
import itemManagement from "../../assets/icons/itemManagement.svg"
import cloudIcon from "../../assets/icons/cloudIcon.svg"
import syncItems from "../../assets/icons/syncItems.svg"
import edit from "../../assets/icons/edit.svg"
import presentation from "../../assets/icons/presentation.svg"
import question from "../../assets/icons/question.svg"

function Feature_Main() {
  return (
    <section className="py-5 mb-10" id="features">
    <div className="container px-5">
        <div className="text-center mb-5">
            <h6 className="text-primary">Item Management</h6>
            <h4 className="h2 mb-0">Simplify, automate, optimize</h4>
        </div>
        <div className="row gx-4">
            <div className="mycard col-lg-4 mb-5 py-2">
                <div className="d-inline-flex align-items-center p-2 feature mb-3">
                    <img src={presentation} alt="" />
                    <h2 className="h6 px-2">Item Management</h2>
                </div>
                                
                <p className="card-text">Listing, revising, or ending items has never been easier. Create new items quickly with features like sales profiles. Variations are also supported.</p>
            </div>
            <div className="mycard col-lg-4 mb-5 py-2">
                <div className="d-inline-flex align-items-center p-2 feature mb-3">
                    <img src={edit} alt="..." />
                    <h2 className="h6 px-2">Bulk Item Editing</h2>
                </div>
                                
                <p className="card-text">You can bulk edit your items with ALLEER, so that all changes are implemented at once. The "Search and Replace" function allows changes in the item description to be made quickly. </p>
            </div>
            <div className="mycard col-lg-4 mb-5 py-2">
                <div className="d-inline-flex align-items-center p-2 feature mb-3">
                    <img src={question} alt="..." />
                    <h2 className="h6 px-2">Any Questions?</h2>
                </div>
                                
                <p className="card-text">Use out AI automated assistant or send us a message using "live agent" option in it!</p>
            </div>
            <Feature_Item  image={ebayCertified} title="eBay ceritified Silver Solution Provider" text="ALLEER has been certified by ebay as a Silver Solution Provider and is considered an unbeatable, improved alternative to the outdated ebay - Turbo Lister.
            "/>
            <Feature_Item  image={itemManagement} title="Item and Order Management" text="Listing, revising, or ending items has never been easier. Create new items quickly with features like sales profiles. Variations are also supported. Additionally, you can import and export your items and variations via CSV.
            "/>
            <Feature_Item  image={cloudIcon} title="Archive / Drafts / Backups" text="Archive your items in drafts. Simply drag and drop your items into folders that you can create yourself. Your drafts remain local and won't be deleted. Additionally, you can create a backup of your data.
            "/>
            <Feature_Item  image={syncItems} title="Sync-Items" text="With our sync drafts, your drafts are synchronized between multiple computers/clients. There's no need to set up your own server as the items are managed by dewabit servers.
            "/>
        </div>
    </div>
</section>
  );
}

export default Feature_Main;
