import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";

import login from "../Images/login.svg";
function App() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      <div className="left-div">
        <img src={login} alt="login" />
      </div>
      <div className="right-div">
        <h1>Login</h1>
        <form action="">
          <div className="login-id">
            <label htmlFor="">Login ID</label>
            <FormControl
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput id="outlined-adornment-password" type="text" />
            </FormControl>
          </div>
          <div className="password">
            <label htmlFor="">Password</label>
            <FormControl
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="change-pass">
            <div>
              <input type="checkbox" name="" id="rem" />
              &nbsp;
              <label htmlFor="rem">Remember me</label>
            </div>
            <div>
              <a href="#">Change Password</a>
            </div>
          </div>
          <div className="term">
            <div>
              <input type="checkbox" name="" id="term" />
              &nbsp;
              <label htmlFor="term">
                Agree to <a href="#">Terms & Conditions</a>
              </label>
            </div>
          </div>
          <div className="login-btn">
            <button>Login</button>
          </div>
          <div className="register">
            <span>Don't have a account?</span> <a href="#"> Register here</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
