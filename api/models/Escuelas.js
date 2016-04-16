/**
* Escuelas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: 'escuela',
    adapter: 'sails-mysql',
    migrate: 'safe',
    autoCreatedAt: false,
  	autoUpdatedAt: false,
	attributes: {
		idescuela : {
			primaryKey: true,
			type : 'integer',
			required : true
		},
		clave : {
			type : 'string',
			required : true
		},
		nombre : {
			type : 'string',
			required : true
		},
		idestado : {
			type : 'int',
			required : true
		}
	}
};

