import React, { useState, useEffect } from "react";
import * as yup from "yup";

interface TaskInputProps {
  onAdd: (text: string) => void;
}

const schema = yup.object({
  text: yup
    .string()
    .trim()
    .required("Note is required")
    .min(5, "Note must be at least 5 characters")
    .max(1000, "Note must be less than 1000 characters"),
});

const TaskInput: React.FC<TaskInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const validate = async (value: string) => {
    try {
      await schema.validate({ text: value });
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (touched) validate(input);
  }, [input]);

  const handleSubmit = () => {
    validate(input).then(() => {
      if (!error && input.trim()) {
        onAdd(input.trim());
        setInput("");
        setTouched(false);
      }
    });
  };

  const handleBlur = () => {
    setTouched(true);
    validate(input);
  };

  return (
    <div className="space-x-1 py-4">
      <input
        className={`border px-4 py-2 mr-2 rounded-2xl w-sm md:w-md ${
          error ? "border-red-500" : "border-gray-300"
        } bg-gray-200 shadow-indigo-200 shadow focus:outline-none focus:border-blue-500 focus:shadow-indigo-100`}
        type="text"
        placeholder="New Note"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={handleBlur}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-2 md:mt-0"
        disabled={!!error}
      >
        Add
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TaskInput;
