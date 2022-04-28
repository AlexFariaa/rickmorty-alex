const createUserController = async (req, res) => {
    res.send({message: "create ok"})
}

const findAllUserController = async (req, res) => {
    res.send({message: "find all ok"})
}

module.exports = {
    createUserController,
    findAllUserController
}