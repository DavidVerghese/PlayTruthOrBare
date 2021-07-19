const { Router } = require('express')
const cardsRouter = require('./cards');
const usersRouter = require('./users');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
router.use('/cards', cardsRouter);

module.exports = router