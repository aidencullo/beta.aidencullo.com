import React from 'react';
import NYCMeshTextLink from '../../../links/volunteer/NYCMeshTextLink';
import BushwickAyudaMutuaTextLink from '../../../links/volunteer/BushwickAyudaMutuaTextLink';
import NYCDSATextLink from '../../../links/volunteer/NYCDSATextLink';
import DemocracyNowTextLink from '../../../links/volunteer/DemocracyNowTextLink';

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
