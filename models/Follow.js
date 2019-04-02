const BaseModel = require('./BaseModel');
const ValidationError = require('objection').ValidationError;


class Follow extends BaseModel {

    static get tableName() {
        return 'follow';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['following_user', 'followed_user']
        }
    }

    async $beforeInsert() {
        await super.$beforeInsert;
        let follow_entry = await this.constructor.query().where('following_user', this.following_user).andWhere('followed_user', this.followed_user).first();
        if (follow_entry) {
            throw new ValidationError({
                message: 'Already Following!',
                type: 'ModelValidation',
                data: {
                    message: 'You are already following this user!',
                    verb: 'AlreadyFollowing'
                }
            });
        }
    }
}

module.exports = Follow;
