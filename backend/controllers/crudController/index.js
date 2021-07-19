const crudMethods = require("./crudMethods");
const mongoose = require("mongoose");

exports.crudController = (modelName) => {
  const Model = mongoose.model(modelName);
  let methods = {};

  methods.create = async (req, res) => {
    crudMethods.create(Model, req, res);
  };

  methods.read = async (req, res) => {
    crudMethods.read(Model, req, res);
  };

  methods.update = async (req, res) => {
    crudMethods.update(Model, req, res);
  };

  methods.delete = async (req, res) => {
    crudMethods.delete(Model, req, res);
  };

  methods.list = async (req, res) => {
    crudMethods.list(Model, req, res);
  };

  methods.search = async (req, res) => {
    crudMethods.search(Model, req, res);
  };

  return methods;
};
