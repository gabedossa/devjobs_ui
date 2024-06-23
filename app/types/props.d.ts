interface PopupProps {
    state: boolean,
    closeDialog: () => void
  }
  
  interface JobListingProps { 
    jobsListings: JobListing[],
  }