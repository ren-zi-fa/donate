import { IActivity, ICauses, ITeamMember } from "@/types";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import { HandPlatter, Hospital, School } from "lucide-react";
import imagecourse from "@/assets/courses-1.jpg";
import imagecourse2 from "@/assets/courses-2.jpg";
import imagecourse3 from "@/assets/courses-3.jpg";

export const TeamMember: ITeamMember[] = [
  {
    name: "John Doe",
    position: "Development Director",
    image: team1,
  },
  {
    name: "Astri",
    position: "Program Director ",
    image: team2,
  },
  {
    name: "Jane",
    position: "Volunteer Coordinator",
    image: team3,
  },
  {
    name: "Alex",
    position: "Program Director ",
    image: team4,
  },
] as const;

export const activityItems: IActivity[] = [
  {
    title: "Child Education",
    description: "Bersama, Kita Buka Pintu Pendidikan untuk Setiap Anak.",
    icon: School,
  },
  {
    title: "Medical Treatment",
    description: "Bersama, Kita Bisa Memberikan Akses Kesehatan yang Layak.",
    icon: Hospital,
  },
  {
    title: "Pure Drinking Water",
    description:
      "Air Bersih untuk Hari Ini, Masa Depan yang Lebih Baik untuk Besok.",
    icon: HandPlatter,
  },
] as const;

export const causes: ICauses[] = [
  {
    title: "Pendidikan",
    tagLine: "Mengatasi Krisis Air Bersih",
    description:
      "Donasi ini dikhususkan untuk memberikan akses pendidikan bagi anak-anak kurang mampu, membantu mereka meraih peluang yang lebih baik di masa depan",
    image: imagecourse,
  },
  {
    title: "Air Bersih",
    tagLine: "Mengatasi Krisis Air Bersih",
    description:
      "Donasi Anda menyediakan akses air bersih dan sanitasi layak bagi masyarakat terdampak",
    image: imagecourse2,
  },
  {
    title: "Kehidupan yang sehat",
    tagLine: "Bantu Wujudkan Akses Pengobatan",
    description:
      "Donasi Anda memberikan akses pengobatan dan perawatan kesehatan bagi mereka yang membutuhkan",
    image: imagecourse3,
  },
] as const;
