"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarIcon, SearchIcon, ChevronLeft, ChevronRight, MoreVertical, Heart, MinusCircle, PlusCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ColdStorageDetails from "./cold-storage-details.tsx/pages";
import { DashboardHeader } from "@/components/dashboard-header";
import { Calendar } from "@/components/ui/calendar";

const mockDocuments = [
  {
    id: "APPT0001",
    docNum: "LC10001",
    purchaseOrder: "485739",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "846",
    warehouse: "Walmart",
    partner: "John Smith",
    datetime: "06/20/2025 08:00AM CST",
    sender: {
      instantId: "APPT0001",
      transactionType: "846",
    },
    receiver: {
      id: "LWASTONSAP",
      name: "LAMBET_SA",
      isa: "00000115",
      gs: "115",
      st: "0889",
      isaDate: "234008",
      isaTime: "0716",
      status: "Success",
    },
  },
  {
    id: "APPT0002",
    docNum: "LC10002",
    purchaseOrder: "485740",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "850",
    warehouse: "Costco",
    partner: "Sarah Johnson",
    datetime: "06/20/2025 09:15AM CST",
    sender: {
      instantId: "APPT0002",
      transactionType: "850",
    },
    receiver: {
      id: "PART002",
      name: "GLOBAL_SA",
      isa: "00000116",
      gs: "120",
      st: "0890",
      isaDate: "234009",
      isaTime: "0720",
      status: "Success",
    },
  },
  {
    id: "APPT0003",
    docNum: "LC10003",
    purchaseOrder: "485741",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "856",
    warehouse: "Target",
    partner: "Adam Cruise",
    datetime: "06/20/2025 10:30AM CST",
    sender: {
      instantId: "APPT0003",
      transactionType: "856",
    },
    receiver: {
      id: "PART003",
      name: "TRANSLOGIC",
      isa: "00000117",
      gs: "125",
      st: "0891",
      isaDate: "234010",
      isaTime: "0730",
      status: "Success",
    },
  },
  {
    id: "APPT0004",
    docNum: "LC10004",
    purchaseOrder: "485742",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "810",
    warehouse: "Amazon",
    partner: "David Beckham",
    datetime: "06/20/2025 11:45AM CST",
    sender: {
      instantId: "APPT0004",
      transactionType: "810",
    },
    receiver: {
      id: "PART004",
      name: "LOGISTICA",
      isa: "00000118",
      gs: "130",
      st: "0892",
      isaDate: "234011",
      isaTime: "0740",
      status: "Success",
    },
  },
  {
    id: "APPT0005",
    docNum: "LC10005",
    purchaseOrder: "485743",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "940",
    warehouse: "Kroger",
    partner: "Emily Clark",
    datetime: "06/20/2025 01:00PM CST",
    sender: {
      instantId: "APPT0005",
      transactionType: "940",
    },
    receiver: {
      id: "PART005",
      name: "SPEEDWAY",
      isa: "00000119",
      gs: "135",
      st: "0893",
      isaDate: "234012",
      isaTime: "0750",
      status: "Success",
    },
  },
  {
    id: "APPT0006",
    docNum: "LC10006",
    purchaseOrder: "485744",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "850",
    warehouse: "Walmart",
    partner: "Samuel James",
    datetime: "06/20/2025 02:15PM CST",
    sender: {
      instantId: "APPT0006",
      transactionType: "850",
    },
    receiver: {
      id: "PART006",
      name: "RAPIDEXPRESS",
      isa: "00000120",
      gs: "140",
      st: "0894",
      isaDate: "234013",
      isaTime: "0800",
      status: "Success",
    },
  },
  {
    id: "APPT0007",
    docNum: "LC10007",
    purchaseOrder: "485745",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "856",
    warehouse: "Costco",
    partner: "Paul Smith",
    datetime: "06/20/2025 03:30PM CST",
    sender: {
      instantId: "APPT0007",
      transactionType: "856",
    },
    receiver: {
      id: "PART007",
      name: "SUPPLYNET",
      isa: "00000121",
      gs: "145",
      st: "0895",
      isaDate: "234014",
      isaTime: "0810",
      status: "Success",
    },
  },
  {
    id: "APPT0008",
    docNum: "LC10008",
    purchaseOrder: "485746",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "997",
    warehouse: "Target",
    partner: "Nina Patel",
    datetime: "06/20/2025 04:45PM CST",
    sender: {
      instantId: "APPT0008",
      transactionType: "997",
    },
    receiver: {
      id: "PART008",
      name: "DISTRILOG",
      isa: "00000122",
      gs: "150",
      st: "0896",
      isaDate: "234015",
      isaTime: "0820",
      status: "Success",
    },
  },
  {
    id: "APPT0009",
    docNum: "LC10009",
    purchaseOrder: "485747",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "846",
    warehouse: "Amazon",
    partner: "Moses Samuel",
    datetime: "06/20/2025 06:00PM CST",
    sender: {
      instantId: "APPT0009",
      transactionType: "846",
    },
    receiver: {
      id: "PART009",
      name: "EASTLINE",
      isa: "00000123",
      gs: "155",
      st: "0897",
      isaDate: "234016",
      isaTime: "0830",
      status: "Success",
    },
  },
  {
    id: "APPT0010",
    docNum: "LC10010",
    purchaseOrder: "485748",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "810",
    warehouse: "Kroger",
    partner: "Olivia Stone",
    datetime: "06/20/2025 07:15PM CST",
    sender: {
      instantId: "APPT0010",
      transactionType: "810",
    },
    receiver: {
      id: "PART010",
      name: "WESTTRANS",
      isa: "00000124",
      gs: "160",
      st: "0898",
      isaDate: "234017",
      isaTime: "0840",
      status: "Success",
    },
  },
  {
    id: "APPT0011",
    docNum: "LC10011",
    purchaseOrder: "485749",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "850",
    warehouse: "Walmart",
    partner: "Ethan Ray",
    datetime: "06/20/2025 08:30PM CST",
    sender: {
      instantId: "APPT0011",
      transactionType: "850",
    },
    receiver: {
      id: "PART011",
      name: "NORTHLINK",
      isa: "00000125",
      gs: "165",
      st: "0899",
      isaDate: "234018",
      isaTime: "0850",
      status: "Success",
    },
  },
  {
    id: "APPT0012",
    docNum: "LC10012",
    purchaseOrder: "485750",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "940",
    warehouse: "Costco",
    partner: "Sophia Miller",
    datetime: "06/20/2025 09:45PM CST",
    sender: {
      instantId: "APPT0012",
      transactionType: "940",
    },
    receiver: {
      id: "PART012",
      name: "JETTRANS",
      isa: "00000126",
      gs: "170",
      st: "0900",
      isaDate: "234019",
      isaTime: "0900",
      status: "Success",
    },
  },
  {
    id: "APPT0013",
    docNum: "LC10013",
    purchaseOrder: "485751",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "846",
    warehouse: "Target",
    partner: "Lucas Gray",
    datetime: "06/20/2025 11:00PM CST",
    sender: {
      instantId: "APPT0013",
      transactionType: "846",
    },
    receiver: {
      id: "PART013",
      name: "ECOFREIGHT",
      isa: "00000127",
      gs: "175",
      st: "0901",
      isaDate: "234020",
      isaTime: "0910",
      status: "Success",
    },
  },
  {
    id: "APPT0014",
    docNum: "LC10014",
    purchaseOrder: "485752",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "856",
    warehouse: "Amazon",
    partner: "Emma Wilson",
    datetime: "06/21/2025 12:15AM CST",
    sender: {
      instantId: "APPT0014",
      transactionType: "856",
    },
    receiver: {
      id: "PART014",
      name: "LOGISTILINE",
      isa: "00000128",
      gs: "180",
      st: "0902",
      isaDate: "234021",
      isaTime: "0920",
      status: "Success",
    },
  },
  {
    id: "APPT0015",
    docNum: "LC10015",
    purchaseOrder: "485753",
    documentFormat: "XML File",
    documentType: "--",
    transaction: "997",
    warehouse: "Kroger",
    partner: "Liam Davis",
    datetime: "06/21/2025 01:30AM CST",
    sender: {
      instantId: "APPT0015",
      transactionType: "997",
    },
    receiver: {
      id: "PART015",
      name: "AIRLOGIC",
      isa: "00000129",
      gs: "185",
      st: "0903",
      isaDate: "234022",
      isaTime: "0930",
      status: "Success",
    },
  },
];



export default function ColdStorageSearch() {
  const [documents, setDocuments] = useState(mockDocuments);
  const [showFilter, setShowFilter] = useState(true);
  const [showStorageDetails, setShowStorageDetails] = useState(false);
  const router = useRouter();
  const [filters, setFilters] = useState([{ attribute: "", value: "" }]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [selectedDocDetails, setSelectedDocDetails] = useState(null);

  const totalPages = Math.ceil(documents.length / pageSize);
  const paginatedDocs = documents.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleAdd = () => {
    setFilters([...filters, { attribute: "", value: "" }]);
  };

  const handleRemove = (index: number) => {
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  const updateFilter = (index: number, key: string, value: string) => {
    const newFilters = [...filters];
    newFilters[index][key as "attribute" | "value"] = value;
    setFilters(newFilters);
  };


  const handlecoldStorageDetails = (doc: any) => {
    console.log("Selected doc:", doc);
    setShowStorageDetails(true);
    setShowFilter(false);
    setSelectedRowId(doc.id);
    setSelectedDocDetails(doc);
  };
  

  const hanleSearch = () => {
    if (showFilter) {
      setShowFilter(false);
      setShowStorageDetails(false)
    }
    else {
      setShowFilter(true);
      setShowStorageDetails(false)
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader headerName="MSCVP" />
      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Cold Storage - Document Repository</h2>
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[calc(100vh-150px)]">
          {showFilter && (
            <div className="w-full md:w-1/3 h-auto md:h-full">
              <Card className="h-full flex flex-col ">
                <CardHeader>
                  <div className="flex justify-between items-center h-[5px]">
                    <h3 className="font-semibold text-[17px] ">
                      Search
                    </h3>
                    <div className="text-sm text-blue-500 cursor-pointer">Clear Search</div>
                  </div>
                </CardHeader>
                <div className="space-y-0 p-4  bg-[#F1F3F9] ">
                  <Select>
                    <Label className="text-[#7B809A] font-roboto font-normal text-[12px]">
                      Favorite Searches
                    </Label>
                    <SelectTrigger className="text-[#99AAC0]">
                      {/* <Heart className="w-4 h-4 text-[#7B809A]" /> */}
                      <SelectValue placeholder="Select From Favorites" className="text-left" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Favorite 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <CardContent className="p-4 overflow-y-auto flex-1">

                  <div className="space-y-3">
                    <div className="space-x-4">
                      <Label className="font-roboto font-normal text-[14px] leading-[100%] tracking-[0%] text-[#7B809A]">
                        Database
                      </Label>
                      <div style={{ marginLeft: "0px" }}>
                        <div className="flex items-center gap-2">
                          <input type="radio" name="db" defaultChecked />
                          <label className="font-roboto font-normal text-[14px] leading-[100%] tracking-[0%]">
                            Live
                          </label>
                          <input type="radio" name="db" className="ml-4" />
                          <label className="font-roboto font-normal text-[14px] leading-[100%] tracking-[0%]">
                            Archive
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="font-roboto font-normal text-[14px] leading-[100%] tracking-[0%] text-[#7B809A]">
                        Date Range</Label>
                      <div className="flex items-center gap-2">
                        <Input placeholder="DD/MM/YYYY - DD/MM/YYYY" />
                        <CalendarIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-0 ">
                      <Select>
                        <Label className="font-roboto font-normal text-[14px] leading-[100%] tracking-[0%] text-[#7B809A]">
                          Document Type</Label>
                        <SelectTrigger className="text-[#99AAC0]">
                          <SelectValue placeholder="Select Document Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="type1">Type 1</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="font-roboto font-normal text-[14px] leading-[100%] tracking-[0%] text-[#7B809A]">
                        Document Number</Label>
                      <Input placeholder="Enter Document Number" />
                    </div>
                    <div className="space-y-0 ">
                      <Select>
                        <Label className="font-roboto font-normal text-[14px] leading-[100%] tracking-[0%] text-[#7B809A]">
                          Trading Partner</Label>
                        <SelectTrigger className="text-[#99AAC0]">
                          <SelectValue placeholder="Select Trading Partner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="partner1">Partner 1</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-0 ">
                      <Select>
                        <Label className="font-roboto font-normal text-[14px] leading-[100%] tracking-[0%] text-[#7B809A]">
                          Warehouse</Label>
                        <SelectTrigger className="text-[#99AAC0]">
                          <SelectValue placeholder="Select Warehouse" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warehouse1">Warehouse 1</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-0 mb-5">
                      <Select>
                        <Label className="font-roboto font-normal text-[14px] leading-[100%] tracking-[0%] text-[#7B809A]">
                          Status</Label>
                        <SelectTrigger className="text-[#99AAC0]">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-roboto font-medium text-[14px] leading-[100%] tracking-[0%] text-gray-800">
                        Additional Filters
                      </h4>
                      {filters.map((filter, index) => (
                        <div key={index} className="grid grid-cols-12 items-center gap-2">
                          <div className="col-span-5">
                            <Select
                              onValueChange={(val) => updateFilter(index, "attribute", val)}
                              value={filter.attribute}
                            >
                              <SelectTrigger className="text-[#99AAC0]">
                                <SelectValue placeholder="Select Attribute" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="attr1">Attribute 1</SelectItem>
                                <SelectItem value="attr2">Attribute 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="col-span-5">
                            <Input className="text-[#99AAC0]"
                              placeholder="Value"
                              value={filter.value}
                              onChange={(e) => updateFilter(index, "value", e.target.value)}
                            />
                          </div>

                          <div className="col-span-2 flex gap-2">
                            {filters.length > 1 && (
                              <MinusCircle
                                className="w-5 h-5 text-red-500 cursor-pointer"
                                onClick={() => handleRemove(index)}
                              />
                            )}
                            {index === filters.length - 1 && (
                              <PlusCircle
                                className="w-5 h-5 text-blue-500 cursor-pointer"
                                onClick={handleAdd}
                              />
                            )}
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <div className="p-4 border-t flex flex-col md:flex-row justify-end gap-2">
                  <Button
                    variant="outline"
                    className="text-[#0065EE] border-[#0065EE] rounded-[6px]"
                  >
                    Add to favorites
                  </Button>
                  <Button className="bg-blue-600 text-white">Search</Button>
                </div>
              </Card>
            </div>
          )}

          <div className={`${showFilter ? "w-full md:w-2/3" : "w-full"} h-auto md:h-full`}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-center h-[5px]">
                  <h3 className="font-semibold text-[17px]">
                    Documents ({documents.length})
                  </h3>
                  <div
                    className="flex items-center gap-2">
                    <div
                      className="text-sm text-blue-500 cursor-pointer flex items-center space-x-1"
                      onClick={hanleSearch}
                    >
                      {!showFilter ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                      <span>{!showFilter ? "Expand Search" : "Collapse Search"}</span>
                    </div>
                    {documents.length != 0 &&
                      <MoreVertical className="w-4 h-4 cursor-pointer text-black" />
                    }
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-auto px-0">
                {documents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <SearchIcon className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-gray-500 text-lg">Search to view</p>
                    <p className="text-gray-500 text-lg font-medium">Cold Storage Documents</p>
                  </div>
                ) : (
                  <div >
                    <table className="min-w-full text-sm">
                      <thead className="bg-[#F1F3F9] sticky top-0 z-10 h-[50px]">
                        <tr className="border-b text-[#7B809A] font-roboto font-medium text-[14px] leading-[140%] tracking-[0%] text-left">
                          <th className="p-2 text-left">Instance ID</th>
                          <th className="text-left">Document #</th>
                          <th className="text-left">Warehouse</th>
                          <th className="text-left">Partner</th>
                          <th className="text-left">Date & Time</th>
                          <th className="text-left">Transaction</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="overflow-x-auto">
                        {paginatedDocs.map((doc, id) => (
                          <tr key={id} className={`border-b hover:bg-gray-50 ${selectedRowId === doc.id ? "bg-[#CDE3FF]" : ""}`}>
                            <td
                              className="p-2 text-blue-600 cursor-pointer"
                              onClick={() => handlecoldStorageDetails(doc)}
                            >
                              {doc.id}
                            </td>
                            <td>{doc.docNum}</td>
                            <td>{doc.warehouse}</td>
                            <td>{doc.partner}</td>
                            <td>{doc.datetime}</td>
                            <td>{doc.transaction}</td>
                            <td>
                              <MoreVertical className="w-4 h-4 cursor-pointer" />
                            </td>
                          </tr>
                        ))}
                      </tbody>

                    </table>
                  </div>
                )}
              </CardContent>

              <div className="flex justify-end px-4 py-2 border-t">
                <div className="flex items-center gap-4">
                  {/* Pagination Buttons */}
                  <div className="flex items-center space-x-1">
                    <button
                      className="px-2 py-1 text-gray-500 border rounded disabled:opacity-50"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      &lt;
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 5).map((page) => (
                      <button
                        key={page}
                        className={`px-3 py-1 border rounded ${page === currentPage ? "bg-blue-600 text-white border-blue-600" : "text-gray-600"
                          }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      className="px-2 py-1 text-gray-500 border rounded disabled:opacity-50"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      &gt;
                    </button>
                  </div>

                  {/* Page Size Selector */}
                  <div className="flex items-center space-x-2 text-sm">
                    <select
                      className="border rounded px-2 py-1 text-sm text-gray-600"
                      value={pageSize}
                      onChange={(e) => {
                        setPageSize(Number(e.target.value));
                        setCurrentPage(1); // reset to first page
                      }}
                    >
                      <option value="10">10 / page</option>
                      <option value="20">20 / page</option>
                      <option value="50">50 / page</option>
                    </select>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {(showStorageDetails && !showFilter) &&
            <ColdStorageDetails selectedDocDetails={selectedDocDetails}/>
          }
        </div>
      </main>
    </div>
  );
}
