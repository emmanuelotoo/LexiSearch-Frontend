export interface Citation {
  id: string;
  title: string;
  citation: string;
  relation: 'citedBy' | 'cites';
}

export interface Case {
  id: string;
  title: string;
  citation: string;
  court: string;
  jurisdiction: string;
  date: string;
  summary: string;
  judges?: string[];
  parties?: string[];
  proceduralPosture?: string;
  contentHtml?: string;
  contentBlocks?: {
    id: string;
    type: 'heading' | 'paragraph' | 'highlight';
    text: string;
  }[];
}
