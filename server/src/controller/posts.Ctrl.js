const postsCtrl = {};

const connection = require('../database/connection/database')

postsCtrl.posts = (req, res) => {

    let query = `SELECT * FROM post`;

    connection.query(query, (err, rows) => {
        if(err) {
            console.log(err);
        } else {
            res.json(rows)
        }
    })
}
postsCtrl.post = (req, res) => {

    const { id } = req.params;
    
    let query = `SELECT * FROM post WHERE id=?`

    connection.query(query, [id], (err, rows) => {
        if(err) {
            console.log(err);
        } else {
            res.json(rows[0])
        }
    })

}
postsCtrl.createPosts = (req, res) => {
    
    const { id, title, content, created } = req.body;

    let query = `
        SET @id=?;
        SET @title=?;
        SET @content=?;
        SET @created=?;
        CALL postsCreateUpdate(@id, @title, @content, @created);
    `;

    connection.query(query, [id, title, content, created], (err) => {
        if(err) {
            console.log(err);
        } else {
            res.json("Posts created")
        }
    })

}
postsCtrl.removePosts = (req, res) => {
    
    const { id } = req.params;

    let query = `DELETE FROM post WHERE id=?`;

    connection.query(query, [id], (err) => {
        if(err) {
            console.log(err);
        } else {
            res.json("Post removed")
        }
    })

}
postsCtrl.updatePosts = (req, res) => {

    const { id } = req.params;
    const { title, content, created } = req.body;

    let query = `
        SET @id=?;
        SET @title=?;
        SET @content=?;
        SET @created=?;
        CALL postsCreateUpdate(@id, @title, @content, @created);
    `;

    connection.query(query, [id, title, content, created], (err) => {
        if(err) {
            console.log(err);
        } else {
            res.json("Updated post")
        }
    })

}

module.exports = postsCtrl;