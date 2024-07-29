import { signUp } from '@/api';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Gender } from '@/enums';
import { SignUpData } from '@/models';
import { Route } from '@/routes/__root';
import { useMutation } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const genderOptions = Object.values(Gender);

const formSchema = z
  .object({
    firstName: z
      .string({ required_error: 'First Name is required.' })
      .min(2, 'Must be at least 2 characters.'),
    lastName: z
      .string({ required_error: 'Last Name is required.' })
      .min(2, 'Must be at least 2 characters.'),
    gender: z.string().min(1, 'Gender is required.'),
    email: z
      .string({ required_error: 'Email is required.' })
      .email('Invalid email.'),
    password: z.string().min(8, 'Must be at least 8 characters.'),
    confirmPassword: z.string().min(8, 'Must be at least 8 characters.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

type FormData = z.infer<typeof formSchema>;

const SignUp: FC = () => {
  const form = useForm<SignUpData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });
  const { handleSubmit, control } = form;
  const navigate = Route.useNavigate();

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      // Handle successful login, e.g., save token, redirect, etc.
      navigate({ to: '/signin' });
    },
    onError: (error) => {
      // Handle error
      console.error('Login failed:', error);
    },
  });

  const onSubmit: SubmitHandler<FormData> = (
    data: z.infer<typeof formSchema>
  ) => {
    mutation.mutate({ ...data });
  };

  return (
    <div className="h-screen flex items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <FormField
                    control={control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Max" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Robinson" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Gender</FormLabel>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent ref={field.ref}>
                            {genderOptions.map((g) => (
                              <SelectItem key={g} value={g.toUpperCase()}>
                                {g}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="max@xyz.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center">
                          <FormLabel className="text-gray-900">
                            Password
                          </FormLabel>
                          <Button
                            variant="link"
                            className="ml-auto inline-block text-sm underline"
                            tabIndex={-1}>
                            Forgot your password?
                          </Button>
                        </div>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">
                          Confirm Password
                        </FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{' '}
                <Button
                  variant="link"
                  className="underline"
                  type="button"
                  asChild>
                  <Link to="/signin">Sign in</Link>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
