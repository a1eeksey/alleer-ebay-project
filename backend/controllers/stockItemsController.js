const StockItem = require('../models/stockItemModel')

const getItems = async (req, res) => {
    try {
      const userEmail = req.query.email

      const stockItems = await StockItem.find({ userEmail });
  
      if (stockItems) {
        res.status(200).json([stockItems]);
      } else {
        res.status(400).json({noItemsAvailable: "No stock items found"})
        return [];
      }
    } catch (e) {
      console.error("Error retrieving items:", e);
    }
  }

  const getItemById = async (req, res) => {
    try {
      const userEmail = req.query.email;
      const itemID = req.query.itemID;
      
      const stockItem = await StockItem.findOne({id: itemID});
  
      if (stockItem) {
        res.status(200).json(stockItem);
      } else {
        res.status(400).json({noItemAvailable: "No stock item found"})
        return [];
      }
    } catch (e) {
      console.error("Error retrieving item:", e);
    }
  }

const addItem = async (req, res) => {
    try {
        const userEmail = req.query.email
        const {
          id,
          title,
          description,
          images,
          regularPrice,
          salePrice,
          stockAmount,
          category,
          dimensions,
          SKU
        } = req.body

        const newStockItem = new StockItem({
          id,
          title,
          description,
          images,
          regularPrice,
          salePrice,
          stockAmount,
          category,
          dimensions,
          SKU
        })

        await newStockItem.save();

        if (newStockItem) {
            res.status(200).json(newStockItem);
          } else {
            res.status(400).json({noItemsAvailable: "No stock items found"})
            return [];
        }
    } catch (e) {
        console.error("Error retrieving events:", e);
    }
}

const editItem = async (req, res) => {
  try {
    const userEmail = req.query.email;

    const {
      id, 
      title,
      description,
      images,
      regularPrice,
      salePrice,
      stockAmount,
      category,
      dimensions,
      SKU
    } = req.body;

    const updatedItem = await StockItem.findOneAndUpdate(
      { id, userEmail },
      {
        title,
        description,
        images,
        regularPrice,
        salePrice,
        stockAmount,
        category,
        dimensions,
        SKU
      },
      { new: true }
    );

    if (updatedItem) {
      res.status(200).json(updatedItem);
    } else {
      res.status(400).json({ error: "No stock item found or not authorized to update" });
    }
  } catch (e) {
    console.error("Error updating item:", e);
    res.status(500).json({ error: "Server error" });
  }
};


const deleteItem = async (req, res) => {
  try {
    const { id } = req.body;
    const userEmail = req.query.email;

    if (!id) {
      return res.status(400).json({ error: "Item ID is required" });
    }

    const deletedItem = await StockItem.findOneAndDelete({ id, userEmail });
    if (deletedItem) {
      res.status(200).json(deletedItem);
    } else {
      res.status(400).json({ error: "No stock item found or not authorized to delete" });
    }
  } catch (e) {
    console.error("Error deleting item:", e);
    res.status(500).json({ error: "Server error" });
  }
};


module.exports = { getItems, getItemById, addItem, editItem, deleteItem }