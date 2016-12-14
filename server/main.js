import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees'
import { image, helpers } from 'faker'

Meteor.startup(() => {
  // code to run on server at startup
  // also great place to generate some data

  // check if there is any data exists to aavoid loading huge data again
  const numberRecords = Employees.find({}).count()
  console.log(numberRecords);

  if(!numberRecords) {
    // then generate some data
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard()

      // save record
      Employees.insert({
        name: name,
        email: email,
        phone: phone,
        avatar: image.avatar()
      })
    })
  }

  Meteor.publish('employees', function (per_page) {
    return Employees.find({}, { limit: per_page}) // it's kind of bookmark, saying if you want me to I can go to find all the records that exist.
  })
});
