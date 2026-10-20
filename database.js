const DB = {
    // ==========================================
    // CHAVES DO LOCALSTORAGE
    // ==========================================
    KEYS: {
        USERS: 'nobremas_users',
        SESSION: 'nobremas_session',
        SEARCH_HISTORY: 'nobremas_search_history',
        WATCHLIST: 'nobremas_watchlist',
        PROFILES: 'nobremas_profiles'
    },

    // Limite de perfis por conta (estilo Netflix)
    MAX_PROFILES_PER_ACCOUNT: 5,

    // ==========================================
    // SESSION VALIDATION HELPERS
    // ==========================================
    validateSession(session) {
        if (!session) return false;
        // Verifica se a sessao nao expirou (7 dias)
        const MAX_AGE = 7 * 24 * 60 * 60 * 1000;
        if (session.loginAt && (Date.now() - session.loginAt) > MAX_AGE) {
            this.logout();
            return false;
        }
        // Verifica se o usuario ainda existe
        const users = this.getUsers();
        const userExists = users.find(u => u.id === session.userId);
        if (!userExists) {
            this.logout();
            return false;
        }
        return true;
    },

    // ==========================================
    // USUARIOS
    // ==========================================
    getUsers() {
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.USERS)) || [];
        } catch {
            return [];
        }
    },

    saveUsers(users) {
        localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
    },

    register(username, email, password) {
        const users = this.getUsers();
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Este e-mail ja esta cadastrado.' };
        }
        if (users.find(u => u.username === username)) {
            return { success: false, message: 'Este nome de usuario ja esta em uso.' };
        }
        if (username.length < 3) {
            return { success: false, message: 'O nome de usuario deve ter pelo menos 3 caracteres.' };
        }
        if (password.length < 4) {
            return { success: false, message: 'A senha deve ter pelo menos 4 caracteres.' };
        }

        const userId = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
        const user = {
            id: userId,
            username,
            email,
            password: btoa(password),
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=0072d2&color=fff&bold=true&size=128`,
            createdAt: new Date().toISOString(),
            isMainAccount: true
        };

        users.push(user);
        this.saveUsers(users);

        // Criar perfil principal automaticamente
        this.createProfile(userId, {
            name: username,
            avatar: user.avatar,
            ageRating: '18+',
            language: 'pt-BR',
            audioPref: 'original',
            subtitlePref: 'off',
            isMain: true,
            isKids: false
        });

        return { success: true, message: 'Conta criada com sucesso!' };
    },

    login(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === btoa(password));
        if (!user) {
            return { success: false, message: 'E-mail ou senha incorretos.' };
        }
        const session = { userId: user.id, username: user.username, email: user.email, avatar: user.avatar, loginAt: Date.now() };
        localStorage.setItem(this.KEYS.SESSION, JSON.stringify(session));
        return { success: true, user: session };
    },

    logout() {
        localStorage.removeItem(this.KEYS.SESSION);
        // Não remove perfis, apenas a sessão ativa
    },

    getSession() {
        try {
            const session = JSON.parse(localStorage.getItem(this.KEYS.SESSION));
            // Valida a sessao automaticamente
            if (session && !this.validateSession(session)) {
                return null;
            }
            return session;
        } catch {
            return null;
        }
    },

    isLoggedIn() {
        return this.getSession() !== null;
    },

    requireLogin() {
        if (!this.isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    },

    // NOVO: Forca refresh da sessao (util ao trocar de conta)
    refreshSession() {
        const session = this.getSession();
        if (session) {
            const users = this.getUsers();
            const user = users.find(u => u.id === session.userId);
            if (user) {
                session.username = user.username;
                session.email = user.email;
                session.avatar = user.avatar;
                localStorage.setItem(this.KEYS.SESSION, JSON.stringify(session));
            }
        }
        return this.getSession();
    },

    // ==========================================
    // PERFIS (Múltiplos perfis por conta)
    // ==========================================
    getProfiles(userId) {
        try {
            const allProfiles = JSON.parse(localStorage.getItem(this.KEYS.PROFILES)) || {};
            return allProfiles[userId] || [];
        } catch {
            return [];
        }
    },

    saveProfiles(userId, profiles) {
        try {
            const allProfiles = JSON.parse(localStorage.getItem(this.KEYS.PROFILES)) || {};
            allProfiles[userId] = profiles;
            localStorage.setItem(this.KEYS.PROFILES, JSON.stringify(allProfiles));
        } catch (e) {
            console.error('Erro ao salvar perfis:', e);
        }
    },

    createProfile(userId, profileData) {
        const profiles = this.getProfiles(userId);
        
        if (profiles.length >= this.MAX_PROFILES_PER_ACCOUNT) {
            return { success: false, message: `Limite de ${this.MAX_PROFILES_PER_ACCOUNT} perfis atingido.` };
        }

        const profile = {
            id: 'prof_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
            userId: userId,
            name: profileData.name,
            avatar: profileData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(profileData.name)}&background=d4af37&color=121317&bold=true&size=128`,
            ageRating: profileData.ageRating || '12',
            language: profileData.language || 'pt-BR',
            audioPref: profileData.audioPref || 'original',
            subtitlePref: profileData.subtitlePref || 'off',
            isMain: profileData.isMain || false,
            isKids: profileData.isKids || false,
            createdAt: new Date().toISOString(),
            watchlist: [],
            continueWatching: []
        };

        profiles.push(profile);
        this.saveProfiles(userId, profiles);
        return { success: true, profile };
    },

    getProfile(profileId) {
        const users = this.getUsers();
        for (const user of users) {
            const profiles = this.getProfiles(user.id);
            const profile = profiles.find(p => p.id === profileId);
            if (profile) return profile;
        }
        return null;
    },

    updateProfile(profileId, updates) {
        const users = this.getUsers();
        for (const user of users) {
            const profiles = this.getProfiles(user.id);
            const index = profiles.findIndex(p => p.id === profileId);
            if (index !== -1) {
                profiles[index] = { ...profiles[index], ...updates };
                this.saveProfiles(user.id, profiles);
                return { success: true, profile: profiles[index] };
            }
        }
        return { success: false, message: 'Perfil não encontrado.' };
    },

    deleteProfile(userId, profileId) {
        const profiles = this.getProfiles(userId);
        const profile = profiles.find(p => p.id === profileId);
        
        if (!profile) {
            return { success: false, message: 'Perfil não encontrado.' };
        }
        if (profile.isMain) {
            return { success: false, message: 'Não é possível excluir o perfil principal da conta.' };
        }
        if (profiles.length <= 1) {
            return { success: false, message: 'Deve haver pelo menos um perfil.' };
        }

        const filtered = profiles.filter(p => p.id !== profileId);
        this.saveProfiles(userId, filtered);
        return { success: true };
    },

    setActiveProfile(profileId) {
        const session = this.getSession();
        if (!session) return { success: false, message: 'Sessão inválida.' };

        const profile = this.getProfile(profileId);
        if (!profile || profile.userId !== session.userId) {
            return { success: false, message: 'Perfil não pertence a esta conta.' };
        }

        // Atualiza a sessão com os dados do perfil ativo
        session.activeProfile = {
            id: profile.id,
            name: profile.name,
            avatar: profile.avatar,
            ageRating: profile.ageRating,
            language: profile.language,
            audioPref: profile.audioPref,
            subtitlePref: profile.subtitlePref,
            isKids: profile.isKids
        };
        localStorage.setItem(this.KEYS.SESSION, JSON.stringify(session));
        return { success: true, profile: session.activeProfile };
    },

    getActiveProfile() {
        const session = this.getSession();
        return session?.activeProfile || null;
    },

    // Watchlist específica do perfil ativo
    getProfileWatchlist() {
        const activeProfile = this.getActiveProfile();
        if (!activeProfile) return [];
        
        const session = this.getSession();
        if (!session) return [];
        
        const profiles = this.getProfiles(session.userId);
        const profile = profiles.find(p => p.id === activeProfile.id);
        return profile?.watchlist || [];
    },

    addToProfileWatchlist(movieKey) {
        const activeProfile = this.getActiveProfile();
        const session = this.getSession();
        if (!activeProfile || !session) return false;

        const profiles = this.getProfiles(session.userId);
        const profile = profiles.find(p => p.id === activeProfile.id);
        if (!profile) return false;

        if (!profile.watchlist) profile.watchlist = [];
        if (!profile.watchlist.includes(movieKey)) {
            profile.watchlist.push(movieKey);
            this.saveProfiles(session.userId, profiles);
        }
        return true;
    },

    removeFromProfileWatchlist(movieKey) {
        const activeProfile = this.getActiveProfile();
        const session = this.getSession();
        if (!activeProfile || !session) return false;

        const profiles = this.getProfiles(session.userId);
        const profile = profiles.find(p => p.id === activeProfile.id);
        if (!profile || !profile.watchlist) return false;

        profile.watchlist = profile.watchlist.filter(k => k !== movieKey);
        this.saveProfiles(session.userId, profiles);
        return true;
    },

    isInProfileWatchlist(movieKey) {
        return this.getProfileWatchlist().includes(movieKey);
    },

    // ==========================================
    // HISTORICO DE BUSCA
    // ==========================================
    getSearchHistory() {
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.SEARCH_HISTORY)) || [];
        } catch {
            return [];
        }
    },

    addSearch(query) {
        if (!query || query.trim().length === 0) return;
        const q = query.trim().toLowerCase();
        let history = this.getSearchHistory();
        history = history.filter(item => item.query.toLowerCase() !== q);
        history.unshift({ query: query.trim(), timestamp: Date.now() });
        if (history.length > 20) history = history.slice(0, 20);
        localStorage.setItem(this.KEYS.SEARCH_HISTORY, JSON.stringify(history));
    },

    removeSearch(query) {
        let history = this.getSearchHistory();
        history = history.filter(item => item.query.toLowerCase() !== query.toLowerCase());
        localStorage.setItem(this.KEYS.SEARCH_HISTORY, JSON.stringify(history));
    },

    clearSearchHistory() {
        localStorage.removeItem(this.KEYS.SEARCH_HISTORY);
    },

    // ==========================================
    // BUSCA DE FILMES
    // ==========================================
    searchMovies(query) {
        if (!query || !moviesDatabase) return [];
        const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const results = [];

        Object.entries(moviesDatabase).forEach(([key, movie]) => {
            const searchText = [
                movie.title, movie.genre, movie.description, movie.director, movie.cast, movie.tagline
            ].filter(Boolean).join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

            if (searchText.includes(q)) {
                results.push({ key, ...movie });
            }
        });

        return results;
    },

    // ==========================================
    // MINHA LISTA (WATCHLIST) - Nível de Conta (Legado)
    // NOTA: Use as funções de perfil para watchlist específica do perfil ativo
    // ==========================================
    getWatchlist() {
        // Delega para watchlist do perfil ativo
        return this.getProfileWatchlist();
    },

    addToWatchlist(movieKey) {
        return this.addToProfileWatchlist(movieKey);
    },

    removeFromWatchlist(movieKey) {
        return this.removeFromProfileWatchlist(movieKey);
    },

    isInWatchlist(movieKey) {
        return this.isInProfileWatchlist(movieKey);
    }
};