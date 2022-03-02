import bcrypt from 'bcryptjs'

import User from '../models/user.js'

export const signin = async(req,res) =>{
    const {email, password} = req.body

    try {
        const existingUser = User.findOne({email})

        if(!existingUser)
            return res.status(404).json({ message : "User Does not exist" })

        const passwordCorrect = await bcrypt.compare(password, existingUser.password)

        if(!passwordCorrect)
            return res.status(400).json({ message: "Invalid Credentials"})

      

        res.status(200).json({result: existingUser})
    } catch (error) {
         res.status(500).json({ message: "Something went wrong" })
    }
}

export const signup = async(req,res) =>{
    console.log(req)
    const {firstname, lastname, email, password, confirmPassword} = req.body
    try {

        console.log(firstname)
        const existingUser = User.findOne({email})
      
        if(existingUser)
            return res.status(400).json({ message : "User already exists" })

        if(password !== confirmPassword)
         return res.status(400).json({ message : "Passwords doesnt match" })


        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({
            email,
            password: hashedPassword,
            name : `${firstname} ${lastname}`
        })

        res.status(200).json({result})
    } catch (error) {
         res.status(500).json({ message: "Something went wrong" })
    }
}