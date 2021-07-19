const apiRest = require("./apiRest");
const mongoose = require("mongoose");

exports.crudController = (modelName) => {
  const Model = mongoose.model(modelName);
  let crudMethods = {};

  crudMethods.create = async (req, res) => {
    apiRest.create(Model, req, res);
  };

  crudMethods.read = async (req, res) => {
    apiRest.read(Model, req, res);
  };

  crudMethods.update = async (req, res) => {
    apiRest.update(Model, req, res);
  };

  crudMethods.delete = async (req, res) => {
    apiRest.delete(Model, req, res);
  };

  crudMethods.list = async (req, res) => {
    apiRest.list(Model, req, res);
  };

  crudMethods.search = async (req, res) => {
    apiRest.search(Model, req, res);
  };

  return crudMethods;
};
