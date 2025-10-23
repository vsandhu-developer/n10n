import { LoginForm } from "@/features/auth/components/login-form";
import { userAlreadyAuthenticated } from "@/lib/auth-utils";

export default async function LoginPage() {
  await userAlreadyAuthenticated();

  return (
    <div className="max-w-lg m-auto py-24">
      <LoginForm />
    </div>
  );
}
