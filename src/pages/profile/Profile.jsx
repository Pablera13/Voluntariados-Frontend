import React from 'react'
import {useEffect, useState} from 'react'
import { Container} from "react-bootstrap";
import ProfileVolunteer from "./ProfileVolunteer";
import ProfileOrganization from "./ProfileOrganization";
import { useAuth } from "../../context/AuthContext";

function Profile() {

  const [isVolunteer, setIsVolunteer] = useState(false);
  const [isOrganization, setIsOrganization] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    if (user !== null) {

      if (user.volunteer != null) {
        setIsVolunteer(true);
      }
      if (user.organization != null) {
        setIsOrganization(true);
      }
    }
  }, [user]);

  return (
    <>
      <Container>
           {isVolunteer ? (
          <ProfileVolunteer/>
        ) : isOrganization ? (
          <ProfileOrganization/>
        ) : ("Loading...")}
      </Container>
    </>
  );
}

export default Profile