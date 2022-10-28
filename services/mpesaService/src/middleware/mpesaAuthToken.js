const axios = require('axios')

module.exports.generateToken = async(req, res, next)=>{
    const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64')
    await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
        headers: {
            authorization: `Basic ${auth}`
        }
    })
    .then((response)=>{
        req.token = response.data.access_token
        next()
    })
    .catch((error)=>{
        throw error
    })
}