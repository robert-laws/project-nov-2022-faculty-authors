import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '../components';
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

  if (publicationError) {
    return (
      <>
        <Navigation />
        <div className='mx-auto max-w-7xl my-4 sm:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
            <div className='text-center text-red-500 m-5'>
              {publicationError}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className='mx-auto max-w-7xl my-4 sm:px-6 lg:px-8'>
        <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
          {isPublicationLoading && !publicationError ? (
            <p>Loading...</p>
          ) : (
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                {publication && publication.title
                  ? publication.title
                  : publication.sourceTitle}
              </h3>
              <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
                <dl className='sm:divide-y sm:divide-gray-200'>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Author
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.firstName} {publication.lastName}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      All Authors
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.authors.map((author) => (
                        <p key={author}>{author}</p>
                      ))}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Editors
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.editors.map((editor) => (
                        <p key={editor}>{editor}</p>
                      ))}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Publication Year
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.year}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Document Type
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.documentType}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Abstract
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.abstract}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Language
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.language}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>Pages</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.pageCount} ({publication.pageStart}-
                      {publication.pageEnd})
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>Link</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      <a
                        rel='noreferrer'
                        target='_blank'
                        href={`${publication.link}`}
                      >
                        Resource Link
                      </a>
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Volume and Issue
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      volume: {publication.volume}, issue: {publication.issue}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>ISSN</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.issn}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>ISBN</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.isbn.map((isbn) => (
                        <p key={isbn}>{isbn}</p>
                      ))}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>DOI</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.doi}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Publisher
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.publisher}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Author Keywords
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.authorKeywords.map((keyword) => (
                        <p key={keyword}>{keyword}</p>
                      ))}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Index Keywords
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.indexKeywords.map((keyword) => (
                        <p key={keyword}>{keyword}</p>
                      ))}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Sustainable Development Goals
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.sustainableDevelopmentGoals.map((goal) => (
                        <p key={goal}>{goal}</p>
                      ))}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Call Number
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.callNumber}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      CIRS Sponsored
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.cirsSponsored}
                    </dd>
                  </div>
                  <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Full Text
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {publication.fullText}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
