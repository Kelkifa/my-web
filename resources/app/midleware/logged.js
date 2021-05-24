function loggedMW(req, res, next) {
  var huan = {
    username: "huan",
    fullname: "plh",
    admin: true
  }
  res.locals._logged = {
    enable: true,
    user: huan
  }
  if (req.session.user) {
    res.locals._logged = {
      enable: true,
      user: req.session.user
    }
  }
  // console.log(res.locals._logged);
  next();
};

module.exports = loggedMW;