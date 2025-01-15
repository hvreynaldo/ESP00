export interface User {
  username: string;
  role: 'admin' | 'technician' | 'customer';
  fullName?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

export interface Equipment {
  id: string;
  type: string;
  make: string;
  model: string;
  year: string;
  imageUrl: string;
}

export interface InspectionReport {
  id: string;
  date: string;
  customerName: string;
  technicianName: string;
  equipmentId: string;
  orderNumber?: string;
  items: InspectionItem[];
  additionalNotes: string;
  signature: string;
  status: 'draft' | 'submitted' | 'reviewed';
}

export interface InspectionItem {
  id: string;
  category: string;
  name: string;
  condition: 'good' | 'moderate' | 'poor' | null;
  notes: string;
  attachments: File[];
}