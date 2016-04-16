import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { Strings } from "../imports/editor.js";

Meteor.startup(() => {
  if (Strings.find({}).count() === 0) {
    Strings.insert({
      _id: "Slogan",
      text: "Debug hardware like the pros with the logic analyzer you'll love."
    });
    Strings.insert({
      _id: "Navigate",
      text: "When you have billions of data points to display, it is important that getting around in all that data is a zippy experience. Effortlessly zoom in and out with the scroll wheel, and navigate left and right by dragging the data where you want it."
    });
    Strings.insert({
      _id: "Measure",
      text: "For basic measurements, just place your mouse near something interesting. The software will figure out the rest and display the relevant measurements. You can show different measurements by right-clicking."
    });
  }
});
