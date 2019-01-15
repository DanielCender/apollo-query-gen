const { gql } = require('apollo-boost');
const pluralize = require('pluralize');

/**
 * @param {string} model - uppercase model name
 * @param {object} returns - array of fields to return from query
 * @returns {object} query - gql`` query object
 */
module.exports = (model, returns) => {
	const plural = pluralize.plural(model).toLocaleLowerCase();

	let fields = `${returns.map(field => `${field}\n`)}`.replace(/,/gim, '');

	const query = gql`
	update($data: ${model}UpdateInput!, $where: ${model}WhereInput!) {
		${plural}(data: $data, where: $where) {
			${fields}
		}
	}
`;
	return query;
};
