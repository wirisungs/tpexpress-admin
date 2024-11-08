import LoginForm from "@/components/AuthComponents/LoginForm";
import AuthLayout from "@/components/CommonComponents/Layout/AuthLayout";

const Login: React.FC = () => {
  return (
    <div className="w-full h-full">
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </div>
  );
};

export default Login;
