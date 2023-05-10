import * as jwt from 'jsonwebtoken'

//generate token
export const generateToken = async(req) => {
    try{
        let jwtSecretKey = process.env.TOKEN_SECRET
        let data = {
            time : new Date(),
            
        }
    }catch(error){
        console.log("Error while generating token => ", error)
    }
}