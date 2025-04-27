
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";
import FilterPill from "./FilterPill";
import { useState } from "react";

const PropertySearchPanel = () => {
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("2 Bed rooms");

  return (
    <div className="p-6 md:p-8 mt-12 w-full max-w-6xl mx-auto backdrop-blur-md rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl bg-zinc-300">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Find the best place
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Looking for</label>
          <Input type="text" placeholder="Enter type" className="w-full" />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Price</label>
          <div className="relative">
            <Input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full pr-10"
            />
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Locations</label>
          <div className="relative">
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full pr-10"
            />
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">
            Number of rooms
          </label>
          <div className="relative">
            <Input
              type="text"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              placeholder="Rooms"
              className="w-full pr-10"
            />
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-gray-700 font-medium">Filter:</span>
          <FilterPill label="City" />
          <FilterPill label="House" />
          <FilterPill label="Residential" />
          <FilterPill label="Apartment" />
          <div className="ml-auto">
            <Button className="bg-black hover:bg-black/80 text-white rounded-full px-8">
              <Search size={18} className="mr-2" />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchPanel;
