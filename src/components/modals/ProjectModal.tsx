import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlobeIcon, Github, ChevronUp, ChevronDown } from "lucide-react"
import Portal from "../Portal"

const basePath = import.meta.env.BASE_URL

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
  const imagePath = basePath + "assets/data-assets/" + project.name.trim().replace(/\s+/g, '') + ".png";
  console.log("IP:", imagePath);

  return (
    <Portal>
      <div 
        className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center" 
        onClick={onClose}>
          <Card 
            className="flex flex-col bg-gradient-to-r from-[#FB8B24] to-[#983122] p-0 border-[#983122] w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]" 
            onClick={(e) => e.stopPropagation()}>
            {/* Header with title, links, tags and close button */}
            <CardHeader className="bg-[#983122] p-3 !pb-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-4xl font-bold text-white mb-4">{project.name}</CardTitle>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                  {/* Links */}
                  <div className="space-y-2">
                    <div className="flex text-white items-center">
                      {/* Only display Live Demo link if website is live */}
                      {project.url && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:underline"
                          >
                          <GlobeIcon className="h-4 w-4" />
                          <span className="transition-transform hover:scale-105">Live Demo</span>
                        </a>
                      )}
                      {project.url && (<span className="mx-2">•</span>)}
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:underline"
                      >
                        <Github className="h-4 w-4" />
                        <span className="transition-transform hover:scale-105">GitHub Repository</span>
                      </a>
                    </div>
                  </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 items-center">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-1 px-3 bg-white/90 text-[#983122] border border-orange-200 hover:text-white hover:bg-[#983122]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={onClose}
                  className="text-white/80 hover:text-white hover:bg-white/20 hover:cursor-pointer rounded-full p-2 transition-all duration-200 ml-4"
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
                <div className={`absolute bottom-0 left-0 right-0 text-white bg-[#983122] bg-opacity-95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
                  showDescription ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                    {/* Description */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold border-b border-gray-200 pb-2">Description</h3>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>

                    {/* Contribution (if exists) */}
                    {project.contribution && (
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold border-b border-gray-200 pb-2">My Contribution</h3>
                        <p className="leading-relaxed">{project.contribution}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description toggle button - positioned to stay above the overlay */}
                <button
                  onClick={() => setShowDescription(!showDescription)}
                  className={`absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FB8B24] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FB8B24] text-white px-6 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer flex items-center gap-2 z-20 font-semibold ${
                    showDescription ? 'top-[0vh]' : 'top-[50vh] xl:top-[65vh] 2xl:top-[55vh] [@media(min-width:1800px)]:top-[45vh]'
                  }`}
                >
                  <span className="font-medium text-white">
                    {showDescription ? 'Hide Details' : 'Show Details'}
                  </span>
                  {showDescription ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                </button>
              </div>
            </CardContent>
          </Card>
      </div>
    </Portal>
  )
}