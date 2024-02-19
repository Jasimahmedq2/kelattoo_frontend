import { Api } from "../api/api";

const AuthApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    userRequest: builder.mutation({
      query: (data) => ({
        url: `/auth/request/`,
        method: "POST",
        headers: {
          authorization: `Bearer ${data?.token}`,
        },
        body: data.info,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useUserRequestMutation } = AuthApi;
