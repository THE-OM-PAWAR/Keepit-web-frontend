"use client";

import Link from "next/link";
import { useState } from "react";
import { AtSign, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthField } from "@/features/auth/ui/AuthField";
import { useSignup } from "@/features/auth/hooks/useSignup";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    acceptedTerms,
    confirmPassword,
    email,
    error,
    fullName,
    isSubmitting,
    password,
    setAcceptedTerms,
    setConfirmPassword,
    setEmail,
    setFullName,
    setPassword,
    setUsername,
    submit,
    username,
  } = useSignup();

  return (
    <div>
      <h1 className="mb-1.5 text-2xl font-bold">Create your account</h1>
      <p className="mb-5 text-[#a1a1aa]">Start organizing your memories today</p>
      <form className="space-y-4" onSubmit={submit}>
        <AuthField
          icon={User}
          label="Full Name"
          name="fullName"
          onChange={setFullName}
          placeholder="Enter your full name"
          value={fullName}
        />
        <AuthField
          icon={Mail}
          label="Email"
          name="email"
          onChange={setEmail}
          placeholder="Enter your email"
          type="email"
          value={email}
        />
        <AuthField
          icon={AtSign}
          label="Username"
          name="username"
          onChange={setUsername}
          placeholder="Choose a username"
          value={username}
        />
        <div>
          <AuthField
            icon={Lock}
            label="Password"
            name="password"
            onChange={setPassword}
            onTrailingClick={() => setShowPassword((value) => !value)}
            placeholder="Create a password"
            trailingIcon={showPassword ? Eye : EyeOff}
            trailingLabel={showPassword ? "Hide password" : "Show password"}
            type={showPassword ? "text" : "password"}
            value={password}
          />
          <p className="mt-1.5 text-xs text-[#a1a1aa]">
            At least 8 characters with letters and numbers
          </p>
        </div>
        <AuthField
          icon={Lock}
          label="Confirm Password"
          name="confirmPassword"
          onChange={setConfirmPassword}
          onTrailingClick={() => setShowConfirmPassword((value) => !value)}
          placeholder="Confirm your password"
          trailingIcon={showConfirmPassword ? Eye : EyeOff}
          trailingLabel={showConfirmPassword ? "Hide password" : "Show password"}
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
        />
        <label className="flex items-start gap-2.5 text-sm leading-5 text-[#a1a1aa]">
          <Checkbox
            checked={acceptedTerms}
            className="mt-1 border-white/20 bg-transparent"
            onCheckedChange={(value) => setAcceptedTerms(value === true)}
          />
          <span>
            I agree to the <Link className="text-[#2563ff]" href="#">Terms of Service</Link> and{" "}
            <Link className="text-[#2563ff]" href="#">Privacy Policy</Link>
          </span>
        </label>
        {error ? (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : null}
        <Button
          className="h-11 w-full rounded-xl bg-[#2563ff] font-semibold hover:bg-[#1d4ed8]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account..." : "Sign up"}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-[#a1a1aa]">
        Already have an account?{" "}
        <Link className="text-[#2563ff]" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
}
