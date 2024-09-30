export type FullName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Teacher = {
  id: string;
  fullname: FullName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  profileImage: string;
  isActive: 'active' | 'inactive';
};
