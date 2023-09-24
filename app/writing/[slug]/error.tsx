"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { ShieldAlert } from "lucide-react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="px-4 pt-14 lg:pt-20 pb-16 min-h-[50dvh] mx-auto max-w-md flex flex-col items-center justify-center gap-2">
      <ShieldAlert className="h-6 w-6" />
      <div className="flex flex-col gap-1">No article found</div>
    </div>
  );
}
