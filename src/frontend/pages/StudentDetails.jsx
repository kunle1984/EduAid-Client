import { heroImages } from "../../assets/assets";
const { hero1, hero2, hero3, hero4, hero5 } = heroImages;
import PageDetails from "../components/PageDetails";

const sampleEvent = {
  title: "Give African Children A Good Education",
  date: "02 Apr 2021",
  location: "684 West College St, Sun City, USA",
  image: hero3,
  description:
    "Charity and Donation involves giving financial or material support to social causes...",
  summary:
    "Empowering children through education ensures a better future and stronger communities.",
  highlights: {
    left: [
      "Empower Through Charity",
      "Healing Communities",
      "Compassion in Action",
    ],
    right: [
      "Giving Hope, Changing Lives",
      "Together We Can",
      "Every Act Counts",
    ],
  },
  gallery: [hero2, hero4, hero5],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.41500386934!2d-0.11954363068773122!3d51.50329745025402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900000001%3A0x3a856d3ef7b89e62!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1696449600000!5m2!1sen!2suk",
  comments: [
    {
      author: "Martha Grey",
      avatar: hero2,
      text: "Education changes everything — amazing initiative!",
      time: "2 days ago",
    },
  ],
  cta: {
    subtitle: "Small Donations Bigger Impact",
    title: "Education Health for Every Child",
    button: "Sponsor this student →",
  },
};

const samplePosts = [
  {
    title: "Where Innovation Meets Foundation",
    date: "October 10, 2022",
    image: hero1,
  },
  {
    title: "Quality Builds, Trusted Foundations",
    date: "October 7, 2022",
    image: hero5,
  },
  {
    title: "Structures That Stand, Dreams That Soar",
    date: "October 3, 2022",
    image: hero3,
  },
];

const sampleTags = [
  "Builders",
  "Construction",
  "Skyline",
  "Structures",
  "Foundation",
];

function StudentDetails() {
  return (
    <PageDetails
      event={sampleEvent}
      recentPosts={samplePosts}
      tags={sampleTags}
    />
  );
}

export default StudentDetails;
