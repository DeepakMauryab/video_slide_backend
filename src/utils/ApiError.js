// class ApiError extends Error {
//   constructor(
//     statusCode,
//     message = "Some Error Occured",
//     errors = [],
//     stack = ""
//   ) {
//     super(message);
//     this.message = message;
//     this.errors = errors;
//     this.data = null;
//     this.statusCode = statusCode;
//     this.success = false;
//     if (stack) {
//       this.stack = stack;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }

const ApiError = (
  res,
  statusCode,
  message = "Some Error Occured",
  errors = [],
  stack = ""
) => {
  res.status(statusCode).json({ message, errors, stack, success: false });
};

export default ApiError;
