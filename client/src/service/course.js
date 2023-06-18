import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getCourse: builder.query({
            query: () => `course/`
        }),
        getCourseById: builder.query({
            query: (id) => `course/${id}`
        }),
        createCourse: builder.mutation({
            query: (data) => ({
                url: `course/`,
                method: 'POST',
                body: data
            }),
        }),
        updateCourse: builder.mutation({
            query: (id, data) => ({
                url: `course/${id}`,
                method: 'PUT',
                body: data
            }),
        }),
        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `course/${id}`,
                method: 'DELETE',
            }),
        }),
    })
})

export const { useGetCourseQuery, useGetCourseByIdQuery, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } = courseApi