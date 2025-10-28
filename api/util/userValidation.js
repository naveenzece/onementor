function validateFields(validations) {
  for (let validation of validations) {
    if (validation !== true) {
      return validation;
    }
  }
  return true;
}

function validateName(value, minLength, maxLength) {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!value) return "Name is required.";
  if (value.length < minLength)
    return `Name Field Must be at least ${minLength} characters long.`;
  if (value.length > maxLength) return `Name cannot exceed ${maxLength} characters.`;
  if (!nameRegex.test(value)) return "Only letters and spaces are allowed in name";
  return true;
}

function validateEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value || value.length < 0) return "Email is required.";
  if (!emailRegex.test(value)) return "Please enter a valid email address.";
  return true;
}

function validateMobileNumber(value) {
  const mobileRegex = /^[0-9]*$/;
  if (!value) return "Mobile number is required.";
  if (!mobileRegex.test(value))
    return "Mobile number must contain only digits.";
  if (value.length < 10) return "Mobile number must be at least 10 digits.";
  if (value.length > 10) return "Mobile number cannot exceed 10 digits.";
  return true;
}

function validateRoles (value) {
    const roles = [
        "user",
        "admin",
        "coach"
      ];

    if(!value) {
      return "Role is required"
    }
    
    const isTrue = roles.includes(value)
    if(!isTrue) {
        return "This role not allowed"
    }
    return true
}

module.exports = {
  validateFields,
  validateEmail,
  validateMobileNumber,
  validateName,
  validateRoles
};
