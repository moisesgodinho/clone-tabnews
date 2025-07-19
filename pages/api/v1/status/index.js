function status(request, response) {
  response
    .status(200)
    .json({ "alunos do curso.dev": "sao pessoas acima da media" });
}

export default status;
