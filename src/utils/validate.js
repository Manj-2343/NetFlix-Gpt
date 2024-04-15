export const checkValidData = (email, password, name = null) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  //   john.doe@example.com
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  // Password123@
  const nameValid = /^[a-zA-Z\s]{2,50}$/;

  if (!isEmailValid) return "Email id is not valid";
  if (!isPasswordValid) return "Password id is not valid";
  if (name && !nameValid)
    return "Name must contain only letters and spaces, and be between 2 and 50 characters long.";
  return null;
};
