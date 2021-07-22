import React from 'react';


import CustomTab from'./CustomTab';


export default {
    title: 'organism/CustomTabs',
    component: CustomTab,
    argTypes:{
        color: {
            control: {
              type: 'radio',
              options: ['primary', 'secondary']
            }
          }
        }
};

const Template = (args) => <CustomTab {...args} />;


export const Primary = Template.bind({});

Primary.args = {
  name:"Reimagining Capitalism In A World On Fire",
   authorName:"Rebecca Henerson",
   time:"15-minute read",
   src:"https://images.blinkist.com/images/books/5f76e2276cee070007d0480d/1_1/250.jpg",
   clock:"https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg"
};
