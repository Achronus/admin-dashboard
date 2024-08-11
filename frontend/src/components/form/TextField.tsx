import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

type TextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  label?: string;
  desc?: string;
  disabled?: boolean;
};

const TextField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  label,
  desc,
  disabled,
}: TextFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1 mb-4">
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input
              {...field}
              disabled={disabled}
              placeholder={placeholder}
              className="flex rounded bg-primary-400"
            />
          </FormControl>

          {desc && <FormDescription className="ml-2">{desc}</FormDescription>}
          <FormMessage className="ml-2 text-destructive" />
        </FormItem>
      )}
    />
  );
};

export default TextField;
