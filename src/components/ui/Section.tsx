import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="container-x py-20 md:py-28">
      <div className="mb-12 max-w-2xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title mt-3">{title}</h2>
        {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
      </div>
      {children}
    </section>
  );
}
