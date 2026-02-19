"use client";

import { useEffect, useState } from "react";

const calendar = [
  { time: "09:00 AM", title: "Dr. Sarah Chen", type: "Consultation", color: "bg-teal-400" },
  { time: "11:30 AM", title: "Dental Checkup", type: "Dr. Miller", color: "bg-cyan-400" },
  { time: "02:00 PM", title: "Physiotherapy", type: "Dr. Patel", color: "bg-emerald-400" },
  { time: "04:30 PM", title: "Eye Specialist", type: "Dr. Kim", color: "bg-teal-300" },
];

const stats = [
  { label: "Appointments", value: "248", icon: "📅" },
  { label: "Doctors", value: "40+", icon: "👨‍⚕️" },
  { label: "Happy Patients", value: "1.2k", icon: "😊" },
];

export default function AuthPanel() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % calendar.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col justify-between w-full min-h-screen overflow-hidden bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-400 p-10 select-none">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-10 w-80 h-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-400/10 blur-2xl" />

      {/* Logo */}
      <div
        className={`relative z-10 flex items-center gap-3 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white text-xl border border-white/30">
          📅
        </div>
        <span className="text-white font-bold text-xl tracking-tight">BookEase</span>
      </div>

      {/* Headline */}
      <div
        className={`relative z-10 transition-all duration-700 delay-150 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-white text-3xl font-bold leading-snug mb-3">
          Your appointments,<br />
          <span className="text-white/80">perfectly organised.</span>
        </h2>
        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
          Book, manage and track all your medical appointments in one beautifully simple place.
        </p>
      </div>

      {/* Animated calendar card */}
      <div
        className={`relative z-10 transition-all duration-700 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-white/80 text-xs font-semibold uppercase tracking-widest">Today's Schedule</p>
            <span className="text-white/60 text-xs">4 appointments</span>
          </div>
          <div className="space-y-2">
            {calendar.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-2.5 rounded-xl transition-all duration-500 ${
                  active === i ? "bg-white/20 scale-[1.02]" : "bg-white/5"
                }`}
              >
                <div className={`w-1.5 h-8 rounded-full ${item.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-semibold truncate">{item.title}</p>
                  <p className="text-white/60 text-[10px]">{item.type}</p>
                </div>
                <span className="text-white/70 text-[10px] font-mono flex-shrink-0">{item.time}</span>
                {active === i && (
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur border border-white/15 rounded-xl p-3 text-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-lg mb-0.5">{s.icon}</div>
              <div className="text-white font-bold text-sm">{s.value}</div>
              <div className="text-white/60 text-[10px]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom dots */}
      <div className="relative z-10 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1 rounded-full bg-white transition-all duration-300 ${i === 0 ? "w-6" : "w-2 opacity-40"}`}
          />
        ))}
      </div>
    </div>
  );
}