import jwt from 'jsonwebtoken';

const verifyAdmin = (req, res, next) => {
  console.log(req.headers)
  // check if the request has an authorization header
  const authHeader = req.headers.cookie;
  // condition
  if (!authHeader) {
    return res.status(401).json({
      message: "No token provided"
    });
  } else {
    // get token
    console.log(authHeader)
    const token = authHeader.split("=")[1];

    try {
      // vefify the token
      const verifiedUser = jwt.verify(token, process.env.SECRET, { expiresIn: '1d' });
      if (!verifiedUser.isAdmin) {
        return res.status(401).json({
          message: "User not authorized"
        });
      }
      next()
      
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }

  }
};

export default verifyAdmin;