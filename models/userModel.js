import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      unique: true,
      trim:true,
    },
    
    email: 
      {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ["regular", "professional"],
        required: true,
        default:"regular",
      }, 

    isAdmin: {
      type: Boolean ,
      default: false ,
      required: true ,
    },
    }, {
    timestamps: true,
    }
)

export const User = mongoose.model("User", userSchema)