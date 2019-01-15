const {
	generateQuery: genQuery,
	generateUpsert: genUpsert,
	generateUpdate: genUpdate,
} = require('./generators');

module.exports = {
	genQuery,
	genUpsert,
	genUpdate,
};
