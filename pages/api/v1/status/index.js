function status(request, response) {
  response.status(200).json({ status: "o Status é 200" })
}

export default status