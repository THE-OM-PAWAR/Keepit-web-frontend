"use client";

import { FormEvent, useState } from "react";

export function useSignup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!acceptedTerms) {
      setError("Please agree to the terms before signing up");
      return;
    }

    setIsSubmitting(true);

    await Promise.resolve();
    setError("Signup is UI-only in this preview.");
    setIsSubmitting(false);
  }

  return {
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
  };
}
