import { compare, hash, genSalt } from 'bcryptjs';
import { findUserByEmail } from 'db/services/user.service'
import roles from 'db/utils/roles' 

export const passwordHash = async(password) => {
    const salt = await genSalt(10); 
    const hashPassword = await hash(password,salt);
    return hashPassword;
};

export const checkPassword = async (password,hashedPassword)=>{
    console.log(password,hashedPassword,"__passwords at password check");
 const valid = await compare(password,hashedPassword)
if (!valid) {
    console.log("cant compare passwords");
} else { console.log("password match", valid);}
 return valid
};

export const validateBody = async(validation, data)=>{
    try{
        await validation.validate(data,{abortEarly:false});
        return true;
    } catch(error) {
        return false
    }
}

export const checkRole = async(req,rights)=>{
    // const user = await findUserByEmail(req.session.user.email);
    const user = req.session.user;
    console.log(user,"__user at role check");
    if(!user){
        return false
    }

    const action = rights[0]; // createAny, readAny ....
    const resource = rights[1]; // shows, profile,....

    const permission = roles.can(user.role)[action](resource);
    if(!permission.granted){
        return false
    }
    return true;
}