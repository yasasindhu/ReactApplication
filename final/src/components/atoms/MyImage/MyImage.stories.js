import React from "react";

import MyImage from "./MyImage";
import SmallIcon from './bmwlogo.png';

export default {
    title: "Image",
    component: MyImage,
};
const Template = (args) => <MyImage {...args} />;

export const SmallIconStyle = Template.bind({});

SmallIconStyle.args = {
   // src:"https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg",
   src:"./bmwlogo.png", 
   height:"40px",
    width:"40px",
    alt: "An Image"
};

// export const MediumIconStyle = Template.bind({});

// MediumIconStyle.args = {
//     src:"images/bmwlogo.png",
//     height:"50px",
//     width:"50px",
//     alt: "An Image"
// };

// export const LargeIconStyle = Template.bind({});

// LargeIconStyle.args = {
//     src:"images/hplogo.png",
//     height:"80px",
//     width:"80px",
//     alt: "An Image"
// };

// export const PrimaryImageMap = Template.bind({});

// PrimaryImageMap.args = {
//     src:"images/map.png",
//     height:"150px",
//     width:"350px",
//     alt: "An Image"
// };

// export const ImageMapShade = Template.bind({});

// ImageMapShade.args = {
//     ...PrimaryImageMap.args,
//     styles : {
//         boxShadow: '0px 6px 5px #ccc',
//         borderRadius : "10px"
//     }
// };