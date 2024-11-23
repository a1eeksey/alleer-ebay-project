const express = require('express')

// controller functions
const { loginUser, signupUser, forgotPassUser, resetPassUserGet, resetPassUserPost } = require('../controllers/userController')
const { searchListingsByKeywords, getListingById } = require('../controllers/ebayFunctionsController')
const { syncEvents, getEvents } = require('../controllers/calendarEventsSyncController')
const { getItems, getItemById, addItem, editItem, deleteItem } = require('../controllers/stockItemsController')

const router = express.Router()

// login route
router.post('/signin', loginUser)

// signup route
router.post('/signup', signupUser)

// forgot password route
router.post(`/forgot-pass`, forgotPassUser)

// GET reset password route
router.get('/reset-password/:userId/:token', resetPassUserGet);

// POST reset password route
router.post('/create-password/:userId/:token', resetPassUserPost);

// POST calendar events sync route
router.post('/events/sync', syncEvents);

// GET calendar events
router.get('/events/get-events', getEvents);

// GET stock items route
router.get('/dashboard/dashboard/get-items', getItems)

// GET item by id route
router.get('/dashboard/dashboard/get-item-byId', getItemById)

// POST add stock item route
router.post('/dashboard/dashboard/add-item', addItem)

// PUT edit stock item route
router.put('/dashboard/dashboard/edit-item', editItem)

// POST delete stock item route
router.delete('/dashboard/dashboard/delete-item', deleteItem)

// eBay search route
router.get('/ebay-search', searchListingsByKeywords);

router.get('/ebay-item-details', getListingById);

module.exports = router