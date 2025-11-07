import { useState, useEffect } from "react";
import { ProjectCard, Project } from "../components/ProjectCard";
import { ProjectModal } from "@/components/modals/ProjectModal";
import projects from "../data/projects.json";
import { Button } from "@/components/ui/button"
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaBootstrap 
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiDjango, 
  SiTypescript, 
  SiTailwindcss,
  SiBlockchaindotcom
} from 'react-icons/si';

function Projects() {

  const [projectData, setProjectData] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Python", icon: FaPython, color: "#3776ab" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Blockchain", icon: SiBlockchaindotcom, color: "#F7931A" }
];

  useEffect(() => {
    // Set initial projects data
    setProjectData(projects.projects);
    setFilteredProjects(projects.projects);
  }, []);

  // Handle skill selection
  const handleSkillClick = (skill: string) => {
    if (selectedSkill === skill) {
      // If same skill is clicked again, remove filter
      setSelectedSkill(null);
      setFilteredProjects(projectData);
    } else {
      // Apply new filter
      setSelectedSkill(skill);
      setFilteredProjects(
        projectData.filter(project => project.tags.includes(skill))
      );
    }
  };

  return (
    <div className="md:min-h-screen px-6 py-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-5">
          <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-secondary)] to-[#FF6B35] rounded-full mb-3"></div>
          <span className="text-white/80 italic text-sm">*All projects listed use Git for version control</span>
        </div>
        
        {/* Skills section */}
        <div className="mb-5">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[var(--color-main)] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[var(--color-secondary)] rounded-full"></span>
                Skills
              </h2>
              {selectedSkill && (
                <button
                  onClick={() => {
                    setSelectedSkill(null);
                    setFilteredProjects(projectData);
                  }}
                  className="text-sm text-[var(--color-secondary)] hover:text-[#FF6B35] font-medium transition-colors"
                >
                  Clear filter
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-3"> 
              {skills.map(({ name, icon: Icon, color }) => (
                <Button
                  key={name}
                  onClick={() => handleSkillClick(name)}
                  className={`px-4 py-2 rounded-lg hover:cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md ${
                    selectedSkill === name
                      ? "bg-[var(--color-main)] text-white hover:bg-[#7a271b]"
                      : "bg-white text-gray-700 border border-orange-200 hover:bg-orange-50 hover:text-[var(--color-main)] hover:border-[var(--color-secondary)]"
                  }`}
                >
                  <Icon 
                    className="w-5 h-5" 
                    style={{ 
                      color: selectedSkill === name ? 'white' : color 
                    }}
                  />
                  {name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Projects section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">

          {selectedSkill && (
            <div className="mb-6">
              <p className="text-sm text-white">
                Showing projects using: <span className="font-medium">{selectedSkill}</span>
              </p>
            </div>
          )}

          {filteredProjects.map((project, index) => (
            <div 
              className="transition-transform hover:scale-105 hover:cursor-pointer" 
              key={index}
              onClick={() => setSelectedProject(project)}>
                <ProjectCard project={project} />
            </div>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-8 text-center text-gray-600">
              No projects found with the selected skill.
            </div>
          )}
        </div>

        {selectedProject && (
          <ProjectModal 
          project={selectedProject}
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Projects;