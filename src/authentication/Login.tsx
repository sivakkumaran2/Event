import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function Login() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-1 xl:min-h-[200px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            
      <Link to='/dashboard'>   <Button type="submit" className="w-full">
              Login
            </Button>
            </Link>
            <Button variant="outline" className="w-full ">
              Login with Google
            </Button>
          </div>
             <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    
    </div>
  )
}
export default Login