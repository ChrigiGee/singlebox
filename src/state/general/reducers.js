import { combineReducers } from 'redux';

import {
  UPDATE_SHOULD_USE_DARK_COLORS,
  UPDATE_CAN_GO_BACK,
  UPDATE_CAN_GO_FORWARD,
  UPDATE_IS_FULL_SCREEN,
  UPDATE_ADDRESS_BAR_INFO,
  UPDATE_TITLE,
} from '../../constants/actions';

import {
  getShouldUseDarkColors,
} from '../../senders';

const { remote } = window.require('electron');

const canGoBack = (state = false, action) => {
  switch (action.type) {
    case UPDATE_CAN_GO_BACK: return action.canGoBack;
    default: return state;
  }
};

const canGoForward = (state = false, action) => {
  switch (action.type) {
    case UPDATE_CAN_GO_FORWARD: return action.canGoForward;
    default: return state;
  }
};

const address = (state = null, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS_BAR_INFO: return action.address;
    default: return state;
  }
};

const addressEdited = (state = false, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS_BAR_INFO: return action.edited;
    default: return state;
  }
};

const title = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TITLE: return action.title;
    default: return state;
  }
};

const isFullScreen = (state = remote.getCurrentWindow().isFullScreen(), action) => {
  switch (action.type) {
    case UPDATE_IS_FULL_SCREEN: return action.isFullScreen;
    default: return state;
  }
};

const shouldUseDarkColors = (state = getShouldUseDarkColors(), action) => {
  switch (action.type) {
    case UPDATE_SHOULD_USE_DARK_COLORS: return action.shouldUseDarkColors;
    default: return state;
  }
};

export default combineReducers({
  address,
  addressEdited,
  canGoBack,
  canGoForward,
  isFullScreen,
  shouldUseDarkColors,
  title,
});
