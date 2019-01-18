const generateQuery = require('./generateQuery');
const generateUpsert = require('./generateUpsert');
const generateUpdate = require('./generateUpdate');
const generateCreate = require('./generateCreate');

module.exports = {
	generateCreate,
	generateQuery,
	generateUpsert,
	generateUpdate,
};
