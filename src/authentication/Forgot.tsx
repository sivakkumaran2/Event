import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function Forgot() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-1 xl:min-h-[200px] align-center">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to Forgot to your account
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
            
         <Button type="submit" className="w-full">
             Send
            </Button>

          </div>
             <div className="mt-4 text-center text-sm">
           Already have an account?{" "}
            <Link to="/Login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
     
     

      </div>
   
  )
}
export default Forgot