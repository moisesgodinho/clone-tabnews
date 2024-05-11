function status(request, response) {
  response.status(200).json({
    "chave": "está funcionando"
  })
}

export default status