
const checkTokenData = (req, res, next) => {
    const { description, done } = req.body;
    if (!description || !done) {
        return res.status(404).json({statuts: "Error", message: "Ingrese todos los datos"})
    }

    next();
}

module.exports = checkTokenData;