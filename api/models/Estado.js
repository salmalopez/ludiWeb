/**
* Estado.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'estado',
    adapter: 'sails-mysql',
    migrate: 'safe',
    autoCreatedAt: false,
  	autoUpdatedAt: false,
	attributes: {
		idestado : {
			primaryKey: true,
			type : 'integer',
			required : false
		},
		nombre : {
			type : 'string',
			required : true
		},
		escuela: {
      		collection: 'escuela',
      		via: 'owner'
    	}
	}
};

