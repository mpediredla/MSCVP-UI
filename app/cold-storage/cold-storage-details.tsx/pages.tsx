"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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

export default function ColdStorageDetails() {
    const initialUserData: UserData = {
        firstName: "Anderson",
        lastName: "Smith",
        email: "anderson.smith@gmail.com",
        phoneNumber: "+1 (555) 555-5555",
        location: "Dallas, Texas",
        organization: "Rehiko",
        designation: "Admin",
        timeZone: "Eastern Standard Time (EST)",
    };
    const [formData, setFormData] = useState<UserData>(initialUserData);
    return (
        <div>
        <Card className="mt-6 ">
            <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 overflow-auto p-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-base font-semibold text-[#121F33]">
                            Personal Information
                        </h3>
                        <Button
                            variant="outline"
                            className="text-[#0065EE] border-[#0065EE] w-[100px] h-[35px] rounded-[6px]"
                        >
                            Edit
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                        {[
                            "Name",
                            "Email",
                            "Phone Number",
                            "Location",
                            "Organization",
                            "Designation",
                            "Time Zone",
                        ].map((label, index) => (
                            <div key={index} className="space-y-1">
                                <p className="text-sm text-[#121F33B2]">{label}</p>
                                {/* <p className="text-base font-semibold text-[#121F33]">
                                    {label === "Name"
                                        ? `${formData.firstName} ${formData.lastName}`
                                        : formData[
                                        label.replace(/ /g, "").charAt(0).toLowerCase() +
                                        label.replace(/ /g, "").slice(1)
                                        ]}
                                </p> */}
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <div className="flex justify-between items-center">
                            <h3 className="text-base font-semibold text-[#121F33]">
                                Security
                            </h3>
                            <Button
                                variant="outline"
                                className="text-[#0065EE] border-[#0065EE] w-full md:w-[170px] h-[35px] rounded-[6px]"
                            >
                                Change Password
                            </Button>
                        </div>
                        <div className="border-t pt-4 space-y-2">
                            <p className="text-base font-semibold text-[#121F33]">Password</p>
                            <p className="text-sm text-muted-foreground">
                                Your password will expire in next 45 days.
                            </p>
                            <p className="text-base leading-[120%] text-[#121F33]">
                                Protect your account by updating your password on a regular
                                three-month cycle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
        </div>
    );
}
