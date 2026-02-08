import { ReactNode } from "react";

interface SectionProps {
    children?: ReactNode | ReactNode[];
}

const Section = ({ children }: SectionProps) => {
    return (
        <div className="p-10 bg-orange-100 text-red-dark rounded-md">
            {children}
        </div>
    )
}

export default Section;