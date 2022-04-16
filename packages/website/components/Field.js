import { TextInput, FormControl } from '@primer/react';

export default function Field({ label, as: Component = TextInput, ...rest }) {
  return (
    <FormControl sx={{ mb: 3 }}>
      <FormControl.Label>
        {label}
      </FormControl.Label>
      <Component {...rest} />
    </FormControl>
  );
}
