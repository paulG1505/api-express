const employeController = {};
const Employee = require("../models/employee");

employeController.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
employeController.createEmployees = async(req, res) => {
  const newEmployee=new Employee(req.body)
  await newEmployee.save()
  res.send({message:'Employee Created'});
};
employeController.getEmployee = async(req, res) => {
  //obteniendo id de la ruta
  
  const empleado=await Employee.findById(req.params.id)
  res.send(empleado)
};
employeController.editEmployee = (req, res) => {
  res.send("Hola");
};
employeController.deleteEmployee = (req, res) => {
  res.send("Hola");
};

module.exports = employeController;
