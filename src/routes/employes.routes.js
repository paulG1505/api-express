const e = require("express");
const { Router } = require("express");
const router = Router();
const employeController= require('../controllers/employes.controllers')

//CRUD
router.get("/",employeController.getEmployees);

router.post("/",employeController.createEmployees);

router.get("/:id",employeController.getEmployee);

router.put("/:id",employeController.editEmployee);

router.delete("/:id",employeController.deleteEmployee);


module.exports = router;
