import linkedin from "./img/linkedin.png";
import twitter from "./img/twitter.png";
import github from "./img/github.png";

const data = {
  en: {
    name: "Gabriele Dilyte",
    title: "Developer",
    links: {
      title: "Links",
      items: [
        {
          img: linkedin,
          text: "Linkedin/UserName",
          url: "https://linkedin.com/",
          alt: "linkedin logo",
        },
        {
          img: twitter,
          text: "Twitter/userName",
          url: "https://twitter.com/",
          alt: "twitter logo",
        },
        {
          img: github,
          text: "Github/userName",
          url: "https://github.com/",
          alt: "github logo",
        },
      ],
    },
    about: {
      title: "About Me",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum necessitatibus officiis sunt esse! Totam repellatveritatis ullam, aliquid aliquam vitae.",
    },
    education: {
      title: "Education",
      items: [
        {
          school: "School Name",
          period: "2003-2015",
          diploma: "Some Diploma",
        },
        {
          school: "School Name",
          period: "2003-2015",
          diploma: "Some Diploma",
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          position: "Position",
          company: "Company",
          period: "2025 - Present",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatum necessitatibus officiis sunt esse! Totam repellatveritatis ullam, aliquid aliquam vitae ",
          achievements: [
            "Listened to whole DB of records",
            "Make logo",
            "Increase sales",
          ],
        },
        {
          position: "Position",
          company: "Company",
          period: "2025 - Present",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatum necessitatibus officiis sunt esse! Totam repellatveritatis ullam, aliquid aliquam vitae ",
          achievements: [
            "Listened to whole DB of records",
            "Make logo",
            "Increase sales",
          ],
        },
        {
          position: "Position",
          company: "Company",
          period: "2025 - Present",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatum necessitatibus officiis sunt esse! Totam repellatveritatis ullam, aliquid aliquam vitae ",
          achievements: [
            "Listened to whole DB of records",
            "Make logo",
            "Increase sales",
          ],
        },
      ],
    },
    contacts: {
      address: {
        title: "Address",
        street: "Some st. 59",
        city: "Vilnius, Narnia",
      },
      contact_title: "Contacts",
      socials_title: "Socials",
    },
    personal_skills: {
      title: "Personal skills",
      teamwork: "Teamwork",
      communication: "Communication",
      organization: "Organization",
    },
    technical_skills: {
      title: "Technical skills",
    },
  },
  lt: {
    name: "Gabrielė Dilytė",
    title: "Programuotoja",
    links: {
      title: "Nuorodos",
      items: [
        {
          img: linkedin,
          text: "Linkedin/UserName",
          url: "https://linkedin.com/",
          alt: "linkedin logotipas",
        },
        {
          img: twitter,
          text: "Twitter/userName",
          url: "https://twitter.com/",
          alt: "twitter logotipas",
        },
        {
          img: github,
          text: "Github/userName",
          url: "https://github.com/",
          alt: "github logotipas",
        },
      ],
    },
    about: {
      title: "Apie Mane",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum necessitatibus officiis sunt esse! Totam repellatveritatis ullam, aliquid aliquam vitae.",
    },
    education: {
      title: "Išsilavinimas",
      items: [
        {
          school: "Pavadinimas",
          period: "2003-2015",
          diploma: "Diplomas",
        },
        {
          school: "Pavadinimas",
          period: "2003-2015",
          diploma: "Diplomas",
        },
      ],
    },
    experience: {
      title: "Darbo patirtis",
      items: [
        {
          position: "Pozicija",
          company: "Kompanija",
          period: "2025 - Šiuo metu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatum necessitatibus officiis sunt esse! Totam repellatveritatis ullam, aliquid aliquam vitae ",
          achievements: ["Pasiekimas", "Pasiekimas", "Pasiekimas"],
        },
        {
          position: "Pozicija",
          company: "Kompanija",
          period: "2025 - Šiuo metu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatum necessitatibus officiis sunt esse! Totam repellatveritatis ullam, aliquid aliquam vitae ",
          achievements: ["Pasiekimas", "Pasiekimas", "Pasiekimas"],
        },
        {
          position: "Pozicija",
          company: "Kompanija",
          period: "2025 - Šiuo metu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatum necessitatibus officiis sunt esse! Totam repellatveritatis ullam, aliquid aliquam vitae ",
          achievements: ["Pasiekimas", "Pasiekimas", "Pasiekimas"],
        },
      ],
    },
    contacts: {
      address: {
        title: "Adresas",
        street: "Pavadinimas g. 59",
        city: "Vilnius, Narnia",
      },
      contact_title: "Kontaktai",
      socials_title: "Socialiniai tinklai",
    },
    personal_skills: {
      title: "Asmeninės savybės",
      teamwork: "Bendradarbiavimas",
      communication: "Komunikacija",
      organization: "Organizaciniai darbai",
    },
    technical_skills: {
      title: "Techninės žinios",
    },
  },
};

export default data;
