export type Guardian = {
  guardianName: string;
  relationship: string;
  contactNumber: string;
  address: string;
};

export type FullName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Student = {
  id: string;
  fullname: FullName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  profileImage: string;
};
