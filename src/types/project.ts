export interface Portofolio {
  id: number;
  title: string | undefined;
  type: string;
  description: string;
  imageUrl: string;
  urlRepository: string | undefined;
  urlDeployment: string | undefined;
  urlRepoServerSide: string | undefined;
  techStack: number[];
}
