
export interface GradingResult {
  grade: string;
  stapleLength: string;
  strength: string;
  micronaire: string;
  colorGrade: string;
  trashContent: string;
  explanation: string;
  marketValue: string;
}

export interface MarketData {
  month: string;
  price: number;
}

export enum ServiceType {
  HVI_TESTING = 'HVI Testing',
  VISUAL_GRADING = 'Visual Grading',
  CONTAMINATION_CHECK = 'Contamination Check',
  CERTIFICATION = 'Certification'
}
