"use client";

import { useRouter } from "next/navigation";
import AuthPanel from "./AuthPanel";

export default function LoginForm() {
  const router = useRouter();

  return (
    <div className="flex w-full min-h-screen">
      {/* Left panel — 50% */}
      <div className="hidden lg:flex w-1/2 min-h-screen">
        <AuthPanel />
      </div>

      {/* Right form panel — 50% */}
      <div className="flex-1 lg:w-1/2 min-h-screen flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-lg animate-fadeIn">

          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-9 h-9 bg-teal-500 rounded-xl flex items-center justify-center text-white text-lg">📅</div>
            <span className="font-bold text-lg text-slate-800">BookEase</span>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">Welcome back</h1>
          <p className="text-slate-500 text-base mb-10">Sign in to your account to continue</p>

          {/* Form */}
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">
                Mobile / Email
              </label>
              <input
                type="text"
                placeholder="Enter mobile number or email"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 outline-none focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 outline-none focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-400/10 transition-all duration-200"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 accent-teal-500 cursor-pointer"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">Remember me</span>
              </label>
              <button className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors">
                Forgot Password?
              </button>
            </div>

            <button
              onClick={() => router.push("/otp")}
              className="w-full bg-teal-500 hover:bg-teal-600 active:scale-[0.98] text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/25 text-sm"
            >
              Login
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-7">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 font-medium">Or login with</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 py-3.5 rounded-xl transition-all duration-200 text-sm font-medium text-slate-700">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-slate-500 mt-8">
            Don't have an account?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}