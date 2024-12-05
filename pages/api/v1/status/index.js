function status(request, response) {
  response.status(200).json({ chave: "são os melhores"})
}

export default status;