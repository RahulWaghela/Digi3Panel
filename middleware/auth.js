const jwt = require('jsonwebtoken');
const {alluserOfourPanel} = require("../model/schema");
const fs=require('fs');
const path=require('path');
const sessionFilePath=path.join(__dirname,'../views/session.ejs')
const auth = async (req, res, next) => {
    try {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        const token = req.cookies.jwt;
        // if (!token) {
        //   throw new Error("Token not found");
        // }
        const verifyuser = jwt.verify(token, process.env.JSON_TOKEN);
        // console.log(verifyuser)
        const user = await alluserOfourPanel.findOne({ _id: verifyuser._id });
        // if (!user) {
        //   throw new Error("User not found");
        // }
        //  console.log(user)
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        fs.readFile(`${sessionFilePath}`,function(err,data){
            res.writeHead(200,{'Content-type':'Text/html'});
            res.write(data)
            res.end()
          })
    }
}

module.exports = auth;