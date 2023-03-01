export interface Package {
  name: string;
  main: string;
  "chromium-args": string;
  window: {
    title: string;
    width: number;
    height: number;
    position: string;
    icon: string;
  };
}
