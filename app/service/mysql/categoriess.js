const CategoriesBuku = require('../../api/v1/categories/model')
const { BadRequestError } = require('../../errors')

const createCategories = async (req) => {
    const {
        noISBN,
        namaPengarang,
        tglCetak,
        kondisi,
        harga,
        jenis,
        hargaProduksi
    } = req.body

    console.log(req)

    const result = await CategoriesBuku.create({
        noISBN,
        namaPengarang,
        tglCetak,
        kondisi,
        harga,
        jenis,
        hargaProduksi
    })

    console.log(result)

    return result
}

const showAll = async () => {
    const result = await CategoriesBuku.findAll()

    return result
}

const updateCategories = async (req) => {
    const { id } = req.params

    const {
        noISBN,
        namaPengarang,
        tglCetak,
        kondisi,
        harga,
        jenis,
        hargaProduksi
    } = req.body

    const check = await CategoriesBuku.findByPk(id)

    if (!check) throw new BadRequestError(`Tidak ada categories dengan id : ${id}`)

    const result = await CategoriesBuku.update({
        noISBN,
        namaPengarang,
        tglCetak,
        kondisi,
        harga,
        jenis,
        hargaProduksi
    }, { where: { id: id } })

    return result
}

const deleteCategories = async (req) => {
    const { id } = req.params

    const result = await CategoriesBuku.destroy({
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