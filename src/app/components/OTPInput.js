"use client";

import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function OTPInput() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-3">
        <span
          className="cursor-pointer"
          onClick={() => router.push("/login")}
        >
          ←
        </span>
        <h2 className="text-lg font-semibold">
          OTP Code Verification
        </h2>
      </div>

      <p className="text-sm text-gray-500 mt-8">
        Code has been sent to +91 *******99
      </p>

      <div className="flex justify-between mt-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) =>
              handleChange(e.target.value, index)
            }
            className="w-14 h-14 border rounded-lg text-center text-lg focus:ring-2 focus:ring-teal-400 outline-none"
            maxLength={1}
          />
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Resend code in <span className="text-blue-500">55s</span>
      </p>

      <div className="mt-6">
        <Button title="Verify" />
      </div>
    </div>
  );
}
