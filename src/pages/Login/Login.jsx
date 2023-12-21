import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const Login = () => {
  const {logIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log(from);
    const handleLogin = e =>{
        e.preventDefault();
        // console.log('Event triggered');
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        // =============== firebase login ===================
        logIn(email, password).then((result) => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: "User Login Successful.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          navigate(from, { replace: true });
        });

    }


  return (
    <div>
      <CssVarsProvider>
        <main>
          <Sheet
            sx={{
              width: 300,
              mx: "auto",
              my: 4, 
              py: 3, 
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "lg",
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body-sm">Sign in to continue.</Typography>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  
                  name="email"
                  type="email"
                  placeholder="tabib@email.com"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  
                  name="password"
                  type="password"
                  placeholder="password"
                />
              </FormControl>

              <Button type="submit" sx={{ mt: 1 }}>Log in</Button>
            </form>
            <Typography
              endDecorator={<Link className="text-blue-500 hover:underline" to="/register">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
        </main>
      </CssVarsProvider>
    </div>
  );
};

export default Login;
