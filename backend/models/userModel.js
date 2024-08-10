const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// static signup method
userSchema.statics.signup = async function(name, email, password) {

  // validation
  if (!name || !email || !password) {
    throw Error('All fields must be filled')
  }
  if (!name) {
    throw Error('Name must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ name, email, password: hash })

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

userSchema.statics.forgot_pass = async function(email) {
  if (!email) {
    throw Error('Please, enter your email')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  return user
}

// find user by id. actually I could just use findById function, but decided to just make code nicer
userSchema.statics.reset_pass = async function(id) {

  const user = await this.findOne({ _id: id })

  if (!user) {
    throw Error('User doesnt exist')
  }

  return user
}

// actual password reset
userSchema.statics.reset_pass_post = async function(id, password) {
  const user = await this.findOne({ _id: id })

  if (!user) {
    throw Error('User doesnt exist')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  // create salt and hash password
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  // update password
  await this.updateOne(
    {
            _id: id, 
        },
        {
          $set: {
            password: hash,
          }
        }
      )

  return user
}

module.exports = mongoose.model('User', userSchema)