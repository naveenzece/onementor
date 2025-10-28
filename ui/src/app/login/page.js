"use client";

import Footer from "@/components/Footer/footer";
import MainHeader from "@/components/Header/mainHeader";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginFormElements } from "@/components/ui/constants/loginFormElement";
import { toastrSuccess, toastrError } from "@/components/ui/toaster/toaster";
import Input from "@/components/ui/formelements/input";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ email: "", otp: "" });
  const [loading, setLoading] = useState(false);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSendOtp(e) {
    e.preventDefault();
    const validator = loginFormElements[0].validate(formData.email);

    if (validator === true) {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8001/api/auth/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email: formData.email }),
        });
        const data = await res.json();
        if (res.ok) {
          toastrSuccess("OTP sent to your email!");
          setStep(2);
        } else {
          toastrError(data.error || "Something went wrong");
        }
      } catch (err) {
        toastrError("Network error");
      } finally {
        setLoading(false);
      }
    } else {
      toastrError(validator);
    }
  }

  async function handleVerifyOtp(e) {
    e.preventDefault();
    const validator = loginFormElements[0].validate(formData.email);

    if (validator === true) {
      if (/^\d{6}$/.test(formData.otp)) {
        setLoading(true);
        try {
          const res = await fetch("http://localhost:8001/api/auth/verify-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email: formData.email, otp: formData.otp }),
          });

          const data = await res.json();

          if (res.ok) {
            localStorage.setItem("userId", data.id);
            localStorage.setItem("userRole", data.role);
            localStorage.setItem("userEmail", data.email);

            toastrSuccess("Login successful!");

            if (data.role === "Doctor") {
              router.push("/approve");
            } else {
              router.push(`/dashboard/${data.role}`);
            }
          } else {
            toastrError(data.error || "Invalid OTP");
          }
        } catch (err) {
          toastrError("Network error");
        } finally {
          setLoading(false);
        }
      } else {
        toastrError("OTP must be exactly 6 digits");
      }
    } else {
      toastrError(validator);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />

      <main className="flex-grow flex items-center justify-center px-6 py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* Left Side - Branding */}
          <div className="hidden md:flex flex-col justify-center items-center space-y-8 fade-in">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <Image 
                  src="/images/onementor.jpg"
                  alt="OneMentor"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-[var(--primary)] shadow-xl mx-auto"
                />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                OneMentor
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                Continuous Growth Platform
              </p>
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                Welcome Back!
              </h2>
              <p className="text-lg text-gray-600 max-w-md">
                Your journey to continuous growth starts here. Sign in to access your personalized coaching experience.
              </p>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="card glass-effect max-w-md w-full mx-auto spacing-extra-generous fade-in">
            <div className="text-center mb-10 md:mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {step === 1 ? "Sign In" : "Verify OTP"}
              </h2>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                {step === 1 ? "Enter your email to receive a one-time password" : "Enter the 6-digit code sent to your email"}
              </p>
            </div>

            {step === 1 && (
              <form onSubmit={handleSendOtp} className="space-y-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormData}
                    className="input-professional"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full py-4 text-lg font-semibold mt-8"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="spinner mr-2" style={{width: '20px', height: '20px', borderWidth: '2px'}}></div>
                      Sending...
                    </div>
                  ) : (
                    "Send OTP"
                  )}
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleVerifyOtp} className="space-y-8">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-3">
                    One-Time Password
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleFormData}
                    className="input-professional text-center text-2xl tracking-widest"
                    placeholder="000000"
                    maxLength={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full py-4 text-lg font-semibold mt-8"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="spinner mr-2" style={{width: '20px', height: '20px', borderWidth: '2px'}}></div>
                      Verifying...
                    </div>
                  ) : (
                    "Verify & Login"
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-sm text-[var(--primary)] hover:underline font-medium pt-4"
                >
                  ← Change Email
                </button>
              </form>
            )}

            <div className="mt-10 pt-6 border-t border-gray-200 text-center">
              <p className="text-base text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[var(--primary)] font-semibold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
