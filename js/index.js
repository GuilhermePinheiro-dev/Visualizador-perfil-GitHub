const inputSearch = document.querySelector("#input-search")
const inputBtn = document.querySelector("#btn-search")
const profileResults = document.querySelector(".profile-results")

const baseURL = "https://api.github.com"

inputBtn.addEventListener('click', async () => {
    const userName = inputSearch.value

    profileResults.innerHTML="Carregando..."

    try {
        const response = await fetch(`${baseURL}/users/${userName}`)
        profileResults.innerHTML=""

        if (!response.ok) {
            alert("Usuario não encontrado, verifique se está correto!")
            profileResults.innerHTML=""
            return
        }
        
        const userGithub = await response.json()

        profileResults.innerHTML = `
            <div class="card">
                <img src="${userGithub.avatar_url}" alt="foto de perfil" class="profile-card">
                <div class="profile-info">
                    <h2>${userGithub.name}</h2>
                    <span>${userGithub.bio || "Nenhuma bio foi encontrada😔"}</span>
                </div>
            </div>
            
            <div class="section-follow">
                <div class="followers">
                    <h3>👥Seguidores</h3>
                    <span>${userGithub.followers}</span>
                </div>
                <div class="following">
                    <h3>👥Seguindo</h3>
                    <span>${userGithub.following}</span>
                </div>
            </div>
        `
    } catch (error) {
        console.log("Ocorreu um erro ", error);
        profileResults.innerHTML=""
    }

})
