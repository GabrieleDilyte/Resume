import React, { useState } from "react";

import Separator from "./components/separator";
import Header from "./components/header";
import Pill from "./components/pill";
import ContentBox from "./components/content-box";
import Education from "./components/education";
import Experience from "./components/experience";
import Contacts from "./components/contacts";
import Socials from "./components/socials";

import "./App.css";

import data from "./data";

function App() {
  const [language, setLanguage] = useState("en");
  const {
    links,
    about,
    education,
    experience,
    contacts,
    personal_skills,
    technical_skills,
  } = data[language];

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      <Separator />
      <main className="main">
        <section className="section">
          <ContentBox title={links.title} className="flex-1">
            <div className="content-box__content">
              <ul className="social-list">
                {links.items.map(({ img, text, url, alt }, i) => (
                  <Socials
                    key={i}
                    img={img}
                    text={text}
                    url={url}
                    alt={alt}
                  ></Socials>
                ))}
              </ul>
            </div>
          </ContentBox>
          <ContentBox title={about.title} className="flex-2">
            <div className="content-box__content">
              <p>{about.body}</p>
            </div>
          </ContentBox>
        </section>
        <section className="section">
          <div className="d-flex flex-1">
            <ContentBox title={education.title} className="flex-1">
              <div className="contentbox__content">
                {education.items.map(({ school, period, diploma }, i, arr) => (
                  <Education
                    key={i}
                    school={school}
                    period={period}
                    diploma={diploma}
                    separator={arr.length - 1 !== i && true}
                  ></Education>
                ))}
              </div>
            </ContentBox>
          </div>
          <div className="d-flex flex-2">
            <ContentBox
              title={personal_skills.title}
              className="flex-1 pills-box"
            >
              <div className="contentbox__content d-inline-flex flex-column">
                <Pill color="green">{personal_skills.teamwork}</Pill>
                <Pill color="yellow">{personal_skills.communication}</Pill>
                <Pill color="red">{personal_skills.organization}</Pill>
              </div>
            </ContentBox>
            <ContentBox
              title={technical_skills.title}
              className="flex-1 pills-box"
            >
              <div className="contentbox__content d-inline-flex flex-column">
                <Pill color="green">HTML</Pill>
                <Pill color="yellow">CSS</Pill>
                <Pill color="red">JavaScript</Pill>
              </div>
            </ContentBox>
          </div>
        </section>
        <section className="section">
          <ContentBox title={experience.title} className="flex-1">
            <div className="content-box__content job-experience">
              {experience.items.map(
                (
                  { position, company, period, description, achievements },
                  i
                ) => (
                  <Experience
                    key={i}
                    position={position}
                    company={company}
                    period={period}
                    description={description}
                    achievements={achievements}
                  ></Experience>
                )
              )}
            </div>
          </ContentBox>
        </section>
      </main>
      <footer className="footer">
        <Separator />
        <div className="contacts">
          <Contacts title={contacts.address.title}>
            <p>{contacts.address.street}</p>
            <p>{contacts.address.city}</p>
          </Contacts>
          <Contacts title={contacts.contact_title}>
            <a className="link" href="tel:+3706000333">
              +3706000333
            </a>
            <a className="link" href="mailto:email@test.dev">
              email@test.dev
            </a>
          </Contacts>
          <Contacts title={contacts.socials_title}>
            <a
              className="link"
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin/username
            </a>
            <a
              className="link"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter/username
            </a>
          </Contacts>
        </div>
      </footer>
    </div>
  );
}

export default App;
