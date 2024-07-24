// import { LoginResponse } from "@/models";
// import { Route } from "@/routes/__root";
// import { MutationFunction, useMutation } from "@tanstack/react-query";

// interface DataBody<T = any> {
//   data: T
// }
// type MutationFn = (data: DataBody) => Promise<any>;

// export const useHttpQuery = (mutationFn: any, redirect?: string) => {
//   const navigate = Route.useNavigate();
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       // Handle successful login, e.g., save token, redirect, etc.
//       if (redirect) {
//         navigate({ to: redirect });
//       }
//     },
//     onError: (error) => {
//       // Handle error
//       console.error('Login failed:', error);
//     },
//   });

//   return mutation;
// }
