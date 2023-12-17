const asyncHandler = (handler) => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch((err) =>
      next(
        res.status(500).json({
          message: "Error: Exception Error",
          errors: err,
          success: false,
        })
      )
    );
  };
};

export default asyncHandler;
