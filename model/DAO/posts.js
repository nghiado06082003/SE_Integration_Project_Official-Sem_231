var connect_DB = require('./connect_db')

function getPostList(res) {
    connect_DB.query("SELECT post_id, title, brief, create_date, last_change FROM posts", function (err, result, fields) {
        if (err) res.json({ 500: "Database Error: Cannot fetch from database"});
        else res.json({postList: JSON.stringify(result)});
    });
}

function getPost (req, res) {
    var id = req.query.id;
    connect_DB.query(`SELECT * FROM posts WHERE post_id = ${id}`, function (err, postResult, fields) {
        if (err) {
            res.status(500).json({ error: "Database Error: Cannot fetch post from the database" });
        } else {
            connect_DB.query(`SELECT * FROM post_comments WHERE post_id = ${id}`, function (err, commentResult, fields) {
                if (err) {
                    res.status(500).json({ error: "Database Error: Cannot fetch comments from the database" });
                } else {
                    const responseData = {
                        post: postResult,
                        comments: commentResult
                    };
                    res.json(responseData);
                }
            });
        }
    });
}

function createPost(req, res) {
    var title = req.query.title;
    var brief = req.query.brief;
    var content = req.query.content;
    const create_date = new Date().toISOString().split('T')[0];

    connect_DB.query(`INSERT INTO posts(title, brief, content, create_date) VALUES ("${title}", "${brief}", "${content}" ,"${create_date}")`, function (err, result, fields) {
        if (err) res.json({ 500: "Database Error: Cannot insert into database"});
        else res.json({ 300: "OK"});
    });
}

function editPost(req, res) {
    var id = req.query.id;
    var title = req.query.title;
    var brief = req.query.brief;
    var content = req.query.content;
    const last_change = new Date().toISOString().split('T')[0];
  
    connect_DB.query(`UPDATE posts SET title = ${title}, brief = ${brief}, content = ${content}, last_change = "${last_change}" WHERE post_id = ${id}`, function (err, result, fields) {
        if (err) res.json({ 500: "Database Error: Cannot update database" });
        else res.json({ 300: "OK" });
    });
}

function deletePost(req, res) {
    var id = req.query.id;

    connect_DB.query(`DELETE FROM posts WHERE post_id = ${id}`, function (err, result, fields) {
        if (err) res.json({ 500: "Database Error: Cannot delete from database" });
        else res.json({ 300: "OK" });
    });
}

function createPostcmt(req, res) {
    var post_id = req.query.post_id;
    var student_id = req.query.student_id;
    var content = req.query.content;
    const last_change = new Date().toISOString().split('T')[0];

    connect_DB.query(`INSERT INTO post_comments(post_id, student_id, content, last_change) VALUES (${post_id}, ${student_id}, ${content} ,"${last_change}")`, function (err, result, fields) {
        if (err) res.json({ 500: "Database Error: post_id or stident_id is noi exist" });
        else res.json({ 300: "OK" });
    });
}

function editPostcmt(req, res) {
    var id = req.query.id;
    var content = req.query.content;
    const last_change = new Date().toISOString().split('T')[0];

    connect_DB.query(`UPDATE post_comments SET content = ${content}, last_change = "${last_change}" WHERE cmt_id = ${id}`, function (err, result, fields) {
        if (err) res.json({ 500: "Database Error: Cannot update database" });
        else res.json({ 300: "OK" });
    });
}

function deletePostcmt(req, res) {
    var id = req.query.id;

    connect_DB.query(`DELETE FROM post_comments WHERE cmt_id = ${id}`, function (err, result, fields) {
        if (err) res.json({ 500: "Database Error: Cannot delete from database" });
        else res.json({ 300: "OK" });
    });
}


module.exports = { getPostList, getPost, createPost, editPost, deletePost, createPostcmt, editPostcmt, deletePostcmt};