document.addEventListener('DOMContentLoaded', () => {
    // Verificar login
    if (!DB.requireLogin()) return;

    const session = DB.getSession();
    const detailAvatar = document.getElementById('detailAvatar');
    if (session && detailAvatar) {
        detailAvatar.src = session.avatar;
    }

    const DEFAULT_MOVIE_KEY = 'vingadores-doutor-destino';

    // ==========================================
    // 1. RESOLVER O FILME A PARTIR DA URL
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    let movieId = urlParams.get('id') || DEFAULT_MOVIE_KEY;

    let movie = moviesDatabase[movieId];
    if (!movie) {
        // Tenta achar por busca parcial
        const matchedKey = Object.keys(moviesDatabase).find(k => k.includes(movieId) || movieId.includes(k));
        movie = matchedKey ? moviesDatabase[matchedKey] : moviesDatabase[DEFAULT_MOVIE_KEY];
        movieId = matchedKey || DEFAULT_MOVIE_KEY;
    }

    // ==========================================
    // 2. REFERÊNCIAS AOS ELEMENTOS DA PÁGINA
    // ==========================================
    const getEl = id => document.getElementById(id);

    const detailHeroImg = getEl('detailHeroImg');
    const detailMovieLogo = getEl('detailMovieLogo');
    const detailMovieTitle = getEl('detailMovieTitle');
    const detailTagline = getEl('detailTagline');
    const detailAgeBadge = getEl('detailAgeBadge');
    const detailResBadge = getEl('detailResBadge');
    const detailGenre = getEl('detailGenre');
    const detailDescription = getEl('detailDescription');
    const detailSuggestionsGrid = getEl('detailSuggestionsGrid');

    const detailDuration = getEl('detailDuration');
    const detailRelease = getEl('detailRelease');
    const detailGenreFull = getEl('detailGenreFull');
    const detailDirector = getEl('detailDirector');
    const detailCast = getEl('detailCast');
    const detailRating = getEl('detailRating');

    const playTrailerBtn = getEl('detailPlayTrailerBtn');
    const trailerModal = getEl('trailerModal');
    const trailerCloseBtn = getEl('trailerCloseBtn');
    const trailerVideoWrapper = getEl('trailerVideoWrapper');

    const setText = (el, value, fallback = '') => {
        if (el) el.textContent = value || fallback;
    };

    // ==========================================
    // 3. POPULAR OS DADOS DO FILME NA PÁGINA
    // ==========================================
    document.title = `Nobre+ | ${movie.title}`;

    if (detailHeroImg) {
        detailHeroImg.src = movie.heroImg;
        detailHeroImg.alt = movie.title;
    }

    if (movie.logoImg && detailMovieLogo) {
        detailMovieLogo.src = movie.logoImg;
        detailMovieLogo.alt = movie.title;
        detailMovieLogo.style.display = 'block';
        if (detailMovieTitle) detailMovieTitle.style.display = 'none';
    } else {
        if (detailMovieLogo) detailMovieLogo.style.display = 'none';
        if (detailMovieTitle) {
            detailMovieTitle.textContent = movie.title;
            detailMovieTitle.style.display = 'block';
        }
    }

    setText(detailTagline, movie.tagline, 'Disponível no Nobre+');
    setText(detailGenre, movie.genre);
    setText(detailDescription, movie.description);
    setText(detailDuration, movie.duration, '2h 10min');
    setText(detailRelease, movie.release, '2024');
    setText(detailGenreFull, movie.genre);
    setText(detailDirector, movie.director, 'Direção');
    setText(detailCast, movie.cast, 'Elenco Principal');
    setText(detailRating, movie.rating, `${movie.age} anos`);

    if (detailAgeBadge) {
        detailAgeBadge.textContent = movie.age || '12+';
        detailAgeBadge.className = `badge-age ${movie.ageClass || 'r12'}`;
    }

    if (detailResBadge) {
        detailResBadge.textContent = movie.res || '4K HDR';
    }

    // ==========================================
    // 4. RENDERIZAR SUGESTÕES RECOMENDADAS
    // ==========================================
    if (detailSuggestionsGrid) {
        detailSuggestionsGrid.innerHTML = '';
        const suggestions = catalogSuggestions
            .filter(s => s.key !== movieId)
            .slice(0, 6);

        suggestions.forEach(item => {
            const card = document.createElement('a');
            card.href = `detalhes.html?id=${item.key}`;
            card.className = 'suggestion-item-card';
            card.innerHTML = `<img src="${item.img}" alt="${item.title}">`;
            detailSuggestionsGrid.appendChild(card);
        });
    }

    // ==========================================
    // 5. SISTEMA DE ABAS (SUGESTÕES, EXTRAS, DETALHES)
    // ==========================================
    const tabButtons = document.querySelectorAll('.detail-tab-btn');
    const tabPanes = document.querySelectorAll('.detail-tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const activePane = document.getElementById(`tab-${targetTab}`);
            if (activePane) activePane.classList.add('active');
        });
    });

    // ==========================================
    // 6. MODAL DO TRAILER
    // ==========================================
    function openTrailer() {
        const trailerId = movie.trailerId || 'X1aFkAkFASk';
        const embedSrc = buildEmbedUrl(
            trailerId,
            'autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1'
        );
        trailerVideoWrapper.innerHTML = `
            <iframe 
                src="${embedSrc}"
                title="Trailer ${movie.title}"
                referrerpolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        `;
        trailerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeTrailer() {
        if (trailerModal) {
            trailerModal.classList.remove('active');
            trailerVideoWrapper.innerHTML = '';
            document.body.style.overflow = '';
        }
    }

    if (playTrailerBtn) playTrailerBtn.addEventListener('click', openTrailer);
    if (trailerCloseBtn) trailerCloseBtn.addEventListener('click', closeTrailer);

    if (trailerModal) {
        trailerModal.addEventListener('click', (e) => {
            if (e.target === trailerModal) closeTrailer();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeTrailer();
    });
});