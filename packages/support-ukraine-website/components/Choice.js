import { Select } from '@primer/react';

export default function Choice({ options = [], ...rest }) {
  return (
    <Select id="basic" {...rest}>
      {options.map(({ value, label }) => (
        <Select.Option key={value} value={value}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
}
