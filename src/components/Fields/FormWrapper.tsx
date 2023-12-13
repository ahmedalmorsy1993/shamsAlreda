import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
        {children}
      </form>
    </FormProvider>
  );
}
