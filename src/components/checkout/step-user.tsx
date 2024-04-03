"use client"

import { useCheckoutStore } from '@/stores/checkout-store';
import { chekoutSteps } from '@/types/checkout-steps';
import { Dispatch, SetStateAction } from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Props = {
  setStep: Dispatch<SetStateAction<chekoutSteps>>;
}
const formSchema = z.object({
  name: z.string().min(2, 'Preencha seu nome')
});

export const StepUser = ({setStep}: Props) => {
  const {name, setName} = useCheckoutStore(state => state);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);
    setStep('address');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl>
                        <Input placeholder='Qual seu nome?' {...field} autoFocus />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <Button type='submit' variant="outline">Próximo</Button>
      </form>
    </Form>
  )
}