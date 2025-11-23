export enum SceneStatus {
  PENDING = 'PENDING',
  GENERATING_IMAGE = 'GENERATING_IMAGE',
  IMAGE_READY = 'IMAGE_READY',
  GENERATING_VIDEO = 'GENERATING_VIDEO',
  VIDEO_READY = 'VIDEO_READY',
  ERROR = 'ERROR'
}

export interface Scene {
  id: string;
  script: string;
  visualPrompt: string;
  duration: number;
  imageUrl?: string; // Base64 or URL
  videoUrl?: string; // Blob URL or Remote URL
  status: SceneStatus;
  audioBuffer?: AudioBuffer; // For TTS playback
}

export interface VoiceConfig {
  id: string;
  name: string;
  gender: 'Male' | 'Female';
  style: string;
  previewUrl?: string;
}

export interface ProjectState {
  script: string;
  scenes: Scene[];
  selectedVoiceId: string;
  isProcessing: boolean;
  activeSceneId: string | null;
}

export type ProjectAction =
  | { type: 'SET_SCRIPT'; payload: string }
  | { type: 'SET_VOICE'; payload: string }
  | { type: 'SET_SCENES'; payload: Scene[] }
  | { type: 'UPDATE_SCENE'; payload: { id: string; updates: Partial<Scene> } }
  | { type: 'SET_ACTIVE_SCENE'; payload: string }
  | { type: 'SET_PROCESSING'; payload: boolean };
