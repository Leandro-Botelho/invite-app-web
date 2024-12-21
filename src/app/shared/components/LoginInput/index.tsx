import { Controller, FieldValues } from "react-hook-form";
import { IAppInput } from "../AppInput";
import { Input } from "../shadcn-components/input";

const LoginInput = <T extends FieldValues>({
  control,
  name,
  type,
  placeholder,
  icon,
  onChange: onChangeEvent,
}: Omit<IAppInput<T>, "label" | "description">) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <div className="flex gap-2 items-center w-full">
            <Input
              id="input"
              value={value ?? ""}
              onChange={
                onChangeEvent
                  ? (e) => {
                      onChange(e);
                      onChangeEvent(e);
                    }
                  : onChange
              }
              placeholder={placeholder}
              type={type}
              className="mt-1  bg-[#f7f7f7] border-border  focus-visible:border-neutral-400 text-black"
            />
            {icon}
          </div>
          {error && (
            <span className="text-red-400 text-sm">{error.message}</span>
          )}
        </>
      )}
    />
  );
};

export default LoginInput;
