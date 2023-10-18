import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pause } from '../../tools/pause';
import { faker } from '@faker-js/faker';

export const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      await pause(200);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => {
            return { type: 'Photos', id: photo.id };
          });
          tags.push({ type: 'AlbumsPhotos', id: album.id });
        },
        query: (album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id,
            },
            method: 'GET',
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: 'AlbumsPhotos', id: album.id }];
        },
        query: (album) => {
          return {
            url: '/photos',
            method: 'POST',
            body: {
              title: faker.commerce.productMaterial(),
              url: faker.image.urlLoremFlickr({ category: 'abstract' }),
              albumId: album.id,
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: 'Photos', id: photo.id }];
        },
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: 'DELTE',
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
