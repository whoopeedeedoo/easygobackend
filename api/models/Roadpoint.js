/**
 * Roadpoint.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

            connection: 'mongo',
	attributes: {
                        "startDate": "String",
                        "time": "String",
                        "endDate": "String",
                        "latitude": "String",
                        "longitude": "String",
                        "name": "String",
                        "place": "String"
	}
};