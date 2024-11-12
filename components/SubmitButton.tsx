import Image from "next/image";
import { Button } from "./ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({
  isLoading,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      onClick={onClick}
      className={className ?? "shad-primary-btn w-full"}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
