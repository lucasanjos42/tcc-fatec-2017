var cron = require('node-cron');
var userModel = require('../models/user-model');
var moment = require('moment');
var _ = require('lodash');

cron.schedule('*/20 * * * * *', function () {

  userModel.find({}, (err, users) => {

    _.each(users, user => {

      if (user.tokenTime) {

        var dateA = user.tokenTime;
        var dateB = moment(moment().format());
        var diff = dateB.diff(dateA, 'seconds');

        if(diff > 35) {
          user.token = null;
          user.tokenTime = null;
          user.save();
        }

      }

    });
  });
});