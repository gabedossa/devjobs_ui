interface PopupProps {
  state: boolean
  closeDialog: () => void
  onSearch: (country: string, fullTimeOnly: boolean) => void
  countries: string[]
}

interface JobListingProps {
  jobsListings: JobListing[]
  onJobClick: (job: JobListing) => void
}

interface JobModalProps {
  job: JobListing | null
  onClose: () => void
}
