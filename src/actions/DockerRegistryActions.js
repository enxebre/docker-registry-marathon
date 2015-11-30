import Dispatcher from '../core/Dispatcher';
import DockerRegistryConstants from '../constants/DockerRegistryConstants';

export default {

  /**
   * @param  {string} text
   */
  refreshTags(tagList) {
    Dispatcher.dispatch({
      actionType: DockerRegistryConstants.DOCKERREGISTRY_REFRESH_TAGS,
      tagList: tagList
    });
  },
};
