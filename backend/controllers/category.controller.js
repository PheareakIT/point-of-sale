const addCategory = (req, res) => {
    try{

        res.status(200).json({
            success: true,
            message: "running..."
        })

    }catch(error){

        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}



module.exports = {
    addCategory,
}