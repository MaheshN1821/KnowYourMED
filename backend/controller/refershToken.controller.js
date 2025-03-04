import User from "../model/user.js";
import Pharamacist from "../model/pharmacist.js";
import jwt from "jsonwebtoken";

const refreshTokenHandler = async (req, res) => {
  const refToken = req?.cookies?.jwt;
  if (!refToken) {
    return res.status(401).json({ error: "Login again!" });
  }

  try {
    const existingUser = await User.findOne({ refreshToken: refToken });

    if (!existingUser) {
      return res.status(401).json({ error: "Login Again!" });
    }

    jwt.verify(refToken, process.env.SEC_REF, (err, user) => {
      if (err) return res.status(401).json({ error: "Login Again" });

      const accessToken = jwt.sign(
        { email: existingUser.email },
        process.env.SEC_ACC,
        {
          expiresIn: "15m",
        }
      );

      res.status(200).json({ accessToken });
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Login Again!" });
  }
};

const refreshTokenPharmaHandler = async (req, res) => {
  const refToken = req?.cookies?.jwt;
  if (!refToken) {
    return res.status(401).json({ error: "Login again!" });
  }

  try {
    const existingUser = await Pharamacist.findOne({ refreshToken: refToken });

    if (!existingUser) {
      return res.status(401).json({ error: "Login Again!" });
    }

    jwt.verify(refToken, process.env.SEC_REF, (err, user) => {
      if (err) return res.status(401).json({ error: "Login Again" });

      const accessToken = jwt.sign(
        { email: existingUser.email },
        process.env.SEC_ACC,
        {
          expiresIn: "15m",
        }
      );

      res.status(200).json({ accessToken });
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Login Again!" });
  }
};

export { refreshTokenHandler, refreshTokenPharmaHandler };
