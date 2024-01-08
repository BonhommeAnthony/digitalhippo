import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface IMaxWidthWrapperProps {
    className?: string;
    children: ReactNode;
}

export default function MaxWidthWrapper({ className, children }: IMaxWidthWrapperProps) {
    return <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>{children}</div>;
}
