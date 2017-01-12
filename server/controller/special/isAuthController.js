function isAuth(req,res){
  if(req.isAuthenticated()){
    res.json({
      isAuth:true
    });
  } else {
    res.json({
      isAuth:false
    })
  }
}

module.exports = isAuth;
