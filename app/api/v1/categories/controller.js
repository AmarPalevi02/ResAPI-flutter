const { StatusCodes } = require('http-status-codes')
const {
    createCategories,
    showAll,
    updateCategories,
    deleteCategories
} = require('../../../service/mysql/categoriess')

const create = async (req, res, next) => {
    try {
        const result = await createCategories(req)
        console.log(result)

        res.status(StatusCodes.CREATED).json({
            message: 'Successfully',
            data: result
        })
    } catch (error) {
        next(error)
        console.log(error)
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

const update = async (req, res, next) => {
    try {
        const result = await updateCategories(req)

        res.status(StatusCodes.OK).json({
            message: 'Successfully',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteCategories(req)

        res.status(StatusCodes.OK).json({
            message: 'Successfully',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    index,
    update,
    destroy
}