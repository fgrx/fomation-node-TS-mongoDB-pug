import { hikeValidationSchema } from "../validationSchema/hikeValidation";

const hikeFormValidation = (
  form: any
): { isFormValid: boolean; formErrors: string[] } => {
  const { error } = hikeValidationSchema.validate(form);

  if (error) {
    const errors = error.details.map((element) => element.message);
    return { isFormValid: false, formErrors: errors };
  }

  return { isFormValid: true, formErrors: [] };
};

export { hikeFormValidation };
