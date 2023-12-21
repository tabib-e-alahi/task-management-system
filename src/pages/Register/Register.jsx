import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";


const Register = () => {



    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photo,email,password);
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
              <Typography level="body-sm">Register Your Account.</Typography>
            </div>
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
              <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input
                  
                  name="name"
                  type="text"
                  placeholder="your full name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Profile Photo</FormLabel>
                <Input
                  
                  name="photo"
                  type="text"
                  placeholder="url here..."
                />
              </FormControl>
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

              <Button type="submit" sx={{ mt: 1 }}>Register</Button>
            </form>
            <Typography
              endDecorator={<Link className="text-blue-500 hover:underline" to="/login">Sign In</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Already have an account?
            </Typography>
          </Sheet>
        </main>
      </CssVarsProvider>
        </div>
    );
};

export default Register;