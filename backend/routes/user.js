const express = require('express')

// controller functions
const { loginUser, signupUser, forgotPassUser, resetPassUserGet, resetPassUserPost } = require('../controllers/userController')
const { searchListingsByKeywords, getListingById } = require('../controllers/ebayFunctionsController')
const { syncEvents } = require('../controllers/calendarEventsSyncController')

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

// eBay search route
router.get('/ebay-search', searchListingsByKeywords);

router.get('/ebay-item-details', getListingById);

module.exports = router