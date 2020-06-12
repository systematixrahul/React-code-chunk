import http from "../http-common";


import React from 'react';

import http from "../http-common";

const getAll = () => {
  return http.get("/Users");
};

const get = id => {
  return http.get(`/Users/${id}`);
};

const create = data => {
  return http.post("/Users", data);
};

const update = (id, data) => {
  return http.put(`/Users/${id}`, data);
};

const remove = id => {
  return http.delete(`/Users/${id}`);
};

const removeAll = () => {
  return http.delete(`/Users`);
};



export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,

};