interface JobListing {
    id: number;
    company_name: string;
    job_title: string;
    employment_type: string;
    posted_time: string;
    location: string;
    country?: string;
    logo: string;
    logo_url?: string | null;
    job_url?: string;
    description?: string;
    tags?: string[];
    salary?: string | null;
}