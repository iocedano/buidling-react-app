'use strict';

import Dispatcher from '../dispatcher/appDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import actionTypes from '../constants/actionTypes';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let _authors = [];

const AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getAllAuthors: function(){
    return _authors;
  },
  getAuthorById: function(id) {
    return _find(_authors, {id: id});
  }
});


Dispatcher.register(function(action) {
  switch (action.actionType) {
    case  actionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case actionTypes.INITIALIZE:
      _authors = action.initalData.authors;
      AuthorStore.emitChange();
      break;
    case actionTypes.UPDATE_AUTHOR:
      let existingAuthor = _.find(_authors, {id: action.author.id});
      let exixtingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(exixtingAuthorIndex, 1, action.authors);
      AuthorStore.emitChange();
      break;
    default:
      // no op
  }
});

export default AuthorStore;
