import React from 'react';
import NYCMeshTextLink from '../../links/volunteer/NYCMeshTextLink';
import BushwickAyudaMutuaTextLink from '../../links/volunteer/BushwickAyudaMutuaTextLink';
import NYCDSATextLink from '../../links/volunteer/NYCDSATextLink';
import DemocracyNowTextLink from '../../links/volunteer/DemocracyNowTextLink';

const VolunteerLinks: React.FC = () => {
  return (
    <>
      <li>
        <NYCMeshTextLink />
      </li>
      <li>
        <BushwickAyudaMutuaTextLink />
      </li>
      <li>
        <NYCDSATextLink />
      </li>
      <li>
        <DemocracyNowTextLink />
      </li>
    </>
  );
};

export default VolunteerLinks;
