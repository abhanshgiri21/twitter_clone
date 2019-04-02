'use strict';

const BaseModel = require('./BaseModel');

class Token extends BaseModel {
    static get tableName() {
        return 'tweets';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['tweet'],

            properties: {
                tweet: {
                    type: 'string'
                }
            }
        }
    }

    static get relationMappings() {
        return {
            user: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: __dirname + '/User',
                join: {
                    from: 'tweets.userId',
                    to: 'user.id'
                }
            }
        }
    }
}

module.exports = Token
