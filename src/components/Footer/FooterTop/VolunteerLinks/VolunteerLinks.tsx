import React from 'react';
import NYCMeshTextLink from '@links/volunteer/NYCMeshTextLink/NYCMeshTextLink';
import BushwickAyudaMutuaTextLink from '@links/volunteer/BushwickAyudaMutuaTextLink/BushwickAyudaMutuaTextLink';
import NYCDSATextLink from '@links/volunteer/NYCDSATextLink/NYCDSATextLink';
import DemocracyNowTextLink from '@links/volunteer/DemocracyNowTextLink/DemocracyNowTextLink';
import './VolunteerLinks.css';

const VolunteerLinks: React.FC = () => {
  const volunteerLinks = [
    NYCMeshTextLink,
    BushwickAyudaMutuaTextLink,
    NYCDSATextLink,
    DemocracyNowTextLink
  ];

  return (
    <>
      {volunteerLinks.map((LinkComponent, index) => (
        <li key={index}>
          <LinkComponent />
        </li>
      ))}
    </>
  );
};

export default VolunteerLinks;
