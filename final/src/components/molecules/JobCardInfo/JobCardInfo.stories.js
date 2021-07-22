import React from "react";

import JobCardInfo from "./JobCardInfo";

export default {
    title: "Job Card Info",
    component: JobCardInfo,
};
const Template = (args) => <JobCardInfo {...args} />;

export const PrimaryJobCardInfo = Template.bind({});


PrimaryJobCardInfo.args = {
    imageSrc : "https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg",
    positionAppliedName : "User Experience Designer",
    companyName : "BMW",
    locationName : "Hitech City Telangana"
};