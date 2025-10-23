import { RegisterForm } from "@/features/auth/components/register-form";
import { userAlreadyAuthenticated } from "@/lib/auth-utils";

export default async function SignupPage() {
  await userAlreadyAuthenticated();

  return (
    <div className="max-w-lg m-auto py-24">
      <RegisterForm />
    </div>
  );
}
