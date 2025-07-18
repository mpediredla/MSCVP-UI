"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

type UserData = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    location: string;
    organization: string;
    designation: string;
    timeZone: string;
};

export default function ColdStorageDetails({ selectedDocDetails }: any) {
console.log(selectedDocDetails);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <Card className="flex flex-col h-full">
                {/* Header */}
                <CardHeader>
                    <div className="flex justify-between items-center h-[5px]">
                        <h3 className="font-semibold text-[17px] ">
                            Document Details
                        </h3>
                        <button className="hover:text-blue-700 cursor-pointer">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </CardHeader>
                <div className="border-t"></div>
                {/* Content */}
                <CardContent className="p-4 sm:p-6 overflow-y-auto flex-1 text-sm text-gray-700">
                    {/* Document Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">
                                Instant ID
                            </p>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">
                                {selectedDocDetails?.id || "--"}
                            </p>
                        </div>
                        <div>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">Transaction Type</p>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">{selectedDocDetails?.sender?.transactionType || "--"}</p>
                        </div>
                        <div>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">Purchase Order #</p>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]"> {selectedDocDetails?.purchaseOrder || "--"}</p>
                        </div>
                        <div>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">Document #</p>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]"> {selectedDocDetails?.docNum || "--"}</p>
                        </div>
                        <div>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">Document Type</p>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]"> {selectedDocDetails?.documentType || "--"}</p>
                        </div>
                        <div>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">Document Format</p>
                            <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]"> {selectedDocDetails?.documentFormat || "--"}</p>
                        </div>
                    </div>

                    {/* Sender Information */}
                    <p className="font-semibold mb-2 text-gray-800">Sender Information</p>
                    <div className="border-t pt-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">Instant ID</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]"> {selectedDocDetails?.id || "--"}</p>
                            </div>
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">Transaction Type</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">{selectedDocDetails?.sender?.transactionType || "--"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Receiver Information */}
                    <p className="font-semibold mb-2 text-gray-800">Receiver Information</p>
                    <div className="border-t pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">ID</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">
                                    {selectedDocDetails?.receiver?.id || "--"}
                                </p>
                            </div>
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">Name</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">{selectedDocDetails?.receiver?.name || "--"}</p>
                            </div>
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">ISA #</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">{selectedDocDetails?.receiver?.isa || "--"}</p>
                            </div>
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">GS #</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">{selectedDocDetails?.receiver?.gs || "--"}</p>
                            </div>
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">ST #</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">{selectedDocDetails?.receiver?.st || "--"}</p>
                            </div>
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">ISA Date</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">{selectedDocDetails?.receiver?.isaDate || "--"}</p>
                            </div>
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">ISA Time</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">{selectedDocDetails?.receiver?.isaTime || "--"}</p>
                            </div>
                            <div>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#7B809A]">Status</p>
                                <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0%] text-[#121F33]">{selectedDocDetails?.receiver?.status || "--"}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>

                {/* Footer Buttons */}
                <div className="border-t px-4 py-3 flex flex-col sm:flex-row justify-end gap-2">
                    <Button variant="ghost" className="text-gray-600 w-full sm:w-auto">
                        Cancel
                    </Button>
                    <Button variant="outline" className="border-gray-300 w-full sm:w-auto">
                        Secondary Button
                    </Button>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                        Primary Button
                    </Button>
                </div>
            </Card>
        </div>

    );
}
