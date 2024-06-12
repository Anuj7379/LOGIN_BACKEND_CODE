
const mongoose = require("mongoose");
const { Schema } = mongoose; // Use capital S for Schema
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        minLength: [3, "Name must be greater than or equal to 3 letters"],
        maxLength: [50, "Name must be less than 50 letters"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Remove the duplicate unique option
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false, // Correct use of the select option
    },
    forgotPassword: {
        type: String,
    },
    forgotPasswordExpiryDate: {
        type: Date,
    },
}, {
    timestamps: true
});

// Hash password before saving to the database
userSchema.pre('save', async function (next) {
    // If password is not modified then do not hash it
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    return next();
  });

userSchema.methods={
    jwtToken(){
        return JWT.sign(
            {id: this.id , email:this.email },
            process.env.SECRET,
            {
                expiresIn:'24h'
            }
        
        )
    }
}
const userModel = mongoose.model('User', userSchema); // Use capital 'U' for the model name by convention

module.exports = userModel;
