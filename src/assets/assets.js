import logo from "./edulogo.png";
import coverImage from "./cover-image.jpg";
import bgImage from "./background.jpg";
import groupUser from "./group-user.png";
import profieImage from "./profile.webp";
import sponsorImage from "./sponsor-image.webp";
import embozyLogo from "./edulogo.png";
import man1 from "./man1.jpg";
import girl from "./girls.jpg";
import girl2 from "./girls2.webp";
import girl3 from "./girls3.jpg";
import afriChild from "./afriChild.jpg";
import vid1 from "./vid1.mp4";
import vid2 from "./vid2.mp4";
import vid3 from "./vid3.mp4";
import hero1 from "./hero1.jpg";
import hero2 from "./hero2.jpg";
import hero3 from "./hero3.jpg";
import hero4 from "./hero4.jpg";
import hero5 from "./hero5.png";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.webp";
import logo4 from "./logo5.webp";

import {
  Home,
  MessageCircle,
  Search,
  UserIcon,
  Users,
  LogOut,
  Heart,
  VideoIcon,
} from "lucide-react";
import cat from "./cat.mp4";
import dance from "./dance.mp4";

export const videos = { cat, dance, vid1, vid2, vid3 };
export const logos = { logo1, logo2, logo3, logo4 };
export const userImages = {
  man1,
  girl,
  girl2,
  girl3,
  afriChild,
};
export const assets = {
  logo,

  coverImage,
  bgImage,
  groupUser,
  profieImage,
  sponsorImage,
  embozyLogo,
};
export const heroImages = {
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  logo,
};
export const menuItemData = [
  { Icon: Home, label: "Feed", to: "/dashboard" },
  { Icon: Users, label: "Connections", to: "/dashboard/connections" },
  { Icon: MessageCircle, label: "Messages", to: "/dashboard/messages" },
  { Icon: UserIcon, label: "Profile", to: "/dashboard/profile" },
  { Icon: Search, label: "Discover", to: "/dashboard/discover" },
  { Icon: Heart, label: "Interest", to: "/dashboard/interest" },
  { Icon: VideoIcon, label: "Reel", to: "/dashboard/reel" },
];

export const dummyUserData = {
  _id: "user_shhsgx xbdyeueje7383hdbj",
  username: "kunleafolabi",
  email: "admin@email.com",
  full_name: "Kunle Afolabi",
  profile_picture:
    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1696343783/social-media/kunleafolabi_uxb6kq.jpg",
  bio: "Dreamer| Learner|Doer Web developer and tech enthusiast. Love to create and innovate.",
  cover_photo:
    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1696343783/social-media/cover-image_ww4m8r.jpg",
  location: "Lagos, Nigeria",
  followers: ["user_1", "user_2", "user_3"],
  following: ["user_4", "user_5"],
  connections: ["user_6", "user_7"],
  posts: ["post_1", "post_2"],
  created_at: "2023-10-03T12:00:00Z",
  is_verified: true,
};

export const dummyUser2Data = {
  ...dummyUserData,

  _id: "user_2",
  username: "johndoe",
  email: "john@gmail.com",
  full_name: "John Doe",
  profile_picture:
    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1696343783/social-media/johndoe_wxqv4m.jpg",
};

export const dummyUser3Data = {
  ...dummyUserData,

  _id: "user_3",
  username: "jackdoe",
  email: "jack@gmail.com",
  full_name: "jack Doe",
  profile_picture:
    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1696343783/social-media/johndoe_wxqv4m.jpg",
};
export const dummyUser4Data = {
  ...dummyUserData,

  _id: "user_4",
  username: "rnwhite",
  email: "ran@gmail.com",
  full_name: "ran white",
  profile_picture:
    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1696343783/social-media/johndoe_wxqv4m.jpg",
};
export const dummyStoryData = [
  {
    _id: "425262727285161728290022",
    user: dummyUserData,
    image:
      "https://res.cloudinary.com/dzcmadjl1/image/upload/v1696343783/social-media/kunleafolabi_uxb6kq.jpg",
    createdAt: "2023-10-03T12:00:00Z",
    content: "This is my first story",
    media_type: "image",
    media_url: "",
    background_color: "#ff5733",
    createdAt: "2023-10-04T12:00:00Z",
    updatedAt: "2023-10-04T12:00:00Z",
  },
  {
    _id: "425262727285161728290022",
    user: dummyUserData,

    createdAt: "2023-10-03T12:00:00Z",
    content: "This is my second story",
    media_type: "text",
    media_url:
      "https://res.cloudinary.com/dzcmadjl1/image/upload/v1696343783/social-media/kunleafolabi_uxb6kq.jpg",
    background_color: "#ff5733",
    createdAt: "2023-10-04T12:00:00Z",
    updatedAt: "2023-10-04T12:00:00Z",
  },

  {
    _id: "425262727285161728290022",
    user: dummyUserData,

    createdAt: "2023-10-03T12:00:00Z",
    content: "This is my second story",
    media_type: "video",
    media_url: "https://www.w3schools.com/html/mov_bbb.mp4",

    background_color: "#ff5733",
    createdAt: "2023-10-04T12:00:00Z",
    updatedAt: "2023-10-04T12:00:00Z",
  },
];
