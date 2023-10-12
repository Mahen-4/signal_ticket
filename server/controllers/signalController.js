const client = require("../models/db_connect");

module.exports = {

    addSignal: async(req,res) => {
        const createdDate = new Date()
        const query = {
            text: 'INSERT INTO signal(img, titre, description, date_publication, localisation) VALUES($1, $2, $3, $4, $5)',
            values: [req.body.image, req.body.titre, req.body.description,createdDate, req.body.localisation],
        }

        try {
            const ins = await client.query(query)
            res.status(200).json({
                message: "Le signal a bien été ajouté"
            });
        } catch (error) {
            res.status(401).json({
                message: "Erreur lors de la création du signal"
            })
            console.log(error)
        }
    },
    allSignal: async(req,res) => {
        
        try {
            const getAll = await client.query('SELECT * FROM signal')
            res.status(200).json({
                data: getAll.rows
            })
        } catch (error) {
            res.status(401).json({
                message: "Erreur"
            })
            console.log(error)
        }
    }        
}