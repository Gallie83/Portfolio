import { useState, useEffect } from "react";
import { ProjectCard, Project } from "../components/ProjectCard";
import projects from "../data/projects.json";

function Projects() {

  const [projectData, setProjectData] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

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
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Skills column */}
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="space-y-2">
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => handleSkillClick(skill)}
                  className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                    selectedSkill === skill
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
            
            {selectedSkill && (
              <button
                onClick={() => {
                  setSelectedSkill(null);
                  setFilteredProjects(projectData);
                }}
                className="mt-4 text-sm text-blue-500 hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
        </div>
        
        {/* Projects column */}
        <div className="w-full md:w-3/4">
          {selectedSkill && (
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                Showing projects using: <span className="font-medium">{selectedSkill}</span>
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index}>
                <ProjectCard project={project} />
              </div>
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="col-span-2 py-8 text-center text-gray-500">
                No projects found with the selected skill.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;