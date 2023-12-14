import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';

interface Props<T> {
  schema: any;
  onSubmit: (data: T) => void;
  defaultValues: T;
}

export function FormWrapper<T>({
  schema,
  onSubmit,
  children,
  defaultValues,
}: React.PropsWithChildren<Props<T>>) {
  type FormData = yup.InferType<typeof schema>;
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { ...defaultValues },
    shouldFocusError: false,
    mode: 'all',
  });


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} >
        {/* Pass errors as a prop to children */}
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement<any>(child, { errors: methods.formState.errors })
            : child
        )}
      </form>
    </FormProvider>
  );
}
