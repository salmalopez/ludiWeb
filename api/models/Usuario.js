/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  	tableName: 'usuario',
	adapter: 'sails-mysql',
	migrate: 'safe',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {
		idusuario : {
			primaryKey: true,
			type : 'integer',
			required : false
		},
		nombre : {
			type : 'string',
			required : true
		},
		usuario : {
			type : 'string',
			required : true
		},
		password : {
			type : 'int',
			required : false
		},
		edad : {
			type : 'integer',
			required : true
		},
		peso : {
			type : 'float',
			required : false
		},
		estatura : {
			type : 'float',
			required : false
		},
		avance : {
			type : 'datetime',
			required : false
		},
		creacion : {
			type : 'datetime',
			required : true
		},
		idescuela : {
			type : 'integer',
			required : false
		},
		idtipousuario : {
			type : 'integer',
			required : true
		},
		noticia: {
      		collection: 'noticia',
      		via: 'owner'
    	},
    	owner : {
			model: 'escuela',
        	columnName: 'idescuela'
		}
	}
};

