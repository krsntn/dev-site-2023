import { Skeleton } from "@/src/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="px-4 pt-14 lg:pt-20 pb-16 min-h-[100dvh]">
      <div className="mx-auto max-w-md flex flex-col gap-2">
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-[70%] h-4 rounded mb-3" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-[70%] h-4 rounded mb-3" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-[70%] h-4 rounded mb-3" />
      </div>
    </div>
  );
}
