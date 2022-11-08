import {
  LOAD_PUBLICATIONS,
  PUBLICATIONS_ERROR,
  LOAD_PUBLICATION,
  PUBLICATION_ERROR,
} from '../types';

const publicationsReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
        publication: null,
        isLoading: false,
        publicationsError: null,
        publicationError: null,
      };

    case PUBLICATIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        publicationsError: action.payload,
      };

    case LOAD_PUBLICATION:
      return {
        ...state,
        publication: action.payload,
        isLoading: false,
        publicationError: null,
      };

    case PUBLICATION_ERROR:
      return {
        ...state,
        isLoading: false,
        publicationError: action.payload,
      };

    default:
      return state;
  }
};

export default publicationsReducer;
