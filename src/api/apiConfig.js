const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b451fab207125f8c5aa7b2eb0c97e7d6',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;