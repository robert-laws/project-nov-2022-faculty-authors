import React, { useContext, useEffect, useState, useMemo } from 'react';
import PublicationsContext from '../context/publications/publicationsContext';
import { ListItem, Navigation, Pagination } from '../components';

let pageSize = 10;

export const Publications = () => {
  const {
    publications,
    isLoading,
    publicationsError,
    loadPublications,
    unloadPublication,
  } = useContext(PublicationsContext);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return publications.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, publications]);

  useEffect(() => {
    if (publications.length === 0) {
      loadPublications();
    }

    return () => {
      unloadPublication();
    };
  }, [publications, loadPublications, unloadPublication]);

  return (
    <>
      <Navigation />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold mt-4'>Publications</h2>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='mt-8 flex flex-col'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-300'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Author
                        </th>
                        <th
                          style={{ minWidth: '2rem' }}
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Title
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Publication Year
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                        >
                          Document Type
                        </th>
                        <th
                          scope='col'
                          className='relative py-3.5 pl-3 pr-4 sm:pr-6'
                        >
                          <span className='sr-only'>Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {isLoading && !publicationsError ? (
                        <div>Loading...</div>
                      ) : (
                        <>
                          {currentTableData.map((publication) => (
                            <ListItem
                              key={publication.id}
                              id={publication.id}
                              author={`${publication.firstName} ${publication.lastName}`}
                              title={
                                publication.title
                                  ? publication.title
                                  : publication.sourceTitle
                              }
                              year={publication.year}
                              documentType={publication.documentType}
                            />
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                  <Pagination
                    currentPage={currentPage}
                    totalCount={publications.length}
                    pageSize={pageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// {publicationsError && <p>{publicationsError}</p>}
