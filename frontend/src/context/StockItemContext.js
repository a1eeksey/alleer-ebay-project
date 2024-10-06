import React, { createContext, useState } from "react";

const StockItemContext = createContext();

export const StockItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const editItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const generateSKU = (title) => {
    let formattedTitle = title
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '-')
      .replace(/-+/g, '-');

    const timestamp = Date.now();
    const sku = `${formattedTitle.substring(0, 10)}-${timestamp}`;
    
    return sku;
  };

  return (
    <StockItemContext.Provider value={{ items, setItems, addItem, editItem, deleteItem, generateSKU }}>
      {children}
    </StockItemContext.Provider>
  );
};

export default StockItemContext;
