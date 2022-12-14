import { useReducer, useCallback } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import {
  LOAD_PUBLICATIONS,
  PUBLICATIONS_ERROR,
  LOAD_PUBLICATION,
  UNLOAD_PUBLICATION,
  PUBLICATION_ERROR,
  FILTER_PUBLICATIONS,
} from '../types';
import PublicationsContext from './publicationsContext';
import publicationsReducer from './publicationsReducer';

const PublicationsState = ({ children }) => {
  const initialState = {
    publications: [],
    publication: null,
    isLoading: true,
    isPublicationLoading: true,
    publicationsError: null,
  };

  const [state, dispatch] = useReducer(publicationsReducer, initialState);

  const loadPublications = useCallback(async () => {
    const colRef = collection(db, 'facultyData');

    try {
      const snapshot = await getDocs(colRef);
      if (snapshot.empty) {
        dispatch({
          type: PUBLICATIONS_ERROR,
          payload: 'No publications found',
        });
      } else {
        let allPublications = [];
        snapshot.forEach((doc) => {
          allPublications.push({ id: doc.id, ...doc.data() });
        });
        dispatch({ type: LOAD_PUBLICATIONS, payload: allPublications });
      }
    } catch (error) {
      dispatch({
        type: PUBLICATIONS_ERROR,
        payload: `Database Error: ${error.message}`,
      });
    }
  }, [dispatch]);

  const loadPublication = useCallback(
    async (id) => {
      const docRef = doc(db, 'facultyData', id);

      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          dispatch({
            type: LOAD_PUBLICATION,
            payload: { id: docSnap.id, ...docSnap.data() },
          });
        } else {
          dispatch({
            type: PUBLICATION_ERROR,
            payload: 'No publication found',
          });
        }
      } catch (error) {
        dispatch({
          type: PUBLICATIONS_ERROR,
          payload: `Database Error: ${error.message}`,
        });
      }
    },
    [dispatch]
  );

  const unloadPublication = useCallback(() => {
    dispatch({ type: UNLOAD_PUBLICATION, payload: null });
  }, [dispatch]);

  const filterPublications = useCallback(
    (filters) => {
      if (filters['docTypes']) {
        dispatch({
          type: FILTER_PUBLICATIONS,
          payload: filters['docTypes'],
        });
      }
      console.log(filters['docTypes']);
      // dispatch({ type: FILTER_PUBLICATIONS, payload: filters });
    },
    [dispatch]
  );

  return (
    <PublicationsContext.Provider
      value={{
        publications: state.publications,
        publication: state.publication,
        isLoading: state.isLoading,
        isPublicationLoading: state.isPublicationLoading,
        publicationsError: state.publicationsError,
        publicationError: state.publicationError,
        loadPublications,
        loadPublication,
        unloadPublication,
        filterPublications,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  );
};

export default PublicationsState;
