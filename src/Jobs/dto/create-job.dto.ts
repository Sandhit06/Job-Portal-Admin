export class CreateJobDto {
    title: string;
    companyName: string;
    location: string;
    jobType: string;
    salaryMin: number;
    salaryMax: number;
    applicationDeadline?: string;
    description: string;
}
