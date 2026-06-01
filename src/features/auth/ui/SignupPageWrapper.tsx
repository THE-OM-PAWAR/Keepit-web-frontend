import { AuthLayout } from "@/features/auth/ui/AuthLayout";
import { SignupForm } from "@/features/auth/ui/SignupForm";

export function SignupPageWrapper() {
  return (
    <AuthLayout eyebrow="Start organizing your memories today">
      <SignupForm />
    </AuthLayout>
  );
}
