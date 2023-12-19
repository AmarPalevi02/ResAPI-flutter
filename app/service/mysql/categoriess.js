const Categories = require('../../api/v1/categories/model')
const Image = require('../../api/v1/images/model')
const { BadRequestError } = require('../../errors')

const createCategories = async (req) => {
    const {
        kBuku,
        judul,
        tglBeli,
        imageId,
        prodi,
        kondisi,
        jenis
    } = req.body

    const result = await Categories.create({
        kBuku,
        judul,
        tglBeli,
        imageId,
        prodi,
        kondisi,
        jenis
    })

    return result
}

const showAll = async () => {
    const result = await Categories.findAll({
        include : [
            {
                model: Image
            }
        ]
    })

    return result
}

const updateCategories = async (req) => {
    const { id } = req.params

    const {
        kBuku,
        judul,
        tglBeli,
        imageId,
        prodi,
        kondisi,
        jenis
    } = req.body

    const check = await Categories.findByPk(id)

    if (!check) throw new BadRequestError(`Tidak ada categories dengan id : ${id}`)

    const result = await Categories.update({
        kBuku,
        judul,
        tglBeli,
        imageId,
        prodi,
        kondisi,
        jenis
    }, { where: { id: id } })

    return result
}

const deleteCategories = async (req) => {
    const { id } = req.params

    const result = await Categories.destroy({
        where: {
            id: id
        }
    })

    return result
}

module.exports = {
    createCategories,
    showAll,
    updateCategories,
    deleteCategories
}