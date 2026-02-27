export function renderProfile(userGithub, container, userRepos){
    const renderRepos = userRepos
        .map(repo => `
    <a href="${repo.html_url}" target="_blank">   
        <div class="repo-card">
            <h4>${repo.name}</h4>
            <span>⭐Stars: ${repo.stargazers_count}</span>
            <span>🍴Forks: ${repo.forks_count}</span>
            <span>👀Watchers: ${repo.watchers_count}</span>      
            <span>💻Language: ${repo.language || '—'}</span>
        </div>
    </a>  
        `)
        .join("");

    container.innerHTML = `
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

            <h3 class="titleRepo">Repositórios</h3>
            <div class="container-repo">
            ${renderRepos}
            </div>
        `
}