export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Please fill in this field",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "You have exceeded the limit",
});

export const onlyNumbers = (val) => ({
  hasPassed: /^[0-9]*$/.test(val),
  message: "Please enter numbers",
});

export const nameValidation = (val) => ({
  hasPassed: /^[a-zA-Z]+$/i.test(val),
  message: "Invalid name. a-z A-Z",
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: "Invalid email",
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message: "Password must contain one number and one character",
});
