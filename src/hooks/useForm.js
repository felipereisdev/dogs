import { useCallback, useState } from 'react';

// import { Container } from './styles';

function useForm() {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    ({ target }) => {
      setValue(target.value);
    },
    [setValue]
  );

  return {
    value,
    setValue,
    onChange,
  };
}

export default useForm;
