// This function checks if a business is selected or not. If not, it redirects to the businessAccess page.
// It returns the _id of the business selected.

const istABusinessSelected = () => {
  if (typeof window !== "undefined") {
    const actualBusinessString = localStorage.getItem("businessInfo");
    //parse the string to object
    const actualBusiness = JSON.parse(actualBusinessString);

    if (!actualBusiness) {
      window.location.href = "/businessAccess";
      return false;
    }
    return actualBusiness._id;
  } else {
    return false;
  }
};

export { istABusinessSelected };
