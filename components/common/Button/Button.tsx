import { useRouter } from "next/router";
import { cn } from "../../../helpers/utils";

interface Props {
  text: string;
  variant: "primary" | "secondary";
  className?: string;
  isRouting: boolean;
  url: string;
}

export const Button: React.FC<Props> = ({
  text,
  variant,
  className,
  isRouting,
  url,
}) => {
  const { push } = useRouter();

  return (
    <button
      type="button"
      onClick={() => (isRouting ? push(url) : window.open(url))}
      className={cn(variant === "primary" ? "" : "", className, "")}
    >
      {text}
    </button>
  );
};
