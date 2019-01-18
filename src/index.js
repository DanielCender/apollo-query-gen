const {
	generateCreate: genCreate,
	generateQuery: genQuery,
	generateUpsert: genUpsert,
	generateUpdate: genUpdate,
} = require('./generators');

module.exports = {
	genCreate,
	genQuery,
	genUpsert,
	genUpdate,
};
