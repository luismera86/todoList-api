
const userServices = require("../services/users.services")
const { request, response } = require("express")

const loginUser = async (req = request, res = response) => {
  const { email, password } = req.body;
  try {
    // Obtener el id del usuario por medio del token
    const token = req.cookies.token
    
    const user = await userServices.getByEmail(email)
    if(!user) return res.status(403).json({msg: "User not found"})
  } catch (error) {
    console.log(error.Message)
  }
}