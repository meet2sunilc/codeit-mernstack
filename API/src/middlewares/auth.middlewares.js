export const auth = (req, res, next) => {
  console.log(req.headers.cookie);
  console.log("Hello from auth middleware");
  next();
};
