const mockDemoGrant = {
  _id: "demo-grant-123456",
  projectTitle: "Genomic Analysis of Protein-Protein Interactions in Cancer Pathways",
  projectAbstract: "This research project aims to use advanced genomic sequencing and computational modeling to identify and characterize protein-protein interactions within key cancer signaling pathways. By understanding these interactions at the molecular level, we hope to identify novel therapeutic targets for cancer treatment.",
  contactPI: "Dr. Jane Rodriguez",
  organizationName: "Stanford University",
  totalCost: 1250000,
  publicHealthRelevance: "Cancer remains one of the leading causes of death worldwide. This research could lead to the development of more effective and targeted cancer therapies with fewer side effects, potentially improving outcomes for millions of patients.",
  keywords: ["genomics", "cancer", "protein interactions", "computational biology"],
  aiGeneratedSummary: "This research uses genomic sequencing and AI-powered computational modeling to map protein interactions in cancer pathways. By identifying how these proteins communicate and function together, the team aims to discover new drug targets that could disrupt cancer progression. The project combines wet lab experiments with advanced bioinformatics to create detailed 3D models of protein interactions.",
  matchScore: 85,
  matchReason: "This grant shows strong alignment with philanthropists interested in genomics research and cancer therapeutics. The innovative computational approach combined with clear translational potential makes it particularly attractive to funders seeking high-impact projects."
};

import AIDemoSection from './ai-demo-section';

export default function AIDemoServerWrapper() {
  return <AIDemoSection initialDemoGrant={mockDemoGrant} />;
} 