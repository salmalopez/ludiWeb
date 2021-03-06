/**
* Estatus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'estatus',
	adapter: 'sails-mysql',
	migrate: 'safe',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {
		idestatus : {
			primaryKey: true,
			type : 'integer',
			required : false
		},
		contestada : {
			type : 'string',
			required : false
		},
		idusuario : {
			type : 'integer',
			required : true
		},
		idactividad : {
			type : 'integer',
			required : true
		}
	}
};

