import AppDispatcher from '../core/Dispatcher';
import EventEmitter from 'eventemitter3';
import DockerRegistryConstants from '../constants/DockerRegistryConstants';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var tags = [];

/**
 * Update a Tag.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function refreshTag(id, refreshedTagInfo) {

  tags[id] = assign({}, tags[id], refreshedTagInfo);
}

/**
 * Update all of the Tags items with the same object.
 *     the data to be updated.
 * @param  {object} updates An object literal containing only the data to be
 *     updated.

 */
function refreshTags(tagList) {
  // for (var id in tagList) {
  //   refreshTag(tagList[id].layer, tagList[id]);
  // }
  tags = tagList;
}


var DockerRegistryStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of Tags.
   * @return {object}
   */
  getTags() {
    return tags;
  },

  /**
   * Emits change event to all registered event listeners.
   *
   * @returns {Boolean} Indication if we've emitted an event.
   */
  emitChange() {
    return this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
DockerRegistryStore.dispatchToken = AppDispatcher.register((action) => {
  var text;

  switch(action.actionType) {
    case DockerRegistryConstants.DOCKERREGISTRY_REFRESH_TAGS:
      refreshTags(action.tagList);
      DockerRegistryStore.emitChange();
      break;

    default:
      // no op
  }
});

export default DockerRegistryStore;
