import { AuthLayout } from "@/features/auth/ui/AuthLayout";
import { LoginForm } from "@/features/auth/ui/LoginForm";

export function LoginPageWrapper() {
  return (
    <AuthLayout eyebrow="All your memories, organized and safe.">
      <LoginForm />
    </AuthLayout>
  );
}
