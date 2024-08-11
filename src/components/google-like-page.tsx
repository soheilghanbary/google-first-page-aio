import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const GoogleLikePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="mb-8 font-bold text-8xl">
        <span className="text-blue-500">G</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-500">g</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
      </div>
      <div className="mb-8 flex w-full max-w-lg">
        <Input
          type="text"
          placeholder="Search Google or type a URL"
          className="flex-grow rounded-l-full border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button className="rounded-r-full">
          <SearchIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button variant="outline">Google Search</Button>
        <Button variant="outline">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default GoogleLikePage;
