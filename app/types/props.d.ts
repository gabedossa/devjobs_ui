interface PopupProps {
  state: boolean
  closeDialog: () => void
  onSearch: (location: string, fullTimeOnly: boolean) => void
}

interface JobListingProps {
  jobsListings: JobListing[]
}
