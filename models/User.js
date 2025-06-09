const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Pre-save hook to hash password
userSchema.pre('save', async function(next) {
    try {
        // Only hash if password is new or modified
        if (!this.isModified('password')) return next();

        // Generate salt
        const salt = await bcrypt.genSalt(10);
        // Hash password using salt
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare password for login
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
