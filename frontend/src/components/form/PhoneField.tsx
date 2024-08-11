import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CountryCode, PhoneInput } from "@/components/ui/phone-input";
import { Control, FieldValues, Path } from "react-hook-form";

type PhoneFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  label?: string;
  desc?: string;
  disabled?: boolean;
  countryCode?: CountryCode;
};

const PhoneField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  label,
  desc,
  disabled,
  countryCode,
}: PhoneFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <PhoneInput
              {...field}
              disabled={disabled}
              placeholder={placeholder}
              defaultCountry={countryCode}
            />
          </FormControl>

          {desc && <FormDescription className="ml-2">{desc}</FormDescription>}
          <FormMessage className="ml-2 text-destructive" />
        </FormItem>
      )}
    />
  );
};

export default PhoneField;
