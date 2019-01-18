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
		$data: ${model}CreateInput!
	) {
		create${model}(data: $data) {
			${fields}
		}
	}
	`;

	return query;
};
