import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  region: z.string().min(1, "Region is required"),
  server: z.string().min(1, "Server is required"),
  fraction: z.string().min(1, "Fraction is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading, currentUser }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  // const { user } = useAuth0();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className='space-y-4 bg-neutral-300 rounded-lg p-6 md:p-10'
      >
        <div>
          <h2 className='text-2xl font-bold'>My Profile</h2>
          <FormDescription>
            View and change your profile info here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className='bg-white' />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className='bg-white' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex flex-col md:flex-row gap-4'>
          <FormField
            control={form.control}
            name='region'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel>Region</FormLabel>
                <FormControl>
                  <Input {...field} className='bg-white' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='server'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel>Server</FormLabel>
                <FormControl>
                  <Input {...field} className='bg-white' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='fraction'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel>Fraction</FormLabel>
                <FormControl>
                  <Input {...field} className='bg-white' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type='submit' className='bg-red-500'>
            Sumbit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
