import Loader from "@/src/components/loader";

export default function Loading() {
  return (
    <div className="px-4 pt-14 lg:pt-20 pb-16 min-h-[50dvh] mx-auto max-w-md flex items-center justify-center">
      <Loader />
    </div>
  );
}
