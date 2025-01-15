export interface ChecklistCategory {
  name: string;
  items: string[];
}

export interface InspectionItem {
  id: string;
  condition: 'good' | 'moderate' | 'poor';
  photos: File[];
}

export interface InspectionHistory {
  id: string;
  date: string;
  status: 'pass' | 'fail';
  inspector: {
    username: string;
    fullName: string;
    role: string;
  };
  majorFindings: string[];
  details: InspectionDetails;
}

export interface InspectionDetails {
  items: InspectionItemDetail[];
  comments: string;
  photos: string[];
  signature: string;
  timestamp: string;
}

export interface InspectionItemDetail {
  category: string;
  name: string;
  status: 'pass' | 'fail' | 'na';
  comment?: string;
  photos?: string[];
}