import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlobeIcon, Github } from "lucide-react"

interface ProjectModalProps {
  project: Project,
  isOpen: boolean,
  onClose: () => void
}

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


export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if(!project || !isOpen) return null;

  // Sets images for each project
  const imagePath = "/assets/data-assets/" + project.name.trim().replace(/\s+/g, '') + ".png";
  console.log("IP:", imagePath);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 md:p-8">
      <Card className="flex flex-col p-0 w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header with title, links, tags and close button */}
        <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-gray-100 p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-4xl font-bold text-gray-800 mb-4">{project.name}</CardTitle>
              
              <div className="flex flex-col sm:flex-row gap-6">
              {/* Links */}
              <div className="space-y-2">
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

                {/* Tags */}
                <div className="flex flex-wrap gap-2 items-center">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1 px-3 bg-gray-200 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full p-2 transition-all duration-200 ml-4"
            >
              ✕
            </button>
          </div>
        </CardHeader>

        {/* Main content - single column */}
        <CardContent className="p-8 overflow-y-auto">
          <div className="space-y-6">
            {/* Image */}
            <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
              <img
                src={imagePath}
                alt={`${project.name} cover image`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            {/* Contribution (if exists) */}
            {project.contribution && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">My Contribution</h3>
                <p className="text-gray-600 leading-relaxed">{project.contribution}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}