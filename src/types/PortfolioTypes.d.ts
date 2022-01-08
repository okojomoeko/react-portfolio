export interface Work {
  Name: string;
  OverView: string;
  Description: string;
  ImgPath: string;
  Technology: string[];
}

export interface AboutData {
  YearHeader: string;
  MainHeader: string;
  Description: string;
}

export interface SkillsList {
  Languages: string[];
  Technology: string[];
  Qualification: string[];
}

export interface InterestsList {
  Title: string;
  InterestsList: string[];
}

declare module '../assets/works_template.json' {
  const works: Work[];
  export default works;
}

declare module '../assets/about_template.json' {
  const aboutData: AboutData[];
  export default aboutData;
}

declare module '../assets/skills_template.json' {
  const skillsList: SkillsList;
  export default skillsList;
}

declare module '../assets/interests_template.json' {
  const interestsList: InterestsList[];
  export default interestsList;
}
