export default function handleAll(req, res) {
  return res.status(200).json({ users: [{ name: "Juan" }, { name: "Pedro" }] });
}
