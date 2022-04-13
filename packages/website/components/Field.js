import { TextInput,  FormControl } from '@primer/react';

export default function Field({ label, ...rest }) {
  return (
    <FormControl sx={{ mb: 3 }}>
      <FormControl.Label>
        {label}
      </FormControl.Label>
      <TextInput {...rest}/>
    </FormControl>
  );
}
