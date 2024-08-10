const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
// var nodemailer = require('nodemailer');

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

const createForgotPassToken = (email, _id, secret) => {
  return jwt.sign({email, _id}, secret, { expiresIn: '5m' })
}

// login a user
const loginUser = async (req, res) => { 
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
    let given_name = user.name
    // create a token
    const token = createToken(user._id)

    res.status(200).json({given_name, email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {name, email, password} = req.body

  try {
    const user = await User.signup(name, email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({name, email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// forgot password
const forgotPassUser = async (req, res) => {
  const {email} = req.body

  try {
    const user = await User.forgot_pass(email)

    // userID
    const userId = user._id
    // create secret
    const secret = process.env.SECRET + user.password
    // create a token
    const token = createForgotPassToken(user.mail, user._id, secret)
    // create reset link
    const link = `http://localhost:4000/user/reset-password/${userId}/${token}`

    // sending email to user for password reset
    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   requireTLS: false,
    //   auth: {
    //     user: 'devtest0000111@gmail.com',
    //     pass: 'nbtkdnrxkoexuczc'
    //   }
    // });
    
    // var mailOptions = {
    //   from: 'devtest0000111@gmail.com',
    //   to: 'youtwigrif@gmail.com',
    //   subject: 'Password reset',
    //   text: 'BEBBEE'
    // };
    
    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });

    // console.log(link);

    res.status(200).json({userId, email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// GET reset password - check user info (id, token) and show the UI show enter new password
const resetPassUserGet = async (req, res) => {
  const { userId, token } = req.params;

  console.log(req.params);
  
  try {
    const user = await User.reset_pass(userId);

    if (!user) {
      throw new Error('Invalid link or expired');
    }

    // Verify the token
    const secret = process.env.SECRET + user.password;
    jwt.verify(token, secret);

    res.status(200).json({ message: 'Verified' });
  } catch (error) {
    res.status(400).json({ message: 'Not verified' });
  }
}

// POST reset password - actual password reset

const resetPassUserPost = async (req, res) => {
  const { userId, token } = req.params;
  const {password} = req.body

  const user = await User.reset_pass(userId);
    
  if (!user) {
    throw new Error('Invalid link or expired');
  }
  const secret = process.env.SECRET + user.password;

  try {
    // Verify the token
    jwt.verify(token, secret);

    // password reset
    await User.reset_pass_post(userId, password);

    res.status(200).json({ message: 'Password reset' });

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser, forgotPassUser, resetPassUserGet, resetPassUserPost }