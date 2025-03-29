const Blogpost = require('../models/blogpostModel');

const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Admin access only" });
    }
    next();
};

const isAuthororAdmin = async (req, res, next) => {
    try {
        const blog = await Blogpost.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        const isOwner = blog.author.toString() === req.user._id.toString();
        const isAdmin = req.user.role === "admin";

        if (isOwner || isAdmin) {
            req.blog = blog;
            next();
        } else {
            return res.status(403).json({ message: "Unauthorized" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { isAdmin, isAuthororAdmin };
