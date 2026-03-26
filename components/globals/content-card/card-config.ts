export interface CardConfig {
  cardHeight: string;
  imageHeight: string;
  cardWidth: string;
}

export function getCardConfig(page?: string): CardConfig {
  switch (page) {
    case 'articles':
      return {
        cardHeight: 'h-[650px] max-[800px]:h-[630px] max-[660px]:h-[600px] max-[560px]:h-[650px] max-[530px]:h-[550px] max-[450px]:h-[530px]',
        imageHeight: 'max-h-[260px]',
        cardWidth: 'w-full'
      };
    
    case 'cases-in-the-news':
      return {
        cardHeight: 'h-[640px] max-[1505px]:h-[670px]  max-[836px]:h-[710px] max-[650px]:h-[650px] max-[530px]:h-[530px] max-[530px]:h-[440px]', // Increased height
        imageHeight: 'h-auto',
        cardWidth: 'w-full'
      };
    
    case 'practice-areas':
      return {
        cardHeight: 'h-[550px] max-[1245px]:h-[560px] max-[1105px]:h-[560px] max-[955px]:h-[540px] max-[800px]:h-[500px]  max-[650px]:h-[550px] max-[530px]:h-[450px] max-[455px]:h-[430px] max-[391px]:h-[480px]',
        imageHeight: 'max-h-[240px] min-h-[240px]', // Increased image height
        cardWidth: 'w-full'
      };
    
    default:
      // Default to articles configuration
      return {
        cardHeight: 'h-[574px] max-[800px]:h-[630px] max-[660px]:h-[574px] max-[530px]:h-[420px]',
        imageHeight: 'h-auto',
        cardWidth: 'w-full'
      };
  }
}
