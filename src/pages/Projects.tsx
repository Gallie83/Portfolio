import { useState, useEffect } from "react";
import { ProjectCard, Project } from "../components/ProjectCard";
import { ProjectModal } from "@/components/modals/ProjectModal";
import projects from "../data/projects.json";

function Projects() {

  const [projectData, setProjectData] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const skills = [
    "React", 
    "Node.js", 
    "Express", 
    "MongoDB", 
    "PostgreSQL", 
    "Django", 
    "TypeScript", 
    "Tailwind", 
    "Bootstrap",
    "Blockchain"
  ]

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
    <div className="container mx-auto px-4 py-12">
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
            {skills.map((skill) => (
              <button
                key={skill}
                onClick={() => handleSkillClick(skill)}
                className={`px-4 py-2 rounded transition-colors ${
                  selectedSkill === skill
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Projects section */}
      <div>
        {selectedSkill && (
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Showing projects using: <span className="font-medium">{selectedSkill}</span>
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