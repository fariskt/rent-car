const errorMiddleware = (err, req, res, next) => {
    console.log("Error from middleware" , err);
    const statusCode = res.statusCode || 500;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    });
};

module.exports = errorMiddleware;
