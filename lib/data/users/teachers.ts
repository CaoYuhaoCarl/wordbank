import { Teacher } from './user-types';

export const teachersData: Teacher[] = [
  {
    id: "t1",
    name: "Dr. Sarah Wilson",
    email: "sarah@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    joinedAt: "2023-12-01",
    specializations: [
      {
        area: "TOEFL Preparation",
        yearsExperience: 8,
        certifications: ["TESOL", "TOEFL Trainer Certification"]
      },
      {
        area: "Academic English",
        yearsExperience: 10,
        certifications: ["CELTA", "Academic English Specialist"]
      }
    ],
    classIds: ["c1", "c4"],
    education: "Ph.D. in Applied Linguistics",
    totalStudentsTaught: 450
  },
  {
    id: "t2",
    name: "Prof. Michael Brown",
    email: "michael@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    joinedAt: "2023-12-01",
    specializations: [
      {
        area: "Business English",
        yearsExperience: 12,
        certifications: ["DELTA", "Business English Certificate"]
      }
    ],
    classIds: ["c2"],
    education: "MBA, M.Ed. in TESOL",
    totalStudentsTaught: 380
  },
  {
    id: "t3",
    name: "Lisa Zhang",
    email: "lisa@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    joinedAt: "2024-01-05",
    specializations: [
      {
        area: "Beginner English",
        yearsExperience: 5,
        certifications: ["TEFL", "Young Learners Specialist"]
      }
    ],
    classIds: ["c3"],
    education: "M.A. in Education",
    totalStudentsTaught: 200
  },
  {
    id: "t4",
    name: "James Anderson",
    email: "james@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    joinedAt: "2024-01-10",
    specializations: [
      {
        area: "Conversation Skills",
        yearsExperience: 7,
        certifications: ["CELTA", "Public Speaking Coach"]
      }
    ],
    classIds: ["c5"],
    education: "B.A. in English Literature, DELTA",
    totalStudentsTaught: 280
  }
];