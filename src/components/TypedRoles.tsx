import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "AI Builder", "UI Craftsman", "React Engineer"];

export default function TypedRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 70;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="inline-flex items-center font-mono text-cyan">
      {text}
      <span className="ml-0.5 h-[1.1em] w-[2px] bg-cyan animate-blink" />
    </span>
  );
}
