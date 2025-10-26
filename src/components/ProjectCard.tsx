import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  comingSoon?: boolean;
}

const ProjectCard = ({ title, description, url, comingSoon }: ProjectCardProps) => {
  const cardContent = (
    <>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-primary group-hover:text-accent transition-colors">
          <span>{title}</span>
          {!comingSoon && <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <CardDescription className="text-muted-foreground mb-4">
          {description}
        </CardDescription>
        {comingSoon ? (
          <span className="text-muted-foreground text-sm font-medium inline-flex items-center gap-1">
            Kommer snart
          </span>
        ) : (
          <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
            Besøk prosjekt
            <ExternalLink className="h-4 w-4" />
          </span>
        )}
      </CardContent>
    </>
  );

  if (comingSoon) {
    return (
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border h-full flex flex-col">
        {cardContent}
      </Card>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border cursor-pointer h-full flex flex-col">
        {cardContent}
      </Card>
    </a>
  );
};

export default ProjectCard;
