import type { ApplicationStatus } from "@/types/application";

export const applicationStatusLabels: Record<ApplicationStatus, string> = {
  DRAFT: "작성 중",
  SUBMITTED: "제출 완료",
  COFFEE_CHAT: "커피챗",
  INTERVIEW: "면접 예정",
  ACCEPTED: "합격",
  REJECTED: "불합격",
  ON_HOLD: "보류"
};
