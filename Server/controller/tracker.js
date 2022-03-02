import glucose from '../models/glucose.js'
import mongoose from 'mongoose'

 export const bloodSugar = async (req, res) =>{
   try {
       
       res.status(200).json(' Sugar Working')
   } catch (error) {
       res.status(404).json( {message : error.message})
   }
}
export const bloodPressure = async (req, res) =>{
   try {
       
       res.status(200).json('pressure Working')
   } catch (error) {
       res.status(404).json( {message : error.message})
   }
}
export const weight = async (req, res) =>{
   try {
       
       res.status(200).json('weight Working')
   } catch (error) {
       res.status(404).json( {message : error.message})
   }
}
