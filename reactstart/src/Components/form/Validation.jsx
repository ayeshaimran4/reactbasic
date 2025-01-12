export const validateForm = (username, password) => {
    let newErrors = { username: '', password: '' };
    let isValid = true;
  
    // Username validation
    if (username.length < 5) {
      newErrors.username = 'Username must be at least 5 characters.';
      isValid = false;
    } else if (username.length > 15) {
      newErrors.username = 'Username must not exceed 15 characters.';
      isValid = false;
    }
  
    // Password validation
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
      isValid = false;
    } else if (password.length > 20) {
      newErrors.password = 'Password must not exceed 20 characters.';
      isValid = false;
    }
  
    return { isValid, newErrors };
  };
  