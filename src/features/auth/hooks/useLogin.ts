"use client";

import { FormEvent, useState } from "react";

export function useLogin() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    await Promise.resolve();
    setError("Login is UI-only in this preview.");
    setIsSubmitting(false);
  }

  return {
    error,
    identifier,
    isSubmitting,
    password,
    setIdentifier,
    setPassword,
    submit,
  };
}
