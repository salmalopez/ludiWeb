/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		name : {
			type : 'string',
			required : true,
			minLength : 3
		},

		lastName : {
			type : 'string',
			required : true,
			minLength : 3
		},

		date: {
			type: 'string',
			required: true,
			minLength : 4
		},

		weight : {
			type : 'string',
			required : true,
			minLength : 3
		},

		height : {
			type : 'string',
			required : true,
			minLength : 3
		},

		email: {
            type: 'email',
            required: false,
            unique: true
        },

        password: {
            type: 'string',
            minLength: 6,
            required: false
        },

        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
  },
  beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
};

