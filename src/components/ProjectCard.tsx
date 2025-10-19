import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ title, description, url }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-primary group-hover:text-accent transition-colors">
          <span>{title}</span>
          <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground mb-4">
          {description}
        </CardDescription>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline text-sm font-medium inline-flex items-center gap-1"
        >
          Besøk prosjekt
          <ExternalLink className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
