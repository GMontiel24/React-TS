import { useState } from 'react';

export const useForm = <T extends Object>(initialForm: T) => {

    const [formValues, setFormValues] = useState(initialForm);

    const onChange = (value: string, campo: keyof T) => {
        setFormValues(prevState => ({
            ...prevState,
            [campo]: value
        }));
    }

    return {
        ...formValues,
        formValues,
        onChange
    }
}
