/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { ReactNode, forwardRef } from "react";

type ButtonType = "primary" | "secondary";

interface ButtonProps {
  type?: ButtonType;

  children: ReactNode;

  isDisabled?: boolean;

  isLoading?: boolean;

  loadingText?: string;

  bgColor: string;

  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      type = "primary",
      children,
      isLoading = false,
      isDisabled = false,
      bgColor,
      loadingText,
      ...rest
    },
    ref
  ) => {
    const buttonStyles = computeVariants({ type, isDisabled });
    return (
      <button
        disabled={isDisabled || isLoading}
        ref={ref}
        //@ts-ignore
        css={{
          fontWeight: "bold",
          borderRadius: "0.25em",
          fontSize: "1em",
          ...buttonStyles,
        }}
        {...rest}
      >
        {isLoading && loadingText}
        {!isLoading && children}
      </button>
    );
  }
);

function computeVariants({
  type,
  isDisabled,
}: {
  type: ButtonType;
  isDisabled: boolean;
}) {
  const basicButtonStyles = {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    paddingLeft: "1.25em",
    paddingRight: "1.25em",
    height: "2.5em",
    ":hover": {
      backgroundColor: "#4a004a",
    },
  };

  if (type === "primary") {
    return {
      ...basicButtonStyles,
      backgroundColor: "purple",
      border: "2px solid #6f036f;",
      color: "#fff",
    };
  }

  if (type === "secondary") {
    return {
      ...basicButtonStyles,
      backgroundColor: "#fff",
      border: "2px solid purple",
      color: "#000",
    };
  }
}
