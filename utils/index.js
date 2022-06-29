const wrapFailure = (data) => ({ success: false, data });
const wrapSuccess = (data) => ({ success: true, data });
const requireAuthToken = (req, res, next) => {
  if (req.headers.authtoken) return next();
  res.status(400).json(wrapFailure({ message: "authToken is undefined" }));
};

module.exports = {
  wrapFailure,
  wrapSuccess,
  requireAuthToken,
};
