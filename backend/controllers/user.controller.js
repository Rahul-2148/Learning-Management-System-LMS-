import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";
import {rm} from "fs";
import { promises as fs } from "fs"; // Update the import for rm


// register controller
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        // console.log("Password to hash:", password); // Debug log
        // console.log("Type of password:", typeof password); // Ensure it's a string

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email.",
            });
        }

        const saltRounds = 10; // Recommended number of salt rounds
        // const hashedPassword = await bcrypt.hash(password, saltRounds);
        const hashedPassword = await bcrypt.hash(String(password), saltRounds);


        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        console.log("Account created successfully.");

        return res.status(201).json({
            success: true,
            message: "Account created successfully.",
        });
    } catch (error) {
        console.error("Error during registration:", error); // Log the full error
        return res.status(500).json({
            success: false,
            message: "Failed to register.",
        });
    }
};



// login controller
export const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required."
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            });
        }
        generateToken(res, user, `Welcome back ${user.name}`);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to login"
        })
    }
}

// logout controller
export const logout = async (_,res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message:"Logged out successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to logout"
        }) 
    }
}

// get single user profile controller
export const getUserProfile = async (req,res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).select("-password").populate("enrolledCourses");
        if(!user){
            return res.status(404).json({
                message:"Profile not found",
                success:false
            })
        }
        return res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to load user"
        })
    }
}

// update profile controller
export const updateProfile = async (req, res) => {
  try {
    const userId = req.id;
    const { name } = req.body;

    // File uploaded via multer
    const photoFile = req.file;

    // Fetch the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Delete the old Cloudinary image if it exists
    if (user.photoUrl) {
      const publicId = user.photoUrl.split("/").pop().split(".")[0];
      await deleteMediaFromCloudinary(publicId);
    }

    let photoUrl = user.photoUrl; // Default to existing photo
    if (photoFile) {
      // Upload new photo to Cloudinary
      const cloudResponse = await uploadMedia(photoFile.path);
      photoUrl = cloudResponse.secure_url;

      // Remove the uploaded file from local storage using fs.promises
      await fs.rm(photoFile.path); // Use `fs.promises.rm` for proper deletion
    }

    // Update user details
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, photoUrl },
      { new: true }
    ).select("-password");

    return res.status(200).json({
      success: true,
      user: updatedUser,
      message: "Profile updated successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};

  