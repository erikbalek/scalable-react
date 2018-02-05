/*
 *
 * LinkFormContainer actions
 *
 */

import {
  ADD_LINK, ADD_LINK_FAILURE, ADD_LINK_SUCCESS, ADD_LINK_CANCELED,
} from './constants';

export function addLink(link) {
  return {
    type: ADD_LINK,
    link,
  };
}

export function addLinkSuccess(link) {
  return {
    type: ADD_LINK_SUCCESS,
    link,
  };
}

export function addLinkFail(link, message) {
  return {
    type: ADD_LINK_FAILURE,
    link,
    message,
  };
}

export function addLinkCanceled() {
  return {
    type: ADD_LINK_CANCELED,
  };
}
