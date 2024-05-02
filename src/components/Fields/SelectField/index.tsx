import { cn } from "@/utils/cn";
import Select from "react-tailwindcss-select";
import { ISelectProps } from "./types";
import { ErrorMessage } from '@hookform/error-message';

import CustomCheckBox from "@/components/Core/CustomCheckBox";
import useField from "../useField";

export default function SelectField({ name, label, placeholder, appendIcon, suffix, ...props }: ISelectProps) {
  const { register, errorStyle, hasError, t, errors, getValues, setValue, watch, trigger, } = useField(name);
  const labelName = typeof label === "string" ? t(`label.${label}`) : label


  const { ref, ...fields } = register(name)
  const handleChange = (value: any) => {
    setValue(name, value)
    trigger(name)
  };
  watch(name)

  return (
    <div className="relative select-field">
      <label
        className={cn(
          "start-[10px] px-[4px]  leading-[22.49px]   text-[14px] inline-block  text-third  font-medium mb-2",
          hasError && "text-error",
        )}
      >
        {labelName && labelName}
      </label>
      <div className={cn(
        `relative flex items-center py-2 px-2 outline-none border border-light-gray-200  rounded-[8px] min-h-[56px]  text-[14px] w-full`,
        errorStyle
      )}>
        {suffix && suffix()}
        <Select
          searchInputPlaceholder={t('label.search')}
          isClearable
          isSearchable
          placeholder={t(`label.${placeholder}`)}
          classNames={{
            searchIcon: "w-[20px] h-[20px] text-paragraph absolute ms-[10px]",
            searchBox: 'w-full h-[47px] rounded-[8px] mt-2 mb-[12px] bg-secondary text-white text-paragraph py-[8px] px-[16px] text-[14px] border  border-light-gray-200 ps-8 outline-0 ',
            menuButton() {
              return cn(
                `relative flex items-center w-full`,
              );
            },
            tagItemIconContainer: 'hover:bg-transparent cursor-pointer',
            tagItemIcon: 'fill-error text-[14px] h-[20px] w-[20px]  p-[2px] rounded-[50%] border-error border',
            tagItem() {
              return 'bg-secondary text-white p-[8px] rounded-[12px] !text-light-gray-4 !text-[16px]  capitalize font-semibold flex items-center ';
            },
            searchContainer: "flex items-center px-2 ",
            menu: 'bg-white border  border-t border-t-secondary mt-2   border-light-gray-200 p-[12px] rounded-[16px] shadow-sm absolute w-full bg-white z-50 min-h-[100px] '
          }}
          {...props}
          value={getValues(name)}
          primaryColor="blue"
          {...fields}
          onChange={handleChange}
          noOptionsMessage={t('label.no_results')}
          formatOptionLabel={data => (
            <div className={cn("text-third w-full text-[14px] h-[36px] list-none border-b  border-light-gray-200 flex items-center font-semibold capitalize cursor-pointer gap-3 ")}>
              <CustomCheckBox checked={data.isSelected} inputStyle={cn(!props.isMultiple && "rounded-[50%]")}>
                {data.label}
              </CustomCheckBox>
            </div>
          )}
        />
        {appendIcon && <div className="me-2">{appendIcon()}</div>}
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className={cn(`text-red-500 absolute bottom-[-25px]  text-[13px] transition-all duration-300
           max-h-[20px]
            }`)}>{message}</p>}
      />
    </div>
  )

}
