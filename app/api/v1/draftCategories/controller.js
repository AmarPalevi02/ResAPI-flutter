const { StatusCodes } = require('http-status-codes')
const { createDraft, showAll, deletedraftCategories } = require('../../../service/mysql/daraftCategories')

const create = async (req, res, next) => {
    try {
        const result = await createDraft(req)

        res.status(StatusCodes.CREATED).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const index = async (req, res, next) => {
    try {
        const result = await showAll()

        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async(req, res, next) => {
    try {
        const result = await deletedraftCategories(req)

        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Data behasil dihapus',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    index,
    destroy
}