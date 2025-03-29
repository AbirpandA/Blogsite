const BlogPost = require('../models/blogpostModel');

const addblogs = async (req, res) => {
    try {
        const newblog = new BlogPost({
            ...req.body,
            author: req.user._id,
        });

        await newblog.save();
        res.status(201).json({ newblog });
    } catch (error) {
        res.status(500).json({ message: "Error while creating the blog", error: error.message });
    }
};

const editblogs = async (req, res) => {
    try {
        if (req.user.role === "admin") {
            return res.status(403).json({ message: "Admins are not allowed to edit blogs. They can only delete." });
        }

        const updateBlog = await BlogPost.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updateBlog) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json({ message: "Edited successfully", updateBlog });
    } catch (error) {
        res.status(500).json({ message: "Error while editing the blog", error: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error while deleting the blog", error: error.message });
    }
};

const singlePost = async (req, res) => {
    try {
        const singlePost = await BlogPost.findById(req.params.id);

        if (!singlePost) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json(singlePost);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching the blog post", error: error.message });
    }
};

const feed = async (req, res) => {
    try {
        const feed = await BlogPost.find(); 

        res.status(200).json(feed); 
    } catch (error) {
        res.status(500).json({ message: "Error while fetching the blog feed", error: error.message });
    }
};

module.exports = { addblogs, editblogs, deletePost, singlePost, feed };
