"use client";

import { CalendarIcon } from "lucide-react";
import { Control, FieldValues, Path } from "react-hook-form";
import AppInput from "../AppInput";

interface IAppSmartDateInput<T extends FieldValues> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<T, any>;
  name: Path<T>;
  label: string;
  description: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppSmartDateInput = <T extends FieldValues>({
  control,
  name,
  description,
  label,
  onChange,
}: IAppSmartDateInput<T>) => {
  return (
    <div>
      <CalendarIcon className="mr-2 h-4 w-4" />
      <AppInput
        control={control}
        name={name}
        description={description}
        label={label}
        onChange={onChange}
        maxLength={10}
      />
    </div>
  );
};

export default AppSmartDateInput;
