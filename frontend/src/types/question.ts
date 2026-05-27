export interface CoverLetterQuestion {
  id: number;
  applicationId: number;
  question: string;
  answer: string | null;
  orderIndex: number;
}
