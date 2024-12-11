import { PropsWithChildren, createContext, useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldErrors, UseFormReturn, useForm } from "react-hook-form";
import { createEventSchema, ICreateEvent } from "../schema/CreateEventSchema";

interface IFormCreateEvent {
  errors: FieldErrors<ICreateEvent>;
  control: Control<ICreateEvent>;
  handleSubmit: UseFormReturn<ICreateEvent>[`handleSubmit`];
  setValue: UseFormReturn<ICreateEvent>[`setValue`];
  watch: UseFormReturn<ICreateEvent>[`watch`];
  getValues: UseFormReturn<ICreateEvent>[`getValues`];
}

const FormCreateEventContext = createContext<IFormCreateEvent | null>(null);

export const useFormCreateEvent = () => {
  const context = useContext(FormCreateEventContext);

  if (!context) {
    throw new Error(
      "useFormCreateEvent must be used within a FormCreateEventProvider"
    );
  }
  return context;
};

const FormCreateEventProvider = ({ children }: PropsWithChildren) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    getValues,
  } = useForm<ICreateEvent>({
    resolver: zodResolver(createEventSchema),
  });

  // console.log(errors);

  return (
    <FormCreateEventContext.Provider
      value={{ control, errors, handleSubmit, setValue, watch, getValues }}
    >
      {children}
    </FormCreateEventContext.Provider>
  );
};

export default FormCreateEventProvider;
