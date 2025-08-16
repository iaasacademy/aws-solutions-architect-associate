"use client";

import React, { useState } from "react";

interface FormInputProps {
  label: string;
  subLabel?: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  subLabel,
  id,
  type = "text",
  value,
  onChange,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const isLabelFloated = isFocused || hasValue;

  return (
    <div className="relative w-full">
      <div
        className={`relative border rounded-lg h-14 transition-colors duration-300 ${
          error ? "border-red-500" : "border-[color:var(--gold-dark)]"
        }`}
      >
        <label
          htmlFor={id}
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            isLabelFloated
              ? `top-2 text-xs ${error ? "text-red-500" : "text-gray-500"}`
              : `top-1/2 -translate-y-1/2 text-sm ${
                  error ? "text-red-500" : "text-gray-500"
                }`
          }`}
        >
          {label}{" "}
          {subLabel && <span className="text-gray-400">{subLabel}</span>}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full h-full bg-transparent text-sm text-[color:var(--brown-dark)] font-normal focus:outline-none px-4 ${
            isLabelFloated ? "pt-4" : ""
          }`}
        />
        {error && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <svg
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="var(--error)" />
              <path
                d="M9.37256 5.23242H10.6274V12.1152H9.37256V5.23242Z"
                fill="white"
              />
              <path
                d="M9.37256 13.3691H10.6274V14.624H9.37256V13.3691Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
    </div>
  );
};

interface FormTextareaProps {
  label: string;
  subLabel?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  subLabel,
  id,
  value,
  onChange,
  error,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const isLabelFloated = isFocused || hasValue;

  return (
    <div className="relative w-full">
      <div
        className={`relative border rounded-lg h-40 transition-colors duration-300 ${
          error ? "border-red-500" : "border-[color:var(--gold)]"
        }`}
      >
        <label
          htmlFor={id}
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            isLabelFloated
              ? `top-3 text-xs ${error ? "text-red-500" : "text-gray-500"}`
              : `top-5 text-sm ${error ? "text-red-500" : "text-gray-500"}`
          }`}
        >
          {label}{" "}
          {subLabel && <span className="text-gray-400">{subLabel}</span>}
        </label>
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isLabelFloated ? placeholder : ""}
          className="w-full h-full bg-transparent text-sm text-[color:var(--brown-dark)] font-normal focus:outline-none resize-none pt-8 px-4"
        />
        {error && (
          <div className="absolute top-4 right-4">
            <svg
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="var(--error)" />
              <path
                d="M9.37256 5.23242H10.6274V12.1152H9.37256V5.23242Z"
                fill="white"
              />
              <path
                d="M9.37256 13.3691H10.6274V14.624H9.37256V13.3691Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
    </div>
  );
};

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    recipe: "",
    ingredients: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name cannot be blank.";
    if (!formData.email) {
      newErrors.email = "Email cannot be blank.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.recipe) newErrors.recipe = "Recipe cannot be blank.";
    if (!formData.ingredients)
      newErrors.ingredients = "Ingredients cannot be blank.";
    if (!formData.description)
      newErrors.description = "Description cannot be blank.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const payload = {
        name: formData.name,
        email: formData.email,
        recipe_name: formData.recipe,
        ingredients: formData.ingredients,
        description_main: formData.description,
        
    };

    try {
        const res = await fetch("/api/add_recipe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
        });

        if (res.ok) {
        alert("Recipe submitted successfully!");
        setFormData({
            name: "",
            email: "",
            recipe: "",
            ingredients: "",
            description: "",
        });
        window.location.reload();
        } else {
        alert("Failed to submit recipe.");
        }
    } catch (error) {
        console.error("Submit error:", error);
        alert("Something went wrong.");
    }
    };

  return (
    <div
      className="w-full max-w-6xl mx-auto py-12 px-8 bg-white"
      style={{ fontFamily: "var(--font-montserrat-alternates)" }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold" style={{ color: "var(--brown)" }}>
          Add your Recipe
        </h2>
        <p
          className="mt-3 text-base font-semibold"
          style={{ color: "var(--brown-dark)" }}
        >
          Submit your favorite recipe, and it might be listed on our website!
          <br />
          Winner gets featured on our blog!
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormInput
            label="Your Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormInput
            label="Your Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormInput
            label="Your Recipe"
            id="recipe"
            value={formData.recipe}
            onChange={handleChange}
            error={errors.recipe}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormTextarea
            label="Recipe Ingredients"
            id="ingredients"
            subLabel="(comma-separated)"
            value={formData.ingredients}
            onChange={handleChange}
            error={errors.ingredients}
            placeholder="E.g. Flour, Sugar, Butter"
          />
          <FormTextarea
            label="Recipe Description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            error={errors.description}
            placeholder="Describe how to make the recipe"
          />
        </div>
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="px-12 py-3 text-base font-bold rounded-lg"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--brown-dark)",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
