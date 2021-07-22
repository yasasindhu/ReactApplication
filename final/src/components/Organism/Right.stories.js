import React from "react";

import Right from "./Right";

export default {
    title: "Right",
    component: Right,
};
const Template = (args) => <Right {...args} />;

export const PrimaryRight = Template.bind({});


PrimaryRight.args = {
    imageSrc : "https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg",
    positionAppliedName : "User Experience Designer",
    companyName : "BMW",
    locationName : "Hitech City Telangana",
    head: "Description",
    body : "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
    title:"What it takes",
    text: ["High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.","Excellent written and oral communication and presentation skills ","Excellent written and oral communication and presentation skills"],
};