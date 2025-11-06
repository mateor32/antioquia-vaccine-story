import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  icon?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ icon, title, subtitle, className }: SectionHeaderProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-3">
        {icon && (
          <span className="text-3xl" aria-hidden="true">
            {icon}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
