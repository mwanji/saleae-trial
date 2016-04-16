import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

import { Strings } from "../imports/editor.js";
import "./main.html";

Template.editor.helpers({
  strings() {
    return Strings.find({});
  }
});

Template.stringEditor.events({
  "click button"(event) {
    const form = $(event.target).parent("form");
    Strings.update(form.data("id"), { $set: { text: form.find("textarea").val() }});
  }
});
