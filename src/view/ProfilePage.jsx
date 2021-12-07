import React, {Fragment} from "react";
import {Container} from "reactstrap";
import {ListItem} from "../components/listItem/listItem";
import {Separator} from "../components/separator/separator";
import {UserBadge} from "../components/userBadge/userBadge";
import next from "../assets/images/user/next.png";

const profileSettingsList = [
  {
    title: "Your data",
    description: "Update and modify your profile",
    icon: next,
  },
  {
    title: "Privacy",
    description: "Change email and password",
    icon: next,
  },
  {
    title: "Notifications",
    description: "Change notifications settings",
    icon: next,
  },
];

const cardSettingsList = [
  {
    title: "Payment settings",
    description: "Update your payment settings",
    icon: next,
  },
];

const ProfilePage = () => {
  return (
    <Fragment>
      <Container>
        <div className="main-container profile-container">
          <UserBadge
            user={{email: "mauriciotrejo@gmail.com", name: "Mauricio"}}
          />
          <Separator />
          <section style={{paddingTop: 10}}>
            <span>Profile Settings</span>
            {profileSettingsList.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </section>
          <Separator />
          <section style={{paddingTop: 10}}>
            <span>Card Settings</span>
            {cardSettingsList.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </section>
        </div>
      </Container>
    </Fragment>
  );
};

export default ProfilePage;
