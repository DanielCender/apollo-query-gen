const { gql } = require('apollo-boost');

/**
 * @param {string} model - uppercase model name
 * @param {object} returns - array of fields to return from query
 * @returns {object} query - gql`` query object
 */
module.exports = (model, returns) => {
	let fields = `${returns.map(field => `${field}\n`)}`.replace(/,/gim, '');
	const query = gql`
		mutation(
		$where: ${model}WhereUniqueInput!
		$update: ${model}UpdateInput!
		$create: ${model}CreateInput!
	) {
		upsert${model}(where: $where, update: $update, create: $create) {
			${fields}
		}
	}
	`;

	return query;
};
