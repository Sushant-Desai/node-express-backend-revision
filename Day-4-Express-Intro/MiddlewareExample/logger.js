function logger(req,res,next) {
    console.log("Logger Middleware Execute ");
    
    next()
}

module.exports=logger;