const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner, associateCurrentUser } = require('feathers-authentication-hooks');

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: 'ownerId',
  }),
];

module.exports = {
  before: {
    all:  [],
    find: [],
    get: [],
    create: [ 
      authenticate('jwt'),
      associateCurrentUser({ as: 'ownerId' }),
    ],
    update: [...restrict],
    patch: [...restrict],
    remove: [...restrict],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
