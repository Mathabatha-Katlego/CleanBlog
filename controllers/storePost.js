const BlogPost = require('../models/BlogPost')
const path = require('path')

module.exports = async (req, res) => {
    let image = req.files.image //extracts iamge from req.files
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), //moves image file to location on server
        async (error) => {
            await BlogPost.create({
                ...req.body,
                image: '/img/' + image.name,
                userid: req.session.userId //create blogpost. passess body data and url of image and userid
            })
            res.redirect('/')
        })

}