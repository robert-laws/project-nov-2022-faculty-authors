import {
  LOAD_PUBLICATIONS,
  PUBLICATIONS_ERROR,
  LOAD_PUBLICATION,
  UNLOAD_PUBLICATION,
  PUBLICATION_ERROR,
  FILTER_PUBLICATIONS,
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
        isPublicationLoading: false,
        publicationError: null,
      };

    case UNLOAD_PUBLICATION:
      return {
        ...state,
        publication: null,
        isPublicationLoading: true,
        publicationError: null,
      };

    case PUBLICATION_ERROR:
      return {
        ...state,
        isLoading: false,
        isPublicationLoading: false,
        publicationError: action.payload,
      };

    case FILTER_PUBLICATIONS:
      return {
        ...state,
        publications: state.publications.filter((publication) =>
          publication.documentType.includes(action.payload)
        ),
      };

    default:
      return state;
  }
};

export default publicationsReducer;
