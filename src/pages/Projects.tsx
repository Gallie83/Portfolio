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
    <div className="mx-20 px-4 py-12 mt-5">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <span className="text-gray-500 italic text-sm">*All projects listed use Git for version control</span>
      </div>
        
      {/* Skills section - horizontal */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Skills</h3>
            {selectedSkill && (
              <button
                onClick={() => {
                  setSelectedSkill(null);
                  setFilteredProjects(projectData);
                }}
                className="text-sm text-blue-500 hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2"> 
            {skills.map(({ name, icon: Icon, color }) => (
              <Button
                key={name}
                onClick={() => handleSkillClick(name)}
                className={`px-4 py-2 text-black rounded-2xl hover:cursor-pointer transition-colors ${
                  selectedSkill === name
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
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
      <div>
        {selectedSkill && (
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Showing projects built using: <span className="font-medium">{selectedSkill}</span>
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              className="transition-transform hover:scale-105 hover:cursor-pointer" 
              key={index}
              onClick={() => setSelectedProject(project)}>
                <ProjectCard project={project} />
            </div>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-8 text-center text-gray-500">
              No projects found with the selected skill.
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
        project={selectedProject}
        isOpen={true}
        onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;