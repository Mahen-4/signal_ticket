const client = require("../models/db_connect");


module.exports = {
    getUsers: async (req,res) => {
        const data = await client.query('SELECT * FROM users')
        res.send(data.rows)
    },
    getUserInfo: async (req,res) => {
        try {
            const data = await client.query('SELECT * FROM users WHERE username = $1',['admin']);
            res.send(data.rows)      
        } catch (error) {
            console.log(error)
        }
    },
    createUser: async(req,res) => {
        
        const query1 = {
            text: 'SELECT * FROM users WHERE username=$1',
            values: [req.body.username]
        }
        try {
            const find = await client.query(query1)
            if(find.rowCount == 0){
                const query = {
                    text: 'INSERT INTO users(username, pwd) VALUES($1, $2)',
                    values: [req.body.username, req.body.password],
                }
        
                try {
                    const ins = await client.query(query)
                    res.status(200).json({
                        message: "Votre compte a bien été créé"
                    });
                } catch (error) {
                    res.status(401).json({
                        message: "Erreur lors de la création du compte"
                    })
                    console.log(error)
                }
            }else{
                res.status(401).json({
                    message: "Nom d'utilisateur déjà pris"
                })
            }
        } catch (error) {
            console.log("error")
        }
        
    },
    loginUser: async(req,res) => {
        const query = {
            text: 'SELECT * FROM users WHERE username=  $1 AND pwd = $2',
            values: [req.body.username, req.body.password]
        }

        try{
            const ins = await client.query(query)
            res.status(200).json({
                username: ins.rows[0].username
            });
        } catch(error){
            res.status(401).json({
                message: "Erreur lors de la connexion"
            })
            console.log(error)
        }
    }
}