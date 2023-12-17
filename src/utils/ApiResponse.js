// class ApiResponse {
//   constructor(statusCode, data, message = "operation successfull") {
//     this.statusCode = statusCode;
//     this.data = data;
//     this.message = message;
//     this.success = statusCode < 400;
//   }
// }

const ApiResponse = (res, statusCode, message = "Some Error Occured", data) => {
  res.status(statusCode).json({ data, message, success: true });
};

export default ApiResponse;
