export interface Driver {
  id: string;
  status: 'Online' | 'Offline';
  name: string;
  email: string;
  phone: string;
  idNumber: string;
  licenseNumber: string;
}
