import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const onInputChange = <T>(
  e: ChangeEvent<HTMLInputElement>,
  setState: Dispatch<SetStateAction<T>>,
) => setState((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
