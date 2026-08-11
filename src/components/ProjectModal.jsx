// src/components/ProjectModal.jsx
import React from 'react';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <ProjectCaseStudyModal
      project={project}
      onClose={onClose}
      onBack={onClose}
    />
  );
};

export default ProjectModal;
