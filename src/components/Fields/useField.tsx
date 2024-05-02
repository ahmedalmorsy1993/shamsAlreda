import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function useField(name: string) {
  const { register, formState, getFieldState, ...args } = useFormContext();
  const { t } = useTranslation();
  const { errors } = formState
  const hasError: any = getFieldState(name).error
  const errorStyle: string = `${hasError && "border-red-500"}`;
  return {
    errorStyle,
    register,
    t,
    hasError,
    errors,
    ...args
  }
}
