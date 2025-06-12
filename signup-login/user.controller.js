const User = require('./user.schema');
const bcrypt = require('bcrypt');
const saltRound = 10;

const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must contain at least 6 characters"
        })
    }

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Each field are required"
        })
    }
    const existingUser = await User.find({ email });
    if (!existingUser) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    const hashedPassword = await bcrypt.hash(password, saltRound);

    try {
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        return res.status(200).json({
            message: "User successfully created",
            data: newUser
        })
    } catch (err) {
        return res.status(400).json({
            message: "User not created",
            error: err
        })
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Validate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log(isPasswordValid);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // Return successful response
      return res.status(200).json({
        message: "User successfully logged in",
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
  
    } catch (err) {
      // Handle unexpected errors
      return res.status(500).json({
        message: "Server error",
        error: err.message
      });
    }
  };

  const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        return res.status(200).json({
            message: "user find successfully",
            user
        })
    } catch(err) {
        return res.status(500).json({
            message: "user not found in the database",
            error: err.message
        })
    }
  };

  const getAllUsers = async (req,res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            message: 'users succesfully retrieved from the database',
            users
        })
    } catch(err) {
        return res.status(500).json({
            message: "Server error"
        })
    }
  };

  const getUserByIdAndUpdate = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, saltRound);
      const updatedUser = await User.findByIdAndUpdate(id, { name, email, password: hashedPassword}, { new: true});
      return res.status(200).json({
        message: "user successfully updated",
        updatedUser
      })

    } catch (err) {
      return res.status(500).json({
        message: "unable to update user",
        error: err.message
      })
    }
  };

  const deleteUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      return res.status(200).json({
        message: "user deleted successfully",
        user
      })
    } catch (err) {
      return res.status(500).json({
        message: "Unable to delete user from the database"
      })
    }
  }
  

module.exports = { signupUser, loginUser, getUserById , getAllUsers, getUserByIdAndUpdate, deleteUserById};