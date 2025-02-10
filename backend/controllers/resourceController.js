const Resource = require("../models/Resource");

// Create Resource (Admin only)
const createResource = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newResource = new Resource({ title, description });
    await newResource.save();
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Resources
const getAllResource = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get Resource by ID
const getResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource)
      return res.status(404).json({ message: "Resource not found" });
    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update Resource (Admin only)
const updateResource = async (req, res) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedResource)
      return res.status(404).json({ message: "Resource not found" });
    res.json(updatedResource);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// Delete Resource (Admin only)
const deleteResource = async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);
    if (!deletedResource)
      return res.status(404).json({ message: "Resource not found" });
    res.json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createResource,
  getAllResource,
  getResource,
  updateResource,
  deleteResource,
};
