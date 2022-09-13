import mongoose from "mongoose"


// const reviewSchema = new mongoose.Schema(
//   {
//     name: {
//       type:String,
//       required: true,
//     },
//     rating:{
//       type: Number,
//       required:true,
//     },
  // )

const recipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: true,
    },

    author: {
      type: String,
    },

    ingredients: [
      {
        type: String,
        required: true,
      },
    ],

    duration: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },

    comments: [{
      type: String,
    }],

    rating: {
      type: Number,
      default: 0
    },

    similarRecipe: [{
      type: String
    }],

    tag: {
      type: String,
      required: true
    },

    likes: [{
      type: String,
    }],

    likeCount: {
      type: Number,
      default: 0
    }
  }, {
  timestamps: true,
}
)
export const recipe = mongoose.model("recipe", recipeSchema)