import { useState } from 'react'
import './task3.css'

const Task3 = () => {
    const [error, setError] = useState({
        isShortError: false,
        isDuplicateError:false,
    });
    const defaultFormValues = {
        name: "",
    };
    const [formValues, setFormValues] = useState(defaultFormValues);
    const [names, setNames] = useState<string[]>([]);
    const getError = (name: string) => {
        const error = ({
            isShortError: (name.length < 3 && name !== ""),
            isDuplicateError: names.some(existingName => existingName === name),
        });
        return error;
    };

    const onChange = (name: string) => {
        setFormValues({...formValues, name: name});
        if (error.isShortError || error.isDuplicateError) {
            // Only solve old errors don't warn of new errors before user makes them.
            const newError = getError(name);
            setError({
                isShortError: error.isShortError && newError.isShortError,
                isDuplicateError: error.isDuplicateError && newError.isDuplicateError,
            });
        };
    };

    const handleSubmit = () => {
        const error = getError(formValues.name);
        setError(error)
        if (!error.isShortError && !error.isDuplicateError) {
            setNames([...names, formValues.name]);
            setFormValues(defaultFormValues);
        };
    };

    const handleDelete = (nameToRemove: string) => {
        if (nameToRemove === formValues.name && error.isDuplicateError) {
            setError({isShortError: false, isDuplicateError: false});
        };
        setNames(names.filter((name) => name !== nameToRemove));
    };

    return (
        <div className="task3">
            <form
                onSubmit={(evt) => {
                    evt.preventDefault();
                    handleSubmit();
                }}>
                <div className="form-field">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    value={formValues.name}
                    onChange={(evt) => onChange(evt.currentTarget.value)}
                />
                {error.isDuplicateError && <span>New name cannot be the same as any name already on the list below.</span>}
                {error.isShortError && <span>New name should be at least 3 characters long.</span>}
                </div>
                <button>Submit</button>
            </form>
            <section className="names-list">
                {names.map((name) => (
                <div key={name}>
                    <div>{name}</div>
                    <button onClick={() => handleDelete(name)}>X</button>
                </div>
                ))}
            </section>
        </div>
    );
};
export default Task3;
