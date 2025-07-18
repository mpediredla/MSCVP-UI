"use client"

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

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
type PasswordFormData = {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
};
const RequirementItem = ({ isValid, text }: { isValid: boolean; text: string }) => (
    <li className="flex items-center">
        <span className={`inline-block w-2 h-2 mr-2 rounded-full ${isValid ? 'bg-[#00A010]' : 'bg-[#757575]'}`}>
            {isValid && (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            )}
        </span>
        <span className={isValid ? 'text-[#00A010]' : 'text-[#757575]'}>{text}</span>
    </li>
);

export default function ColdStorage() {
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [formData, setFormData] = useState<UserData>(initialUserData);
    const [passwordFormData, setPasswordFormData] = useState<PasswordFormData>({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [showPasswords, setShowPasswords] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false
    });

    // Add these toggle functions
    const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };


    // Open modal and initialize form with current user data
    const openModal = () => {
        setFormData(initialUserData);
        setIsModalOpen(true);
    };

    const openPasswordModal = () => {
        setIsPasswordModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsPasswordModalOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPasswordFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Here you can add API call to save formData
        console.log("Saved data:", formData);
        setIsModalOpen(false);
    };

    const handlePasswordSave = () => {
        // Validate passwords
        if (passwordFormData.newPassword !== passwordFormData.confirmPassword) {
            alert("New passwords don't match!");
            return;
        }

        // Here you can add API call to change password
        console.log("Password change data:", passwordFormData);
        setIsPasswordModalOpen(false);
        setPasswordFormData({
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <DashboardHeader headerName="Profile" />

            <div className="flex-1 px-4 pt-4 pb-6 md:px-8 space-y-4">
                <div className="flex justify-center">
                    <Card className="rounded-[10px] bg-white shadow-sm w-full flex flex-col md:flex-row overflow-hidden min-h-[85vh]">
                        {/* Left Column - Profile */}
                        <div className="w-full md:w-[280px] flex flex-col items-center justify-start p-6 border-b md:border-b-0">
                            <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border">
                                <Image
                                    src="/profilePic.jpg"
                                    alt="Profile Picture"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className="mt-4 text-lg font-semibold text-center">{`${formData.firstName} ${formData.lastName}`}</p>
                            <p className="text-sm text-muted-foreground text-center">{formData.designation}</p>
                            <p className="text-xs text-muted-foreground text-center">{formData.location} - USA</p>
                        </div>

                        {/* Right Column - Details */}
                        <div className="flex-1 flex flex-col">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                    <CardTitle className="text-base font-semibold text-[#121F33]">
                                        Personal Information
                                    </CardTitle>
                                    <Button
                                        variant="outline"
                                        className="text-[#0065EE] border-[#0065EE] w-full md:w-[100px] h-[35px] rounded-[6px]"
                                        onClick={openModal}
                                    >
                                        Edit
                                    </Button>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                {/* Info Grid */}
                                <div className="border-t pt-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        {[
                                            { label: "Name", value: `${formData.firstName} ${formData.lastName}` },
                                            { label: "Email", value: formData.email },
                                            { label: "Phone Number", value: formData.phoneNumber },
                                            { label: "Location", value: formData.location },
                                            { label: "Organization", value: formData.organization },
                                            { label: "Designation", value: formData.designation },
                                            { label: "Time Zone", value: formData.timeZone },
                                        ].map(({ label, value }, index) => (
                                            <div key={index} className="min-w-0 break-words space-y-1">
                                                <p className="text-sm text-[#121F33B2]">{label}</p>
                                                <p className="text-base font-semibold text-[#121F33]">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Security Section */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 pt-6">
                                    <h3 className="text-base font-semibold text-[#121F33]">Security</h3>
                                    <Button
                                        variant="outline"
                                        className="text-[#0065EE] border-[#0065EE] w-full md:w-[170px] h-[35px] rounded-[6px]"
                                        onClick={openPasswordModal}
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
                                        Protect your account by updating your password on a regular three-month cycle.
                                    </p>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative shadow-lg">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        <h2 className="text-lg font-semibold mb-4">Edit Personal Information</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSave();
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t pt-4"
                        >
                            <div>
                                <label className="block mb-1 font-medium" htmlFor="firstName">
                                    First Name *
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium" htmlFor="lastName">
                                    Last Name *
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium" htmlFor="email">
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium" htmlFor="phoneNumber">
                                    Phone Number *
                                </label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium" htmlFor="location">
                                    Location *
                                </label>
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium" htmlFor="organization">
                                    Organization *
                                </label>
                                <input
                                    id="organization"
                                    name="organization"
                                    type="text"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium" htmlFor="designation">
                                    Designation *
                                </label>
                                <input
                                    id="designation"
                                    name="designation"
                                    type="text"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium" htmlFor="timeZone">
                                    Time Zone *
                                </label>
                                <input
                                    id="timeZone"
                                    name="timeZone"
                                    type="text"
                                    value={formData.timeZone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                />
                            </div>

                            {/* Buttons */}
                            <div className="col-span-full flex justify-end space-x-4 mt-4 border-t pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-blue-600 hover:underline"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isPasswordModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative shadow-lg">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        <h2 className="text-lg font-semibold mb-4">Change Password</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handlePasswordSave();
                            }}
                            className="space-y-4 border-t pt-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left column - Form fields */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block mb-1 font-medium" htmlFor="oldPassword">
                                            Old Password *
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="oldPassword"
                                                name="oldPassword"
                                                type={showPasswords.oldPassword ? "text" : "password"}
                                                value={passwordFormData.oldPassword}
                                                onChange={handlePasswordChange}
                                                className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                                onClick={() => togglePasswordVisibility('oldPassword')}
                                                aria-label={showPasswords.oldPassword ? "Hide password" : "Show password"}
                                            >
                                                {showPasswords.oldPassword ? (
                                                    <EyeOff className="h-5 w-5 text-gray-500" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-gray-500" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-medium" htmlFor="newPassword">
                                            New Password *
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="newPassword"
                                                name="newPassword"
                                                type={showPasswords.newPassword ? "text" : "password"}
                                                value={passwordFormData.newPassword}
                                                onChange={handlePasswordChange}
                                                className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                                onClick={() => togglePasswordVisibility('newPassword')}
                                                aria-label={showPasswords.newPassword ? "Hide password" : "Show password"}
                                            >
                                                {showPasswords.newPassword ? (
                                                    <EyeOff className="h-5 w-5 text-gray-500" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-gray-500" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-1 font-medium" htmlFor="confirmPassword">
                                            Confirm Password *
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={showPasswords.confirmPassword ? "text" : "password"}
                                                value={passwordFormData.confirmPassword}
                                                onChange={handlePasswordChange}
                                                className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                                onClick={() => togglePasswordVisibility('confirmPassword')}
                                                aria-label={showPasswords.confirmPassword ? "Hide password" : "Show password"}
                                            >
                                                {showPasswords.confirmPassword ? (
                                                    <EyeOff className="h-5 w-5 text-gray-500" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-gray-500" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right column - Validation list */}
                                <div className="p-4 rounded-lg">
                                    <h3 className="font-medium mb-2">Password must Contain:</h3>
                                    <ul className="space-y-2">
                                        <RequirementItem
                                            isValid={/[A-Z]/.test(passwordFormData.newPassword)}
                                            text="At least one uppercase letter"
                                        />
                                        <RequirementItem
                                            isValid={/[a-z]/.test(passwordFormData.newPassword)}
                                            text="At least one lowercase letter"
                                        />
                                        <RequirementItem
                                            isValid={passwordFormData.newPassword.length >= 8}
                                            text="Minimum 8 characters"
                                        />
                                        <RequirementItem
                                            isValid={/\d/.test(passwordFormData.newPassword)}
                                            text="At least one number"
                                        />
                                        <RequirementItem
                                            isValid={/[!@#$%^&*(),.?":{}|<>]/.test(passwordFormData.newPassword)}
                                            text="At least one special character"
                                        />
                                        <RequirementItem
                                            isValid={passwordFormData.newPassword === passwordFormData.confirmPassword &&
                                                passwordFormData.confirmPassword !== ''}
                                            text="Passwords match"
                                        />
                                    </ul>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end space-x-4 pt-4 border-t pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-blue-600 hover:underline"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
