export default function getValidationErrors(err) {
  const validationErrors = {
    errors: {},
  };

  err.inner.forEach((error) => {
    validationErrors.errors[error.path] = error.message;
  });

  return validationErrors;
}
