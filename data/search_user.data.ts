export const positiveTest: { query: string } = {
  query: "khavyhana",
};

export const negativeTest: {
  caseName: string;
  query: string;
  errorMessage: string;
}[] = [
  {
    caseName:
      "should show not-found message if enter non-exist username (exact)",
    query: "non-exist username",
    errorMessage: "No user found with that name",
  },
  {
    caseName:
      "should show not-found message if enter non-exist username (contain)",
    query: "khavyh",
    errorMessage: "No user found with that name",
  },
];
