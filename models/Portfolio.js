const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
}, { _id: false });

const DeploymentSchema = new mongoose.Schema({
  url: String,
  platform: String,
  lastDeployed: Date
}, { _id: false });

const PortfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  sections: [SectionSchema],
  deployment: DeploymentSchema,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
