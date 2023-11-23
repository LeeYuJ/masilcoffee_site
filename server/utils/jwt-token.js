const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

class JWT {
  // 토큰 생성하기
  static createToken(payload) {
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    return token;
  }

  // 토큰 검증하기
  static verifyToken(token) {
    try {
      const decodedToken = jwt.verify(token, SECRET_KEY);
      const userId = decodedToken.user._id;
      const role = decodedToken.user.role;
      return { userId, role };
    } catch (error) {
      if (error.name == "TokenExpiredError") {
        throw new Error("토큰이 만료되었습니다.");
      } else {
        throw new Error(`토큰 검증 실패: ${error.message}`);
      }
    }
  }
}

module.exports = JWT;
