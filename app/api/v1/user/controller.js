const { StatusCodes } = require('http-status-codes')
const {
    createUser,
    showAll,
    updateUser,
    deleteUser,
    getOne
} = require('../../../service/mysql/user')

const create = async (req, res, next) => {
    try {
        const result = await createUser(req)
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

const findOneUser = async (req, res, next) => {
    try {
        const result = await getOne(req)

        res.status(StatusCodes.OK).json({
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

const update = async (req, res, next) => {
    try {
        const result = await updateUser(req)

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
        const result = await deleteUser(req)

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
    destroy,
    findOneUser
}