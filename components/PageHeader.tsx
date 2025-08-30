import { Badge } from '@/components/ui/badge';

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  icon?: React.ReactNode;
}

export default function PageHeader({ title, description, badge, icon }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        {icon && <div className="text-primary">{icon}</div>}
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {badge && <Badge variant="secondary">{badge}</Badge>}
      </div>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
