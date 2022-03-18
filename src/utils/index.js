export const submitSignUpHandler = (e, setUser, username, email, password) => {
    e.preventDefault();
    fetchRequestSignUp(setUser, username, email, password);
  };
  
  export const submitLogInHandler = (e, setUser, username, password) => {
    e.preventDefault();
    console.log(username, password, "submit log in handler");
    fetchRequestLogIn(setUser, username, password);
  };