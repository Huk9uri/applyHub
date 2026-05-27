export type ApplicationStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "COFFEE_CHAT"
  | "INTERVIEW"
  | "ACCEPTED"
  | "REJECTED"
  | "ON_HOLD";

export interface ApplicationSummary {
  id: number;
  companyName: string;
  position: string;
  status: ApplicationStatus;
  deadline: string | null;
  portfolioVersion: string | null;
  updatedAt: string;
}
