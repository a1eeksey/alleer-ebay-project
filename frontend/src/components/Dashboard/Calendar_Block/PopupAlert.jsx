import React, { useState, useEffect } from "react";;

function PopupAlert({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 1500);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="popup-alert">
            {message}
        </div>
    );
}

export default PopupAlert;
