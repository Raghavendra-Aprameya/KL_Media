const adminController = require('../controllers/adminController.js')

const router = require('express').Router()

router.post('/addAdmin', adminController.addAdmin)
router.get('/allAdmins', adminController.getAllAdmins)
router.get('/:phno', adminController.getOneAdmin)


router.put('/:phno', adminController.updateAdmin)
router.delete('/:phno', adminController.deleteAdmin)

module.exports = router
