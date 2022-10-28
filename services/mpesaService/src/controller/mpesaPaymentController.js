const axios = require('axios')

const MPesaTransaction = require('../model/mpesaTransaction.model')

module.exports.mpesaStkPushRequest = async (req, res)=>{
    const date = new Date()
    const timeStamp = date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2)+
    ("0" + date.getDate()).slice(-2)+
    ("0" + date.getHours()).slice(-2)+
    ("0" + date.getMinutes()).slice(-2)+
    ("0" + date.getSeconds()).slice(-2)

    const password = new Buffer.from(process.env.MPESA_BUSINESS_SHORT_CODE + process.env.MPESA_PASS_KEY + timeStamp).toString('base64')

    await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',

    {    
        "BusinessShortCode":process.env.MPESA_BUSINESS_SHORT_CODE,    
        "Password": password,    
        "Timestamp":timeStamp,    
        "TransactionType": "CustomerPayBillOnline",    
        "Amount":"1",    
        "PartyA":"254757255894",    
        "PartyB":process.env.MPESA_BUSINESS_SHORT_CODE,    
        "PhoneNumber":"254757255894",    
        "CallBackURL":"https://70c0-154-159-237-97.in.ngrok.io/api/payment/mpesa/stk-push/callback",    
        "AccountReference":"254757255894",    
        "TransactionDesc":"Payment for reservaton."
     },

     {
        headers: {
            Authorization: `Bearer ${req.token}`
        }
     })
     .then((response)=>{
        res.status(200).json({message: 'STK Push initiated', data: response.data})
     })
     .catch((error)=>{
        throw error
     })
}

module.exports.mpesaStkCallBack = (req, res)=>{
    const response = req.body
    console.log(response.Body)
    if(!response.Body.stkCallback.CallbackMetadata){
        return res.send(200).json({message: 'Response recieved'})
    }else{
        const number = response.Body.stkCallback.CallbackMetadata.Item[4].Value
        const amount = response.Body.stkCallback.CallbackMetadata.Item[0].Value
        const transaction_id = response.Body.stkCallback.CallbackMetadata.Item[1].Value
        MPesaTransaction.create({number, amount, transaction_id})
        .then((transaction)=>{
            res.status(200).json({message: 'MPesa payment via stk-push successful', transaction})
        })
        .catch((e)=>{
            throw e
        })
    }
}