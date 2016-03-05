/**
* Schools.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		name : {
			type : 'string',
			required : true,
			minLength : 5
		},
		entity : {
			type : 'string',
			required : true,
			minLength : 3
		},
		state: {
			type: 'string',
			required: true,
			minLength : 4
		},
		address : {
			type : 'string',
			required : true,
			minLength : 10
		},
		postalCode : {
			type : 'string',
			required : true,
			minLength : 5
		},
		phone : {
			type : 'string',
			required : true,
			minLength : 10
		}
	}
};

