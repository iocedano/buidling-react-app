'use strict';

import Dispatcher from '../dispatcher/appDispatcher';
import AuthorApi from '../api/authorApi';
import actionTypes from '../constants/actionTypes';

const AuthorActions = {
  createAuthor: function createAuthor(author) {
    const newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: actionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },
  updateAuthor: function updateAuthor(author) {
    let upAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: actionTypes.UPDATE_AUTHOR,
      author:  upAuthor
    });
  }
};

export default AuthorActions;
