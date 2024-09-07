import React from "react";

function PopupSectionItem({ itemImg, itemTitle, itemId, itemCondition }) {

    return (
        <div className="item">
        <div className="item-image"><img src={itemImg} alt="" /></div>
        <div className="item-info">
            <h6 className="item-title">{itemTitle}</h6>
            <p className="item-detail">Item id: {itemId}</p>
            <p className="item-detail">Item condition: {itemCondition}</p>
        </div>
    </div>

    );
}

export default PopupSectionItem;
