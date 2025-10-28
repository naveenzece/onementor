export function validateName(value, minLength, maxLength) {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!value) return "Name is required.";
  if (value.length < minLength)
    return `Must be at least ${minLength} characters long.`;
  if (value.length > maxLength) return `Cannot exceed ${maxLength} characters.`;
  if (!nameRegex.test(value)) return "Only letters and spaces are allowed.";
  return true;
}

export function validateEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) return "Email is required.";
  if (!emailRegex.test(value)) return "Please enter a valid email address.";
  return true;
}

export function validateMobileNumber(value) {
  const mobileRegex = /^[0-9]*$/;
  if (!value) return "Mobile number is required.";
  if (!mobileRegex.test(value))
    return "Mobile number must contain only digits.";
  if (value.length < 10) return "Mobile number must be at least 10 digits.";
  if (value.length > 15) return "Mobile number cannot exceed 15 digits.";
  return true;
}

export function validateSuperadminPassword(value) {
  if (!value) return "Enter Password";
  return true;
}

export function validateSuperadminEmail(value) {
  if (!value) return "Enter Email";
  return true;
}

export function validateImage (value) {
  if(!value) return "Upload Image"
  return true
}

export function validateAge (value) {
  if(!value) return "Enter age"
  if(value < 21 || value > 60) return 'Enter valid age'
  return true
}

export function validateGender (value) {
  const gender = ['Male', 'Female', 'Others']
  if(!value) return "Gender requires"
  if(!gender.includes(value)) return "Enter correct gender"
  return true
}
