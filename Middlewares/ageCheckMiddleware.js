
function ageCheckMiddleware(req,res,next){
    let ageCheck = req.session.ageCheck;
    next()
}

module.exports = ageCheckMiddleware();