import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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

userSchema.pre('save', async function(next){
    this
  if(this.isModified('password')){
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password,salt);
      next();
  }
})

// userSchema.statics.signin = async function(email,password){
//   const user = await this.findOne({email});
//   if(user) {
//       const auth = await bcrypt.compare(password, user.password);
//       if(auth){
//           return user;
//       }else{
//       throw Error("Incorrect Password")
//       }
//       throw Error ("incorrect email")
//   }
// }

export const User = mongoose.model("User", userSchema)