// Função para buscar uma imagem de gatinho da API The Cat API
export async function getCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url; // Retorna a URL da imagem do gatinho
  } catch (error) {
    console.error('Error fetching cat image:', error);
    throw new Error('Failed to fetch cat image');
  }
}