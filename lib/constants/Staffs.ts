import { StaffCardProps } from "../interfaces";
import { principal, vc, acc, teacher1, teacher2 } from "../imports";
export const staffLists: StaffCardProps[] = [
  {
    image: principal,
    name: "Mr. Madan Kumar Tamang",
    role: "Principal",
    category: "BOD",
  },
  {
    image: vc,
    name: "Mrs. Phesi Maya Jirel",
    role: "Vice Principal",
    category: "BOD",
  },
  {
    image: acc,
    name: "Mr. Tapindra Khadka",
    role: "Accountant",
    category: "BOD",
  },
  {
    image: teacher2,
    name: "Mr. Dil Bahadur Sunuwar",
    role: "Teacher",
    category: "BOD",
  },

  {
    image: teacher1,
    name: "Mr. Nirmal Thapa",
    role: "Teacher",
    category: "Staff",
  },
];
