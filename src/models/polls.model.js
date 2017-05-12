// polls-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const polls = new mongooseClient.Schema({
    name: { type: String, required: true },
    ownerId: { type: mongooseClient.Schema.Types.ObjectId, required: true },
    choices: { type: Object, default: {} },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('polls', polls);
};
