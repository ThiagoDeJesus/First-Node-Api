import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Thiago',
      sobrenome: 'Ramos',
      email: 'Thiago@Aluno.com',
      idade: '000',
      peso: 80,
      altura: 2,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
