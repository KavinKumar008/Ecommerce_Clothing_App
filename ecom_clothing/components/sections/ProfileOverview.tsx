import Button from "@/components/ui/Button";

interface ProfileOverviewProps {
  name: string;
  email: string;
  initials: string;
}

export default function ProfileOverview({
  name,
  email,
  initials,
}: ProfileOverviewProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 border border-zinc-200 bg-white rounded-sm mb-12 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 bg-zinc-100 text-zinc-600 rounded-full flex items-center justify-center text-xl font-medium tracking-tight flex-shrink-0 border border-zinc-200">
          {initials}
        </div>
        <div>
          <h2 className="text-xl font-medium tracking-tight text-zinc-900 mb-1">
            {name}
          </h2>
          <p className="text-sm text-zinc-500">{email}</p>
        </div>
      </div>
      <Button variant="outline" size="sm" className="w-full sm:w-auto">
        Edit Profile
      </Button>
    </div>
  );
}
