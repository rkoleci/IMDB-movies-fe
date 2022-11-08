import { Select } from "@chakra-ui/react";

interface Option {
  key: string;
  value: string;
}

interface IProps {
  placeholder: string;
  options: Array<Option>;
  onChange: (e: any) => void;
}

export default function AppSelect({ placeholder, options, onChange }: IProps) {
  return (
    <Select placeholder={placeholder} onChange={onChange}>
      {options.map(({ key, value }: Option) => (
        <option value={key}>{value}</option>
      ))}
    </Select>
  );
}
