const User = require('../../api/v1/user/model')
const Image = require('../../api/v1/images/model')
const { BadRequestError } = require('../../errors')

const createUser = async (req) => {
    const {
        nama,
        alamat,
        tglDaftar,
        noTelpon,
        imageId,
    } = req.body

    console.log(req)

    const result = await User.create({
        nama,
        alamat,
        tglDaftar,
        noTelpon,
        imageId,
    })

    console.log(result)

    return result
}

const showAll = async () => {
    const result = await User.findAll({
        include: [
            Image
        ]
    })

    return result
}

const getOne = async (req) => {
    const { nama } = req.params

    const result = await User.findOne({
        where: {
            nama: nama
        }
    })

    return result
}

const updateUser = async (req) => {
    const { id } = req.params

    const {
        nama,
        alamat,
        tglDaftar,
        noTelpon,
        imageId,
    } = req.body

    const check = await User.findByPk(id)

    if (!check) throw new BadRequestError(`Tidak ada categories dengan id : ${id}`)

    const result = await User.update({
        nama,
        alamat,
        tglDaftar,
        noTelpon,
        imageId,
    }, { where: { id: id } })

    return result
}

const deleteUser = async (req) => {
    const { id } = req.params

    const result = await User.destroy({
        where: {
            id: id
        }
    })

    return result
}

module.exports = {
    createUser,
    showAll,
    updateUser,
    deleteUser,
    getOne
}