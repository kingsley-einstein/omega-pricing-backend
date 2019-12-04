module.exports = (origin) => {
  return (req, res, next) => {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    next();
  };
}; 
