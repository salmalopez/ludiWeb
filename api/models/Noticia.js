/**
* Noticia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: 'noticia',
	adapter: 'sails-mysql',
	migrate: 'safe',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {
		idnoticia : {
			primaryKey: true,
			type : 'integer',
			required : false
		},
		contenido : {
			type : 'string',
			required : true
		},
		fecha : {
			type : 'string',
			required : true
		},
		idusuario : {
			type : 'integer',
			required : true
		},
		owner : {
			model: 'usuario',
        	columnName: 'idusuario'
		}
	}
};

