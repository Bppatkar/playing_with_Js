import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  //getting token
  const authHeaders = req.headers.authorization || '';
  const [scheme, token] = authHeaders.split(' ');
  if (scheme?.toLowerCase() !== 'Bearer' || !token) {
    return res
      .status(401)
      .json({ message: 'Missing or invalid Authorization header' });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (!tokenDecode) {
      res.status(401).json({
        success: false,
        message: 'You are not Authorized, invalid token',
      });
    }

    req.user = tokenDecode.id;
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    res.status(401).json({
      success: false,
      message: 'Not authorized, token failed',
    });
  }
};

export default auth;
