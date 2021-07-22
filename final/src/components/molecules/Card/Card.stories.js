import React from 'react';


import NoteCard from'./NoteCard';


export default {
    title: 'molecule/NoteCard',
    component: NoteCard,
    
};

const Template = (args) => <NoteCard {...args} />;


// export const Primary = Template.bind({});

// Primary.args = {
//   value:0,
//   index:0,
//   name:"Reimagining Capitalism In A World On Fire",
//    authorName:"Rebecca Henerson",
//    time:"15-minute read",
//    src:"https://images.blinkist.com/images/books/5f76e2276cee070007d0480d/1_1/250.jpg",
//    clock:"https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg"
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   value:0,
//   index:0,
//   name:"Deep Nutrition",
//   authorName:"Catherine Shanahan",
//   time:"13-miute read",
//   src:"https://images.blinkist.com/images/books/596caa5fb238e1000517dcd8/1_1/250.jpg",
//   clock:"https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg"
   
// };
// Secondary.args = {
//    color: "secondary",
//     variant: "contained",
//    label:"btn label"
   
// };