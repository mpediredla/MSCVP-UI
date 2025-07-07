"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarIcon, SearchIcon, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ColdStorageDetails from "./cold-storage-details.tsx/pages";

const mockDocuments = Array.from({ length: 15 }).map((_, index) => ({
  id: `APPT01243`,
  docNum: `LC12345`,
  warehouse: "Walmart",
  partner: [
    "John Smith",
    "Adam Cruise",
    "Samuel James",
    "Moses Samuel",
    "N/A",
    "Sarah Johnson",
    "Paul Smith",
    "David Beckham",
  ][index % 8],
  datetime: "06/20/2025 08:00AM CST",
  transaction: "123",
}));

export default function ColdStorageSearch() {
  const [documents, setDocuments] = useState(mockDocuments);
   const [showFilter, setShowFilter] = useState(true);
   const [showStorageDetails, setShowStorageDetails] = useState(false);
   const router = useRouter();
     const handlecoldStorageDetails = () => {
    //router.push('/cold-storage-details');
    setShowStorageDetails(true);
    setShowFilter(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Cold Storage - Document Repository</h2>
        <div className="flex gap-2">
          {showFilter && (
            <div className="w-[30%]">
              <Card className="h-full flex flex-col">
                <CardContent className="p-4 overflow-y-auto flex-1">
                  <div className="flex justify-between items-center pb-4">
                    <h3 className="font-medium">Search</h3>
                    <div className="text-sm text-blue-500 cursor-pointer">Clear Search</div>
                  </div>
                  <div className="space-y-3">
                    <Select>
                      <Label>Favorite Searches</Label>
                      <SelectTrigger>
                        <SelectValue placeholder="Select From Favorites" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Favorite 1</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="space-x-4">
                      <Label className="mr-2">Database</Label>
                      <input type="radio" name="db" defaultChecked /> Live
                      <input type="radio" name="db" className="ml-4" /> Archive
                    </div>

                    <div>
                      <Label>Date Range</Label>
                      <div className="flex items-center gap-2">
                        <Input placeholder="DD/MM/YYYY - DD/MM/YYYY" />
                        <CalendarIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <Select>
                      <Label>Document Type</Label>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Document Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="type1">Type 1</SelectItem>
                      </SelectContent>
                    </Select>

                    <div>
                      <Label>Document Number</Label>
                      <Input placeholder="Enter Document Number" />
                    </div>

                    <Select>
                      <Label>Trading Partner</Label>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Trading Partner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partner1">Partner 1</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <Label>Warehouse</Label>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Warehouse" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="warehouse1">Warehouse 1</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <Label>Status</Label>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="grid grid-cols-2 gap-2 items-end">
                      <Select>
                        <Label>Select Attribute</Label>
                        <SelectTrigger>
                          <SelectValue placeholder="Attribute" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="attr1">Attribute 1</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Value" />
                      <Button variant="outline">+</Button>
                    </div>
                  </div>
                </CardContent>
                <div className="p-4 border-t flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button className="bg-blue-600 text-white">Search</Button>
                </div>
              </Card>
            </div>
          )}


          <div className={showFilter ? "w-[70%]" : "w-full"}>
            <Card className="flex flex-col">
              <CardContent className="flex-1 overflow-auto">
                {documents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <SearchIcon className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-gray-500 text-lg">Search to view</p>
                    <p className="text-gray-500 text-lg font-medium">Cold Storage Documents</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center pb-4">
                      <h3 className="font-medium ">Documents ({documents.length})</h3>
                      <div className="text-sm text-blue-500 cursor-pointer" onClick={() => setShowFilter(!showFilter)}>  {!showFilter ? "Expand Search" : "Collapse Search"}</div>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b text-gray-500 text-left">
                          <th className="p-2">Instance ID</th>
                          <th>Document #</th>
                          <th>Warehouse</th>
                          <th>Partner</th>
                          <th>Date & Time</th>
                          <th>Transaction</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {documents.map((doc, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="p-2 text-blue-600 cursor-pointer" onClick={handlecoldStorageDetails}>{doc.id}</td>
                            <td>{doc.docNum}</td>
                            <td>{doc.warehouse}</td>
                            <td>{doc.partner}</td>
                            <td>{doc.datetime}</td>
                            <td>{doc.transaction}</td>
                            <td><MoreVertical className="w-4 h-4 cursor-pointer" /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </CardContent>
              <div className="flex justify-center py-2 gap-4 border-t">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
          <div>
            { (showStorageDetails && !showFilter) &&<ColdStorageDetails  />}
          </div>
        </div>
      </main>
    </div>
  );
}
