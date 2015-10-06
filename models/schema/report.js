var Schema = require('mongoose').Schema;
var timestamp = require('mongoose-timestamp');

var Schema = require('mongoose').Schema;

var reportSchema = new Schema({
  type: {
    type: String,
    required: true,
    default: "Feature"
  },
  geometry: {
    type: {
      type: String,
      required: true,
      default:"Point"
    },
    coordinates: [Number]
  },
  properties: {
    ICCID:{
      type: String,
      trim: true
    },
    OAUTHID:{
      type: String,
      trim: true
    },
    LSID:{
      type: String,
      trim: true
    },
    Abundance:{
      type: String,
      trim: true
    },
    Precision:{
      type: String,
      trim: true
    },
    Comment:{
      type: String,
      trim: true
    },
    Status:{
      type: String,
      trim: true,
      default: 'submitted'
    },
    Anonymous:{
      type: Boolean
    },
    Image:[String]
  }
});

module.exports = reportSchema.plugin(timestamp);
