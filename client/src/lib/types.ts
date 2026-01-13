export interface CharacterProfile {
  id: string;
  name: string;
  avatar: string;
  standingImg: string;
  details: {
    age?: string;
    disabilityType: string;
    disabilityLevel?: string;
    education: string;
    marriageStatus: string;
    job?: string;
  };
}

export interface DialogueNode {
  type: 'text' | 'choice' | 'data';
  speaker?: string;
  text?: string;
  character?: string | null;
  question?: string;
  options?: Option[];
  dataType?: string;
  title?: string;
}

export interface Option {
  id: string;
  text: string;
  dialogue?: string;
  data?: string;
}

export interface ChapterData {
  [key: string]: DialogueNode[];
}
