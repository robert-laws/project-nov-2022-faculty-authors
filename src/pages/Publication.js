import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PublicationsContext from '../context/publications/publicationsContext';

export const Publication = () => {
  const { id } = useParams();

  // const [publicationDetails, setPublicationDetails] = useState(null);

  const { publication, isLoading, publicationError, loadPublication } =
    useContext(PublicationsContext);

  useEffect(() => {
    if (id) {
      loadPublication(id);
    }
  }, [id, loadPublication]);

  return (
    <div>
      {isLoading && !publicationError ? (
        <p>Loading...</p>
      ) : (
        <p>
          Title:{' '}
          {publication.title ? publication.title : publication.sourceTitle}
        </p>
      )}
    </div>
  );
};
