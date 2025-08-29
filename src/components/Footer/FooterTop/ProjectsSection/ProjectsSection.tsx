import React from 'react';
import PipenvTextLink from '@links/social/pipenv/PipenvTextLink/PipenvTextLink';
import TrueorFalseTextLink from '@links/projects/TrueorFalseTextLink/TrueorFalseTextLink';
import NoMailTextLink from '@links/projects/NoMailTextLink/NoMailTextLink';
import SeatFinderTextLink from '@links/projects/SeatFinderTextLink/SeatFinderTextLink';
import './ProjectsSection.css';

const ProjectsSection: React.FC = () => {
  const projects = [
    PipenvTextLink,
    TrueorFalseTextLink,
    NoMailTextLink,
    SeatFinderTextLink
  ];

  return (
    <>
    {projects.map((ProjectLinkComponent, index) => (
      <li key={index}>
        <ProjectLinkComponent />
      </li>
    ))}
    </>
  );
};

export default ProjectsSection;
