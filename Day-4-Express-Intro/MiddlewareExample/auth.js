function auth(req, res, next) {

    console.log("Auth Middleware Execute");
    const isLoggedIn = true;

    if (isLoggedIn) {
        next();
    } else {
        res.send("Access Denied ")
    }

}

module.exports = auth;