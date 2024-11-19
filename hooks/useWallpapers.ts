export interface Wallpaper {
  url: string;
  name: string;
}
export function useWallpapers(): Wallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/image/lossless/response/-NoDPE2iSn-I5spKklTs5w",
      name: "Heritage",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/3z31mvclQ_iNp1Oo3EEkMw",
      name: "Late night",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/3z31mvclQ_iNp1Oo3EEkMw",
      name: "Slow",
    },
  ];
}
