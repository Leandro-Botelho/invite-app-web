import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Input } from "../shadcn-components/input";
import { Label } from "../shadcn-components/label";

interface IAppInput<T extends FieldValues> {
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

const AppInput = <T extends FieldValues>({
  control,
  name,
  description,
  label,
  placeholder,
  type = "text",
  onChange: onChangeEvent,
}: IAppInput<T>) => {
  const preventOtherCharacters = (e: React.KeyboardEvent<HTMLInputElement>) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="input"
            className="flex flex-col text-white font-bold text-lg "
          >
            {label}
            <span className=" font-normal text-sm text-primary">
              {description}
            </span>
          </Label>
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
            onKeyDown={(e) => type === "number" && preventOtherCharacters(e)}
            placeholder={placeholder}
            type={type}
            className="mt-1 bg-black_detail border-border text-white focus-visible:border-neutral-400"
          />
          {error && (
            <span className="text-red-400 text-sm">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default AppInput;
