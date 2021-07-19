const { Router } = require('express')
const controllers = require('../controllers/cards')
const restrict = require('../helpers/restrict')

const router = Router()

router.get('/', controllers.getCards)
router.get('/:id', controllers.getCard)
router.post('/',restrict, controllers.createCard)
router.put('/:id',restrict, controllers.updateCard)
router.delete('/:id',restrict, controllers.deleteCard)

module.exports = router