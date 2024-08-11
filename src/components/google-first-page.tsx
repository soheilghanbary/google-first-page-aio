import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CalendarIcon,
  HardDriveIcon,
  MailIcon,
  MapIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <header className="fixed top-0 right-0 left-0 z-10 flex items-center justify-between px-4 py-3 md:px-6">
        <Link to="#" className="flex items-center gap-2">
          <ChromeIcon className="h-8 w-8" />
          <span className="sr-only">Google</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            to="#"
            className="font-medium text-muted-foreground text-sm hover:text-foreground"
          >
            Gmail
          </Link>
          <Link
            to="#"
            className="font-medium text-muted-foreground text-sm hover:text-foreground"
          >
            Images
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <AppWindowIcon className="h-6 w-6" />
            <span className="sr-only">Apps</span>
          </Button>
          <Button variant="outline" className="rounded-full px-4 py-1 text-sm">
            Sign In
          </Button>
        </nav>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center gap-4">
          <img src="/google.png" alt="google logo" className="size-20" />
          <div className="relative w-full max-w-[584px]">
            <div className="-translate-y-1/2 absolute top-1/2 left-2.5 text-muted-foreground">
              <SearchIcon className="size-5" />
            </div>
            <Input
              type="search"
              placeholder="Search Google or type a URL"
              className="w-full rounded-full border border-input bg-background px-10 py-3 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <Button variant="outline">Google Search</Button>
            <Button variant="outline">I'm Feeling Lucky</Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Link
            to="#"
            className="flex flex-col items-center justify-center space-y-2 rounded-lg p-4 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <SearchIcon className="h-8 w-8 text-blue-500" />
            <span className="font-medium text-gray-800 text-sm dark:text-white">
              Search
            </span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center justify-center space-y-2 rounded-lg p-4 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <MapIcon className="h-8 w-8 text-green-500" />
            <span className="font-medium text-gray-800 text-sm dark:text-white">
              Maps
            </span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center justify-center space-y-2 rounded-lg p-4 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <MailIcon className="h-8 w-8 text-red-500" />
            <span className="font-medium text-gray-800 text-sm dark:text-white">
              Gmail
            </span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center justify-center space-y-2 rounded-lg p-4 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <HardDriveIcon className="h-8 w-8 text-yellow-500" />
            <span className="font-medium text-gray-800 text-sm dark:text-white">
              Drive
            </span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center justify-center space-y-2 rounded-lg p-4 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <YoutubeIcon className="h-8 w-8 text-red-500" />
            <span className="font-medium text-gray-800 text-sm dark:text-white">
              YouTube
            </span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center justify-center space-y-2 rounded-lg p-4 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <CalendarIcon className="h-8 w-8 text-blue-500" />
            <span className="font-medium text-gray-800 text-sm dark:text-white">
              Calendar
            </span>
          </Link>
        </div>
      </main>
      <footer className="fixed right-0 bottom-0 left-0 z-10 border-t bg-background px-4 py-3 text-muted-foreground text-xs md:px-6">
        <div className="container mx-auto flex justify-between">
          <div className="flex gap-4">
            <Link to="#" className="hover:underline hover:underline-offset-4">
              About
            </Link>
            <Link to="#" className="hover:underline hover:underline-offset-4">
              Advertising
            </Link>
            <Link to="#" className="hover:underline hover:underline-offset-4">
              Business
            </Link>
            <Link to="#" className="hover:underline hover:underline-offset-4">
              How Search works
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to="#" className="hover:underline hover:underline-offset-4">
              Privacy
            </Link>
            <Link to="#" className="hover:underline hover:underline-offset-4">
              Terms
            </Link>
            <Link to="#" className="hover:underline hover:underline-offset-4">
              Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppWindowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
