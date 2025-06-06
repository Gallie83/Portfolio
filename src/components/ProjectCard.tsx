import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlobeIcon, Github } from "lucide-react"

// Interface for the project data
export interface Project {
  name: string;
  description: string;
  contribution?: string;
  url: string;
  github: string;
  tags: string[];
  hackathon: boolean;
}

export function ProjectCard({ project }: { project: Project }) {
  // Sets images for each project
  const imagePath = "/assets/data-assets/" + project.name.trim().replace(/\s+/g, '') + ".png";
  console.log("IP:", imagePath);


  return (
    <Card className="w-full overflow-hidden flex flex-col h-full p-0">
        <div className="relative w-full pt-[56.25%]">
          <img
            src={imagePath}
            alt={`${project.name} cover image`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      <CardHeader>
        <div className="space-y-2">
          <CardTitle>{project.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col space-y-4">

        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Links</div>
          <div className="flex items-center">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <GlobeIcon className="h-4 w-4 text-muted-foreground" />
              <span className="transition-transform hover:scale-105">Live Demo</span>
            </a>
            <span className="mx-2 text-gray-400">•</span>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <Github className="h-4 w-4 text-muted-foreground" />
              <span className="transition-transform hover:scale-105">GitHub Repository</span>
            </a>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}