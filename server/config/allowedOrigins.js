const allowedOrigins =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : ["https://mywebsite.com"];

export default allowedOrigins;
