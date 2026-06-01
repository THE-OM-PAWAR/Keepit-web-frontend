"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AuthField } from "@/features/auth/ui/AuthField";
import { useLogin } from "@/features/auth/hooks/useLogin";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    error,
    identifier,
    isSubmitting,
    password,
    setIdentifier,
    setPassword,
    submit,
  } = useLogin();

  return (
    <div>
      <h1 className="mb-1.5 text-2xl font-bold">Welcome back</h1>
      <p className="mb-5 text-[#a1a1aa]">Login to continue to your account</p>
      <form className="space-y-4" onSubmit={submit}>
        <AuthField
          icon={Mail}
          label="Email or Username"
          name="identifier"
          onChange={setIdentifier}
          placeholder="Enter your email or username"
          value={identifier}
        />
        <div>
          <AuthField
            icon={Lock}
            label="Password"
            name="password"
            onChange={setPassword}
            onTrailingClick={() => setShowPassword((value) => !value)}
            placeholder="Enter your password"
            trailingIcon={showPassword ? Eye : EyeOff}
            trailingLabel={showPassword ? "Hide password" : "Show password"}
            type={showPassword ? "text" : "password"}
            value={password}
          />
          <Link className="mt-2 block text-right text-sm text-[#2563ff]" href="#">
            Forgot password?
          </Link>
        </div>
        {error ? (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : null}
        <Button
          className="h-11 w-full rounded-xl bg-[#2563ff] font-semibold hover:bg-[#1d4ed8]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-[#a1a1aa]">
        Don&apos;t have an account?{" "}
        <Link className="text-[#2563ff]" href="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
}
