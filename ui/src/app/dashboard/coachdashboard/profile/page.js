"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SkillInput from "@/components/coach/profile/SkillsInput";
import FileUpload from "@/components/coach/profile/fileupload";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { toastrSuccess, toastrError } from "@/components/ui/toaster/toaster";
import { ArrowLeftIcon, UserCircleIcon, AcademicCapIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const ProfileForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    expertise: "",
    bio: "",
    skills: [],
    slots: [],
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (skills) => {
    setFormData({ ...formData, skills });
  };

  const handleSlotsChange = (slots) => {
    setFormData({ ...formData, slots });
  };

  const handleResumeUpload = (file) => {
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("expertise", formData.expertise);
    formDataObj.append("bio", formData.bio);
    formDataObj.append("skills", JSON.stringify(formData.skills));
    formDataObj.append("slots", JSON.stringify(formData.slots));
    if (formData.resume) {
      formDataObj.append("resume", formData.resume);
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8001/api/coachprofile", {
        method: "POST",
        body: formDataObj,
      });

      const data = await res.json();
      console.log("Server Response:", data);
      toastrSuccess("Profile saved successfully!");
      
      setTimeout(() => {
        router.push("/dashboard/coach");
      }, 1500);
    } catch (error) {
      console.error("Error:", error);
      toastrError("Failed to save profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container-professional py-8 md:py-10 lg:py-12 fade-in">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <button
            onClick={() => router.push("/dashboard/coach")}
            className="flex items-center text-gray-600 hover:text-[var(--primary)] mb-4 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Setup Your Coach Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Create a compelling profile to attract more clients
          </p>
        </div>

        {/* Progress Steps */}
        <div className="card p-6 mb-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-semibold">
                ✓
              </div>
              <span className="font-semibold text-gray-900">Basic Info</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-semibold">
                2
              </div>
              <span className="font-semibold text-gray-900">Skills & Bio</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-semibold">
                3
              </div>
              <span className="font-semibold text-gray-500">Complete</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* Basic Information */}
          <div className="card spacing-comfortable">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                <UserCircleIcon className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
                <p className="text-sm text-gray-600">Let clients know who you are</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-professional"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Expertise <span className="text-red-500">*</span>
                </label>
                <select
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  required
                  className="input-professional"
                >
                  <option value="">Select your expertise</option>
                  <option value="fitness">Fitness & Wellness</option>
                  <option value="career">Career Development</option>
                  <option value="life">Life Coaching</option>
                  <option value="business">Business & Entrepreneurship</option>
                  <option value="tech">Technology & Programming</option>
                  <option value="finance">Finance & Investment</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bio & Skills */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                  <DocumentTextIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Your Bio</h2>
                  <p className="text-sm text-gray-600">Tell your story</p>
                </div>
              </div>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                maxLength={300}
                rows={6}
                className="input-professional"
                placeholder="Share your experience, certifications, and what makes you unique as a coach..."
              />
              <p className="text-xs text-gray-500 mt-2">
                {formData.bio.length}/300 characters
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                  <AcademicCapIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Skills & Expertise</h2>
                  <p className="text-sm text-gray-600">Add your key skills</p>
                </div>
              </div>
              <SkillInput skills={formData.skills} onSkillsChange={handleSkillsChange} />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Resume/CV</h2>
                <p className="text-sm text-gray-600">Upload your professional credentials</p>
              </div>
            </div>
            <FileUpload onFileSelect={handleResumeUpload} />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => router.push("/dashboard/coach")}
              className="btn btn-secondary px-8 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary px-8 py-3"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="spinner mr-2" style={{width: '20px', height: '20px', borderWidth: '2px'}}></div>
                  Saving Profile...
                </div>
              ) : (
                "Save Profile"
              )}
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default ProfileForm;
