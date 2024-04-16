const userPopulate = {
  path: "createdBy",
  select: "_id name user_type email",
};
const feedbackPopulate = {
  path: "feedback",
  select: "_id comment rating courseId",
};

export { userPopulate, feedbackPopulate };
