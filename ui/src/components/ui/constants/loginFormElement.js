export const loginFormElements = [
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email Address",
    placeHolder: "Enter your email",
    validate: (value) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(value) ? true : "Invalid email address";
    },
  },
];
