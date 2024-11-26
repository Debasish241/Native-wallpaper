export interface Wallpaper {
  url: string;
  name: string;
}

interface FullWallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.library);
}

export function useWallpapers(): FullWallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/image/lossless/response/-NoDPE2iSn-I5spKklTs5w",
      name: "Night sky",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/bb0dn_goTFCEo6ubnUU9-g",
      name: "Couple",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/3z31mvclQ_iNp1Oo3EEkMw",
      name: "Slow",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/eSzm3ouCSeu7Ts5Y9PEJ5g",
      name: "Map",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/BWzSgOo9S4WHC0Xoc4b7xg",
      name: "Imagine",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/YALDfMhaRI-6krzcCSRcuQ",
      name: "Boy",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/image/lossless/response/qfQbZ8EbQqO6x_1pfOeLxA",
      name: "Art",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/MWt3ivSDQ5qK53Z4ZnvBgA",
      name: "Bear",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/WHad8saeSraYiJ1lS57Fsg",
      name: "Hardworking Cat",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/7erljUjHRj2_T636XuYAow",
      name: "Colors",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/7TLJMBZwQFCbLllfbmVk4g",
      name: "Volcano",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/zWBYMKFVR_CPQ7zVjhikjw",
      name: "Building",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/uDT0LQksTI22uyHDOlhrGw",
      name: "Imagine",
      liked: true,
      suggested: true,
      library: true,
    },
  ];
}
