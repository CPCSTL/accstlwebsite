

import User from 'db/models/user.model';

export const userExists = async(email) => {
    const checkUser = await User.findOne({email:email});
    if(checkUser) return true;
    return false
}; 

export const findUserByEmail = async (email, select)=>{
    const user = await User.findOne({email:email}).select('email name role _id');
    return user
};

export const updatedUser = async (_id,payload)=>{

  try {
    const newUser = await User.findOneAndUpdate(
        {_id},
        {"$set":payload},
        {new:true}
    ).select({password:0})

    if(!newUser){
        throw new Error("cant update user")
    }
    return newUser
  } catch (error) {
    throw error
  }
  
}