"use client";

import { useRouter } from "next/navigation";
import AuthPanel from "./AuthPanel";

export default function SignupForm() {
  const router = useRouter();

  return (
    <div className="flex w-full min-h-screen">
      {/* Left panel — 50% */}
      <div className="hidden lg:flex w-1/2 min-h-screen">
        <AuthPanel />
      </div>

      {/* Right form panel — 50% */}
      <div className="flex-1 lg:w-1/2 min-h-screen flex items-center justify-center px-8 py-12 bg-white overflow-y-auto">
        <div className="w-full max-w-md animate-fadeIn">

          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-9 h-9 bg-teal-500 rounded-xl flex items-center justify-center text-white text-lg">📅</div>
            <span className="font-bold text-lg text-slate-800">BookEase</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">Create account</h1>
          <p className="text-slate-500 text-sm mb-8">Fill in the details below to get started</p>

          <div className="space-y-4">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 outline-none focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 outline-none focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 outline-none focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 outline-none focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 transition-all duration-200"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 outline-none focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Repeat password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 outline-none focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 transition-all duration-200"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2.5 cursor-pointer group pt-1">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 rounded border-slate-300 accent-teal-500 cursor-pointer flex-shrink-0"
              />
              <span className="text-sm text-slate-600 leading-relaxed">
                I agree to the{" "}
                <span className="text-teal-600 font-medium hover:underline cursor-pointer">Terms of Service</span>{" "}
                and{" "}
                <span className="text-teal-600 font-medium hover:underline cursor-pointer">Privacy Policy</span>
              </span>
            </label>

            <button
              onClick={() => router.push("/otp")}
              className="w-full bg-teal-500 hover:bg-teal-600 active:scale-[0.98] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/25 text-sm"
            >
              Create Account
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 font-medium">Or sign up with</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 py-3 rounded-xl transition-all duration-200 text-sm font-medium text-slate-700">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-slate-500 mt-8">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}