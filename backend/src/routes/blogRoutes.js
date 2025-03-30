const express = require('express')
const verifytoken = require('../middleware/tokenAuth')
const { isAdmin, isAuthororAdmin } = require('../middleware/roleAuth')
const router = express.Router();
const { addblogs, editblogs, deletePost, singlePost, feed } = require('../controller/blogpostcontroller')
const upload = require('../middleware/multer')



router.post('/add',verifytoken,upload.single('image'),addblogs);
router.put('/edit/:id',verifytoken,isAuthororAdmin,editblogs);
router.delete('/delete/:id',verifytoken,isAdmin,deletePost);
router.get('/feed',feed);
router.get('/feed/:id',singlePost);

module.exports = router ;

