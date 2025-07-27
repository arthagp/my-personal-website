export interface Portofolio {
  id: number;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  techStack: number[];
  urlRepository?: string;
  urlDeployment?: string;
  urlRepoServerSide?: string;
}
