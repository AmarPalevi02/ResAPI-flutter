const DraftCategories = require('../../api/v1/draftCategories/model')
const { BadRequestError } = require('../../errors')

const createDraft = async (req) => {
    const {
        kBuku,
        judul,
        tglBeli,
        fileName,
        prodi,
        kondisi,
        jenis
    } = req.body

    const result = await DraftCategories.create({
        kBuku,
        judul,
        tglBeli,
        fileName,
        prodi,
        kondisi,
        jenis
    })

    return result
}

const showAll = async () => {
    const result = await DraftCategories.findAll()

    return result
}

const deletedraftCategories = async (req) => {
    const { id } = req.params

    const check = await DraftCategories.findByPk(id)

    if (!check) throw new BadRequestError(`Tidask ada categories dengan id : ${id}`)

    const result = await DraftCategories.destroy({
        where: {
            id: id
        }
    })

    return result
}

module.exports = {
    createDraft,
    showAll,
    deletedraftCategories
}