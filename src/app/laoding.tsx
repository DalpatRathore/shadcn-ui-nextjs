import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Laoding = () => {
  return (
    <div className="w-full h-full p-8">
      <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]"></Skeleton>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Skeleton className="aspect-square rounded-xl"></Skeleton>
        <Skeleton className="aspect-square rounded-xl"></Skeleton>
        <Skeleton className="aspect-square rounded-xl"></Skeleton>
        <Skeleton className="aspect-square rounded-xl"></Skeleton>
        <Skeleton className="aspect-square rounded-xl"></Skeleton>
      </div>
    </div>
  );
};
export default Laoding;
