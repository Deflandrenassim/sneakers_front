import { useState } from 'react';

export default function useForm() {
  const [form, setForm] = useState({});
  const updateValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  return { form, updateValue };
}
