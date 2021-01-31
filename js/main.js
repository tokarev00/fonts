const logo = document.querySelector('.logo__title');

logo.onclick = startLogoRoadMap;
// logo.addEventListener('click', startLogoRoadMap);


function startLogoRoadMap(){
    let sansSerif = document.createElement('h2');
    let serif = document.createElement('h2');
    let logoContent = document.querySelector('.logo__content');
    sansSerif.classList.add('logo-chield');
    sansSerif.innerHTML = 'Може Санс Серіф?';
    serif.innerHTML = 'Чи просто Серіф?';
    serif.classList.add('logo-chield');
    serif.classList.add('logo-chield');
    logoContent.append(sansSerif);
    logoContent.append(serif);

    sansSerif.onclick = function(){
        let likeGeometry = document.createElement('h2');
        let yesAndnoList = document.createElement('ul');
        likeGeometry.classList.add('logo-chield');
        likeGeometry.innerHTML = 'любиш Геометрію?';
        yesAndnoList.classList.add('logo-chield');
        yesAndnoList.innerHTML = '<li>Так</li><li>Ні</li>';
        logoContent.append(likeGeometry);
        logoContent.append(yesAndnoList);
        yesLikeGeometry = document.querySelector('ul.logo-chield li:first-child');

        yesLikeGeometry.onclick = function(){
            let likeFuture = document.createElement('h2');
            let yesAndnoList = document.createElement('ul');
            likeFuture.classList.add('logo-chield-second-level');
            likeFuture.innerHTML = 'Любиш Фурут?';
            yesAndnoList.classList.add('logo-chield-second-level');
            yesAndnoList.innerHTML = '<li>Так</li><li>Ні</li>';
            logoContent.append(likeFuture);
            logoContent.append(yesAndnoList);
        }
    }
}
