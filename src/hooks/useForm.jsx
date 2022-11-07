import { useState } from 'react';

export default function useForm() {
  const [form, setForm] = useState({});
  const updateValue = (name, value) => {
    setForm({ ...form, [name]: value });
  };
  return { form, updateValue };
}
