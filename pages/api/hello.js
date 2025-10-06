export default function handler(req, res) {
  const now = new Date().toISOString();
  res.status(200).json({
    message: "Hello from DevOps App API! Your container is running smoothly.",
    timestamp: now,
    status: "healthy"
  });
}
