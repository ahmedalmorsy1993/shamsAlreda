import { useForm, FormProvider, FieldErrors } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { createContext, useContext } from 'react';
import { observer } from '@/utils/observer';

interface Props<T> {
  schema: any;
  onSubmit: (data: T) => void;
  defaultValues: T;
}
interface IFormContext {
  errors: FieldErrors
}

export const FormContext = createContext<IFormContext | undefined>(undefined)

export const useFormWrapperContext = () => {
  const context = useContext(FormContext)
  if (!context?.errors) throw new Error('pls provide context')
  return { errors: context.errors }
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

  observer.subscribe('reset', methods.reset)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} >
        <FormContext.Provider value={{ errors: methods.formState.errors }}>
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement<any>(child)
              : child
          )}
        </FormContext.Provider>

      </form>
    </FormProvider>
  );
}
