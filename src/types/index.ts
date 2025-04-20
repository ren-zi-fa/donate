import React from "react";

type Position =
  | "Development Director"
  | "Volunteer Coordinator"
  | "Program Director ";

export interface ITeamMember {
  name: string;
  position: Position;
  image: string;
}

export  interface ICauses {
  title: string;
  tagLine: string;
  description: string;
  image: string;
}

export interface IActivity {
  title: string;
  description: string;
  icon: React.ComponentType | React.ElementType;
}
