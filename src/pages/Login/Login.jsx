import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        console.log('Event triggered');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

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
