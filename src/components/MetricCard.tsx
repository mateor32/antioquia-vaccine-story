import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
  variant?: "default" | "accent" | "success";
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  description, 
  variant = "default",
  className 
}: MetricCardProps) => {
  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:shadow-elevated border-border/50",
      variant === "accent" && "border-primary/30 bg-primary/5",
      variant === "success" && "border-accent/30 bg-accent/5",
      className
    )}>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          {title}
        </h3>
        <p className={cn(
          "text-4xl font-bold",
          variant === "accent" && "text-primary",
          variant === "success" && "text-accent"
        )}>
          {value}
        </p>
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
};
