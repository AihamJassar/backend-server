const errorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Error";

    if (err.name === "ValidationError") {
        statusCode = 400;
        const errors = Object.values(err.errors).map(e => e.message);
    }
}