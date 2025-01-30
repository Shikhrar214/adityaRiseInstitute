

const superAdminAuth = (req, res, next) => {
    const token = req.headers["authorization"|| "Authorization"];
    if (!token) {
        return res.status(401).json({
            message: "access denied"
        })
    }

    try {
        const decoade = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)
        req.user = decoade;
        next();
    } catch (error) {
        res.status(403).json({
            message: "invalid token"
        })
    }
}

export {superAdminAuth}