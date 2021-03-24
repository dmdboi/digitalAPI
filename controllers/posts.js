const { default: api } = require("../services/api")

exports.getPosts = async (req, res, next) => {
    let response = await api.get(process.env.API_URL)

    let posts = response.data

    return res.status(200).json({ posts })
}


exports.getPostById = async (req, res, next) => {
    let response = await api.get(process.env.API_URL + "/" + req.params.id)
    let post = response.data

    return res.status(200).json({ post })
}

exports.getPostBySlug = async (req, res, next) => {
    let response = await api.get(process.env.API_URL)
    let posts = response.data

    let post = posts.find(item => item.slug === req.params.slug)

    return res.status(200).json({ post })
}