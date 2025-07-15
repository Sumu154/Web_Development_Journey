import type { User } from '@/types/user';
import { baseApi } from '../../api/baseApi';


export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({ url: '/users', method: 'GET' }),
    }),
    postUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
    }),
  }),
  overrideExisting: false, // usually false
});

export const {
  useGetUsersQuery,
  usePostUserMutation,
} = userApi;
