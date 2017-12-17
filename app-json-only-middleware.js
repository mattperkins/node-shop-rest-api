const express = require('express')
const app = express()

// use middleware
app.use((req,res,next)=>{
  res.status(200).json({
    message: 'Hello, World!',
    language: 'en'
  })
})

module.exports = app