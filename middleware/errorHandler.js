const errorhandler = (err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).json({ message: "Something went wrong" });
};

module.exports = errorhandler;
