// OFFICIAL EBAY API

// const mongoose = require('mongoose');
// const axios = require('axios');

// const User = require('../models/userModel');

// const EbayAuthToken = require('ebay-oauth-nodejs-client');

// const ebayAuthToken = new EbayAuthToken({
//     clientId: process.env.EBAY_CLIENT_ID,
//     clientSecret: process.env.EBAY_CLIENT_SECRET,
//     redirectUri: process.env.EBAY_REDIRECT_URI
// });

// const ebaySingin = async (req, res) => {
//     const scopes = [
//         'https://api.ebay.com/oauth/api_scope',
//         'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly',
//         'https://api.ebay.com/oauth/api_scope/sell.marketing',
//         'https://api.ebay.com/oauth/api_scope/sell.inventory.readonly',
//         'https://api.ebay.com/oauth/api_scope/sell.inventory',
//         'https://api.ebay.com/oauth/api_scope/sell.account.readonly',
//         'https://api.ebay.com/oauth/api_scope/sell.account',
//         'https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly',
//         'https://api.ebay.com/oauth/api_scope/sell.fulfillment'
//     ];

//     const authUrl = ebayAuthToken.generateUserAuthorizationUrl('PRODUCTION', scopes);

//     res.redirect(authUrl); // Redirect user to eBay's OAuth page
// }


// const ebaySigninRedirect = async (req, res) => {
//     const { code } = req.query; 

//     if (!code) {
//         console.error('No authorization code received.');
//         return res.status(400).send('No authorization code received.');
//     }

//     try {
//         const tokenResponse = await ebayAuthToken.exchangeCodeForAccessToken('PRODUCTION', code);
//         const accessToken = JSON.parse(tokenResponse).access_token;
//         console.log(req);
        
//         // console.log('eBay Access Token:', accessToken);

//         // redirect to app dashboard
//         res.redirect('https://4bt9r3ws-3000.usw2.devtunnels.ms/dashboard'); 
//     } catch (error) {
//         console.error('Error during eBay OAuth:', error);
//         res.status(500).send('Authentication failed');
//     }
// }


// const searchListingsByKeywords = async (req, res) => {
//     const requestKeywords = req.query.keywords;
//     const accessToken = req.query.keywords;

//     try {
//         const response = await axios.get(`https://api.ebay.com/buy/browse/v1/item_summary/search?q=${requestKeywords}`, {
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//                 'Content-Type': 'application/json',
//             }
//         });

//         console.log( response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching active listings:', error);
//         throw error;
//     }
// };

// const getListingById = async (req, res) => {
//     const itemId = req.query.id;

//     try {
//         const response = await axios.get(`https://api.ebay.com/buy/browse/v1/item/v1%${itemId}%7C0`, {
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//                 'Content-Type': 'application/json',
//             }
//         });

//         console.log( response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error catching listing by id:', error);
//         throw error;
//     }
// }

// // const getActiveListings = async (accessToken) => {
// //     try {
// //         const response = await axios.get('https://api.ebay.com/sell/inventory/v1/inventory_item', {
// //             headers: {
// //                 'Authorization': `Bearer ${accessToken}`,
// //                 'Content-Type': 'application/json',
// //             }
// //         });

// //         console.log('User’s Active Listings:', response.data);
// //         return response.data;
// //     } catch (error) {
// //         console.error('Error fetching active listings:', error);
// //         throw error;
// //     }
// // };


// module.exports = { ebaySingin, ebaySigninRedirect, searchListingsByKeywords, getListingById, };

