
let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/controller.js');
const proyectos = require('../controllers/proyecto.controller.js');

// Rutas para proyectos
router.post('/api/proyectos/create', proyectos.createProyecto);
router.get('/api/proyectos/all', proyectos.getProyectos);
router.get('/api/proyectos/:id', proyectos.getProyectoById);
router.put('/api/proyectos/update/:id', proyectos.updateProyecto);
router.delete('/api/proyectos/delete/:id', proyectos.deleteProyecto);

router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);

module.exports = router;