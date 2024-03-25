const axios = require('axios');

// Função para obter a última postagem de uma página do Instagram
async function getUltimaPostagem(usuario) {
    try {
        const response = await axios.get(`https://graph.instagram.com/${usuario}/media?fields=id,media_url,caption&access_token=`);
        const ultimaPostagem = response.data.data[0]; // Última postagem é o primeiro item do array de dados
        return ultimaPostagem;
    } catch (error) {
        console.error('Erro ao obter última postagem do Instagram:', error);
        return null;
    }
}

// Usar a função para obter a última postagem de uma página do Instagram
getUltimaPostagem('ministerio_jovem_jardim_novo').then((postagem) => {
    if (postagem) {
        console.log('Última postagem do Instagram:', postagem);
    } else {
        console.log('Nenhuma postagem encontrada.');
    }
});
