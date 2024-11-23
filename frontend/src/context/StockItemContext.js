import React, { createContext, useState, useEffect } from "react";
import QRCode from 'qrcode';
const baseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

const StockItemContext = createContext();

export const StockItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

    const fetchItems = async (userEmail) => {
      try {
        const response = await fetch(`/user/dashboard/dashboard/get-items?email=${encodeURIComponent(userEmail)}`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        const data = await response.json();
        setItems(data[0]);
        console.log(data);
        

      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };


  const addItem = async (userEmail, newItem) => {
    try {
      const response = await fetch(`/user/dashboard/dashboard/add-item?email=${encodeURIComponent(userEmail)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });
      const createdItem = await response.json();

      console.log(createdItem);

      setItems([...items, createdItem]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const editItem = async (userEmail, updatedItem) => {
    try {
      await fetch(`/user/dashboard/dashboard/edit-item?email=${encodeURIComponent(userEmail)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });
    } catch (error) {
      console.error("Failed to edit item:", error);
    }
  };

  const deleteItem = async (userEmail, itemId) => {
    
    try {
      await fetch(`/user/dashboard/dashboard/delete-item?email=${encodeURIComponent(userEmail)}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: itemId }),
      });

      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const generateSKU = (title) => {
    const formattedTitle = title
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '-')
      .replace(/-+/g, '-');
    const timestamp = Date.now();
    return `${formattedTitle.substring(0, 10)}-${timestamp}`;
  };

  const generateQR = async (id) => {
    const url = `${baseUrl}/dashboard/dashboard/view-item/${id}`;
    try {
      const largeQRCode = await QRCode.toDataURL(url, { width: 500 });
      return { largeQRCode };
    } catch (error) {
      console.error("QR Code generation error:", error);
      return { largeQRCode: "" };
    }
  };

  const getItemById = async (userEmail, id) => {
    try {
      const response = await fetch(`/user/dashboard/dashboard/get-item-byId?email=${encodeURIComponent(userEmail)}&itemID=${encodeURIComponent(id)}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify()
      })
      const item = await response.json();
      return item;

    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  }

  return (
    <StockItemContext.Provider value={{ items, fetchItems, addItem, editItem, deleteItem, generateSKU, generateQR, getItemById }}>
      {children}
    </StockItemContext.Provider>
  );
};

export default StockItemContext;