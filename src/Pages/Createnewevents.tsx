import { Link } from "react-router-dom"
import {
  Search,
 Moon, Sun
} from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
  } from "@/components/ui/select"
 
import { Label } from "@/components/ui/label"
import { useTheme } from "@/components/ui/Themeprovider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader,CardFooter} from "@/components/ui/card";
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import Header from "@/includes/Header"

export function Createnewevents () {
  const { setTheme } = useTheme()
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
       <Header/>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
         
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/events">Events</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/newevents">Create New Events</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Create New Events</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </header>
        <div  className="text-left p-6">
     <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
Create New Events
</h2>
<p className="leading-7 [&:not(:first-child)]:mt-6 p-0">
Create Events for you,
</p>
</div>
<Card className="w-full md:w-[300px] lg:w-[400px] xl:w-[1250px] mx-auto">
<CardHeader>
  
</CardHeader>
<CardContent>
  <form>
 
  <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-2">
<div className="lg:col-span-2 xl:col-span-2 grid grid-cols-2 gap-4 text-left">
  <div className="flex flex-col space-y-1.5">
    <Label htmlFor="language">Language</Label>
    <Select>
      <SelectTrigger id="language">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Common Languages</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="de">German</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asian Languages</SelectLabel>
          <SelectItem value="zh">Chinese</SelectItem>
          <SelectItem value="ja">Japanese</SelectItem>
          <SelectItem value="ko">Korean</SelectItem>
          <SelectItem value="hi">Hindi</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>European Languages</SelectLabel>
          <SelectItem value="it">Italian</SelectItem>
          <SelectItem value="pt">Portuguese</SelectItem>
          <SelectItem value="ru">Russian</SelectItem>
          <SelectItem value="nl">Dutch</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
  <div className="flex flex-col space-y-1.5">
  <Label htmlFor="language">Event Country</Label>
    <Select>
      <SelectTrigger id="language">
        <SelectValue placeholder="Choose An Country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Event Country</SelectLabel>
          <SelectItem value="en">USA</SelectItem>
          <SelectItem value="es">Spain</SelectItem>
          <SelectItem value="fr">France</SelectItem>
          <SelectItem value="de">German</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Event Country </SelectLabel>
          <SelectItem value="zh">China</SelectItem>
          <SelectItem value="ja">Japan</SelectItem>
          <SelectItem value="ko">Korea</SelectItem>
          <SelectItem value="hi">India</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>European Languages</SelectLabel>
          <SelectItem value="it">London</SelectItem>
          <SelectItem value="pt">South Afirca</SelectItem>
          <SelectItem value="ru">Russia</SelectItem>
          <SelectItem value="nl">England</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  <div className="flex flex-col space-y-1.5">
    <Label htmlFor="name">Event Name</Label>
    <Input id="name" placeholder="Event Name" />
  </div>
  <div className="flex flex-col space-y-1.5">
  <Label htmlFor="language">Event Types</Label>
    <Select>
      <SelectTrigger id="language">
        <SelectValue placeholder="Choose An Event" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Event Types</SelectLabel>
          <SelectItem value="en">Conference</SelectItem>
          <SelectItem value="es">Workshop</SelectItem>
          <SelectItem value="fr">Seminar</SelectItem>
          <SelectItem value="de">Concert</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  <div className="flex flex-col space-y-1.5">
   
  </div>
  <div className="flex flex-col space-y-1.5">
    </div>
  <div className="flex flex-col space-y-1.5">
    </div>
  <div className="grid w-full gap-1.5 col-span-2">
   </div>
 
</div>

</div>
  </form>
</CardContent>
<CardFooter className="flex justify-between">
<Link to="/events"><Button variant="outline">Cancel</Button></Link>
<Button>Create</Button> 
</CardFooter>
</Card>
 
          </div>
    </div>
  )
}
export default Createnewevents