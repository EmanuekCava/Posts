const { Router } = require('express')

const postsCtrl = require('../controller/posts.Ctrl')

const router = Router()

router.get('/posts', postsCtrl.posts)
router.get('/post/:id', postsCtrl.post)

router.post('/createposts', postsCtrl.createPosts)

router.delete('/removeposts/:id', postsCtrl.removePosts)

router.put('/updateposts/:id', postsCtrl.updatePosts)

module.exports = router;