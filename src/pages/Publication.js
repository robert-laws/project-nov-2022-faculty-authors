import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PublicationsContext from '../context/publications/publicationsContext';

export const Publication = () => {
  const { id } = useParams();

  // const [publicationDetails, setPublicationDetails] = useState(null);

  const {
    publication,
    isPublicationLoading,
    publicationError,
    loadPublication,
  } = useContext(PublicationsContext);

  useEffect(() => {
    if (id) {
      loadPublication(id);
    }
  }, [id, loadPublication]);

  return (
    <div>
      {isPublicationLoading && !publicationError ? (
        <p>Loading...</p>
      ) : (
        <p>
          Title:{' '}
          {publication && publication.title
            ? publication.title
            : publication.sourceTitle}
        </p>
      )}
    </div>
  );
};
