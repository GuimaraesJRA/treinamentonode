const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const pessoaController = require('../controllers/PessoaController');


const router = Router();

router.get('/pessoas', pessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', pessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa); 

module.exports = router;