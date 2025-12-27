import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        console.log("No token provided in headers:", req.headers);
        return res.json({
            success: false, message: "Token not provided"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.admin = decoded; // Store decoded info
        next()

    } catch (error) {
        console.error("JWT Verification Error!");
        console.error("Token received:", token);
        console.error("Error message:", error.message);
        res.json({
            success: false, message: "Invalid Token"
        })

    }

}

export default auth