const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const pessoaController = require('../controllers/PessoaController');


const router = Router();

router.get('/pessoas', pessoaController.pegaPessoasAtivas);
router.get('/pessoas/todos', pessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', pessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa); 
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);
router.post('/pessoas/:id/restaura/', PessoaController.restauraPessoa);
router.post('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.restauraMatricula);
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatricula);
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma);
router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotada);

module.exports = router;