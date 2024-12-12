const db = require('../models');

// create main model
const Admin = db.admins

const addAdmin = async (req, res) => {
    let info = {
        name: req.body.name,
        password: req.body.password,
        phno: req.body.phno
    }

    const adminn = await Admin.create(info)
    res.status(200).send(adminn)
}

const getAllAdmins = async (req, res) => {
    let admins = await Admin.findAll({
        //attributes: ['name', 'phno']
    })
    res.status(200).send(admins)
}

const getOneAdmin = async (req, res) => {
    let phno = req.params.phno
    let admin1 = await Admin.findOne({ where: { phno: phno } })
    res.status(200).send(admin1)
}

const updateAdmin = async (req, res) => {
    let phno = req.params.phno
    const adminu = await Admin.update(req.body, { where: { phno: phno } })
    res.status(200).send(adminu)
}

const deleteAdmin = async (req, res) => {
    let phno = req.params.phno
    await Admin.destroy({ where: { phno: phno } })
    res.status(200).send("Deleted Successfully")
}


module.exports = {
    addAdmin,
    getAllAdmins,
    getOneAdmin,
    updateAdmin,
    deleteAdmin

}