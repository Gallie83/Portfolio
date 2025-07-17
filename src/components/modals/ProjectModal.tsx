import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlobeIcon, Github, ChevronUp, ChevronDown } from "lucide-react"

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

  const [showDescription, setShowDescription] = useState(false);
  
  if(!project || !isOpen) return null;

  // Sets images for each project
  const imagePath = "/assets/data-assets/" + project.name.trim().replace(/\s+/g, '') + ".png";
  console.log("IP:", imagePath);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center" 
      onClick={onClose}>
        <Card 
          className="flex flex-col p-0 w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl" 
          onClick={(e) => e.stopPropagation()}>
          {/* Header with title, links, tags and close button */}
          <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-gray-100 p-3 !pb-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-4xl font-bold text-gray-800 mb-4">{project.name}</CardTitle>
                
                <div className="flex flex-col sm:flex-row gap-6">
                {/* Links */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    {/* Only display Live Demo link if website is live */}
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:underline"
                        >
                        <GlobeIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="transition-transform hover:scale-105">Live Demo</span>
                      </a>
                    )}
                    {project.url && (<span className="mx-2 text-gray-400">•</span>)}
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
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-200 hover:cursor-pointer rounded-full p-2 transition-all duration-200 ml-4"
              >
                ✕
              </button>
            </div>
          </CardHeader>

          {/* Main content */}
          <CardContent className="p-0 flex-1 relative">
            <div className="relative w-full h-full min-h-[500px]">
              {/* Image */}
              <img
                src={imagePath}
                alt={`${project.name} cover image`}
                className="w-full h-full object-cover"
              />
              
              {/* Sliding description overlay */}
              <div className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
                showDescription ? 'translate-y-0' : 'translate-y-full'
              }`}>
                <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                  {/* Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Contribution (if exists) */}
                  {project.contribution && (
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">My Contribution</h3>
                      <p className="text-gray-600 leading-relaxed">{project.contribution}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Description toggle button - positioned to stay above the overlay */}
              <button
                onClick={() => setShowDescription(!showDescription)}
                className={`absolute left-1/2 transform -translate-x-1/2 bg-white hover:bg-gray-50 px-6 py-3 rounded-full shadow-xl border border-gray-200 transition-all duration-300 hover:scale-110 hover:cursor-pointer flex items-center gap-2 z-20 ${
                  showDescription ? 'top-[0vh]' : 'top-[60vh]'
                }`}
              >
                <span className="font-medium text-gray-800">
                  {showDescription ? 'Hide Details' : 'Show Details'}
                </span>
                {showDescription ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </button>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}