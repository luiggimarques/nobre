// ==========================================
// BASE DE DADOS DOS FILMES (COMPARTILHADA)
// ==========================================
const moviesDatabase = {
    "vingadores-doutor-destino": {
        title: "Vingadores: Doutor Destino",
        tagline: "Trailer da estreia no cinema já disponível",
        heroImg: "images/logo1.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/j8ThEXgdGWYg1uWdSqygOSnlIA2.jpg",
        logoImg: "images/logo2.png",
        age: "14+",
        ageClass: "r14",
        res: "4K HDR",
        genre: "Super-Heróis, Ação e aventura",
        description: "Prepare-se para 'Vingadores: Doutor Destino' da Marvel Studios, em dezembro de 2026, só nos cinemas.",
        trailerId: "X1aFkAkFASk",
        duration: "2h 45min",
        release: "Dezembro de 2026",
        director: "Anthony e Joe Russo",
        cast: "Robert Downey Jr., Pedro Pascal, Vanessa Kirby, Benedict Cumberbatch",
        rating: "14 anos"
    },
    "homem-aranha": {
        title: "Homem-Aranha: Um Novo Dia",
        tagline: "Uma nova era para o herói da vizinhança",
        heroImg: "images/movie-2.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K Ultra HD",
        genre: "Ação • Comédia • Super-Heróis",
        description: "Peter Parker tenta reconstruir sua vida mantendo o manto do Homem-Aranha, enquanto novas ameaças emergem em Nova York.",
        trailerId: "PlulyWs1kS4",
        duration: "2h 28min",
        release: "Julho de 2026",
        director: "Destin Daniel Cretton",
        cast: "Tom Holland, Zendaya, Jacob Batalon",
        rating: "12 anos"
    },
    "homem-aranha-sem-volta-para-casa": {
        title: "Homem-Aranha: Sem Volta Para Casa",
        tagline: "O multiverso foi desvendado",
        heroImg: "https://image.tmdb.org/t/p/w1280/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K Ultra HD",
        genre: "Ação • Ficção • Aventura",
        description: "Com a identidade revelada, Peter pede a ajuda do Doutor Estranho, mas um feitiço dá errado e atrai os maiores vilões do multiverso.",
        trailerId: "TcMBFSGVi1c",
        duration: "2h 28min",
        release: "2021",
        director: "Jon Watts",
        cast: "Tom Holland, Zendaya, Benedict Cumberbatch, Willem Dafoe",
        rating: "12 anos"
    },
    "moana-2": {
        title: "Moana 2",
        tagline: "O oceano está chamando para uma nova aventura",
        heroImg: "https://image.tmdb.org/t/p/w1280/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
        thumb: "images/moana2.jpg",
        age: "L",
        ageClass: "l",
        res: "4K HDR",
        genre: "Aventura • Musical • Família",
        description: "Após receber uma convocação inesperada de seus ancestrais navegadores, Moana viaja para os mares distantes da Oceania e entra em águas perigosas para uma aventura sem precedentes.",
        trailerId: "hDZ7y8RP5HE",
        duration: "1h 40min",
        release: "Novembro de 2024",
        director: "David G. Derrick Jr., Jason Hand, Dana Ledoux Miller",
        cast: "Auli'i Cravalho, Dwayne Johnson, Alan Tudyk, Rachel House",
        rating: "Livre para todos os públicos"
    },
    "capitao-america-guerra-civil": {
        title: "Capitão América: Guerra Civil",
        tagline: "Unidos venceremos. Divididos cairemos.",
        heroImg: "https://image.tmdb.org/t/p/w1280/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/wdwcOBMkt3zmPQuEMxB3FUtMio2.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K Ultra HD",
        genre: "Ação • Aventura • Marvel",
        description: "Quando o governo busca controlar os Vingadores através dos Acordos de Sokovia, Capitão América e Homem de Ferro entram em confronto ideológico e físico, dividindo a equipe de heróis em dois lados em conflito.",
        trailerId: "dKrVegVI0Us",
        duration: "2h 27min",
        release: "2016",
        director: "Anthony e Joe Russo",
        cast: "Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Chadwick Boseman",
        rating: "12 anos"
    },
    "avatar-o-caminho-da-agua": {
        title: "Avatar: O Caminho da Água",
        tagline: "Retorne ao mundo de Pandora",
        heroImg: "https://image.tmdb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K IMAX",
        genre: "Ficção • Aventura • Ação",
        description: "Jake Sully e Ney'tiri formaram uma família e fazem de tudo para ficar juntos. Eles devem deixar sua casa e explorar as regiões de Pandora, enfrentando uma ameaça antiga que retornou.",
        trailerId: "d9MyW72ELq0",
        duration: "3h 12min",
        release: "2022",
        director: "James Cameron",
        cast: "Sam Worthington, Zoe Saldaña, Sigourney Weaver, Stephen Lang",
        rating: "12 anos"
    },
    "mufasa-o-rei-leao": {
        title: "Mufasa: O Rei Leão",
        tagline: "A lenda do rei que uniu a savana",
        heroImg: "https://image.tmdb.org/t/p/w1280/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg",
        thumb: "images/mufasa.jpg",
        age: "L",
        ageClass: "l",
        res: "4K HDR",
        genre: "Drama • Aventura • Família",
        description: "A emocionante história de como Mufasa, um filhote órfão e perdido, conhece o herdeiro real Taka e se transforma em um dos reis mais respeitados e lendários de toda a Savana.",
        trailerId: "o17MF9vnabg",
        duration: "2h 00min",
        release: "Dezembro de 2024",
        director: "Barry Jenkins",
        cast: "Aaron Pierre, Kelvin Harrison Jr., Seth Rogen, Billy Eichner, Beyoncé Knowles-Carter",
        rating: "Livre para todos os públicos"
    },
    "vingadores-ultimato-encore": {
        title: "Vingadores: Ultimato Encore",
        tagline: "Parte da jornada é o fim",
        heroImg: "images/movie-6.jpg",
        logoImg: "images/logo-vingadores-ultimato.png",
        age: "14+",
        ageClass: "r14",
        res: "4K IMAX",
        genre: "Ação • Sci-Fi • Super-Heróis",
        description: "Após os eventos devastadores de Thanos, os heróis sobreviventes se reúnem em um plano épico para restaurar a ordem no universo.",
        trailerId: "HiAzj9HZQnE",
        duration: "3h 01min",
        release: "2019",
        director: "Anthony e Joe Russo",
        cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        rating: "14 anos"
    },
    "vingadores-ultimato": {
        title: "Vingadores: Ultimato",
        tagline: "Parte da jornada é o fim",
        heroImg: "images/movie-6.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg",
        logoImg: "images/logo-vingadores-ultimato.png",
        age: "14+",
        ageClass: "r14",
        res: "4K IMAX",
        genre: "Ação • Sci-Fi • Super-Heróis",
        description: "Após os eventos devastadores de Thanos, os heróis sobreviventes se reúnem em um plano épico para restaurar a ordem no universo.",
        trailerId: "HiAzj9HZQnE",
        duration: "3h 01min",
        release: "2019",
        director: "Anthony e Joe Russo",
        cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        rating: "14 anos"
    },
    "vingadores-guerra-infinita": {
        title: "Vingadores: Guerra Infinita",
        tagline: "Uma batalha em escala universal. Um destino inevitável.",
        heroImg: "https://image.tmdb.org/t/p/w1280/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg",
        logoImg: "images/logo-guerra-infinita.png",
        age: "12+",
        ageClass: "r12",
        res: "4K IMAX",
        genre: "Ação • Ficção Científica • Super-Heróis",
        description: "Thanos chega à Terra em busca das Joias do Infinito. Os Vingadores e seus aliados precisam se unir para impedir que o titã louco dizime metade do universo.",
        trailerId: "6ZfuNTqbHE8",
        duration: "2h 29min",
        release: "2018",
        director: "Anthony e Joe Russo",
        cast: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Benedict Cumberbatch, Josh Brolin",
        rating: "12 anos"
    },
    "five-nights-at-freddys-2": {
        title: "Five Nights at Freddy's 2",
        tagline: "O terror volta ainda mais sombrio",
        heroImg: "https://i.pinimg.com/1200x/8b/31/70/8b3170ce0bc3441bececf07c07ea534c.jpg",
        age: "16+",
        ageClass: "r16",
        res: "4K HDR",
        genre: "Terror • Mistério • Suspense",
        description: "Novos animatrônicos e mistérios ainda mais perigosos aguardam aqueles que se atreverem a entrar novamente na Freddy's.",
        trailerId: "BRgIfY6YyZc",
        duration: "2h 05min",
        release: "2025",
        director: "Emma Tammi",
        cast: "Josh Hutcherson, Piper Rubio, Matthew Lillard",
        rating: "16 anos"
    },
    "vingadores-era-de-ultron": {
        title: "Vingadores: A Era de Ultron",
        tagline: "Nem todos os fios podem ser cortados",
        heroImg: "images/avengers.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/uvzqTsRmUzk9mJVzX8cMSWMyM5l.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K Ultra HD",
        genre: "Ação • Marvel • Ficção",
        description: "Tony Stark cria uma inteligência artificial para proteger a Terra, mas o programa se torna autônomo e decide erradicar a humanidade.",
        trailerId: "lGO6FcnZ0ek",
        duration: "2h 21min",
        release: "2015",
        director: "Joss Whedon",
        cast: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Scarlett Johansson",
        rating: "12 anos"
    },
    "one-piece-film-red": {
        title: "One Piece Film: Red",
        tagline: "A voz que vai mudar o mundo",
        heroImg: "images/one piece.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Anime • Ação • Musical",
        description: "Uta, a cantora mais famosa do mundo, realiza um concerto em uma ilha isolada revelando sua conexão com o lendário Shanks.",
        trailerId: "JvqcaQJgr-A",
        duration: "1h 55min",
        release: "2022",
        director: "Goro Taniguchi",
        cast: "Mayumi Tanaka, Kaori Nazuka, Ado, Shuichi Ikeda",
        rating: "12 anos"
    },
    "demon-slayer-castelo-infinito": {
        title: "Demon Slayer: Castelo Infinito",
        tagline: "A batalha final contra Muzan Kibutsuji",
        heroImg: "images/akaza.jpg",
        age: "16+",
        ageClass: "r16",
        res: "HD 60FPS",
        genre: "Anime • Ação • Fantasia",
        description: "Tanjiro e os Hashiras são arrastados para a fortaleza dimensional de Muzan, enfrentando as Luas Superiores em combates mortais.",
        trailerId: "x7uLutVRBfI",
        duration: "2h 10min",
        release: "2025",
        director: "Haruo Sotozaki",
        cast: "Natsuki Hanae, Akari Kito, Hiro Shimono, Takahiro Sakurai",
        rating: "16 anos"
    },
    "the-batman": {
        title: "The Batman",
        tagline: "Desmascare a verdade",
        heroImg: "https://i.pinimg.com/1200x/ad/82/6f/ad826fa719baeaa7f44ffa1042f8ce88.jpg",
        age: "14+",
        ageClass: "r14",
        res: "4K HDR",
        genre: "Ação • Suspense • Policial",
        description: "Em seu segundo ano combatendo o crime, Batman investiga uma série de assassinatos sádicos cometidos pelo Charada em Gotham City.",
        trailerId: "761uRaAuMo4",
        duration: "2h 56min",
        release: "2022",
        director: "Matt Reeves",
        cast: "Robert Pattinson, Zoë Kravitz, Paul Dano, Colin Farrell",
        rating: "14 anos"
    },
    "carros": {
        title: "Carros",
        tagline: "A vida é uma viagem, não um destino",
        heroImg: "images/carros.jpg",
        age: "L",
        ageClass: "l",
        res: "4K HDR",
        genre: "Animação • Comédia • Família",
        description: "O famoso carro de corrida Relâmpago McQueen se perde na esquecida cidade de Radiator Springs e descobre o verdadeiro valor da amizade.",
        trailerId: "b7hG_nZ9J0g",
        duration: "1h 57min",
        release: "2006",
        director: "John Lasseter",
        cast: "Owen Wilson, Larry the Cable Guy, Paul Newman",
        rating: "Livre para todos os públicos"
    },
    "carros-2": {
        title: "Carros 2",
        tagline: "A toda velocidade pelo mundo",
        heroImg: "images/carros2.jpg",
        age: "L",
        ageClass: "l",
        res: "4K HDR",
        genre: "Animação • Espionagem • Aventura",
        description: "McQueen compete no Gran Prix Mundial, enquanto seu melhor amigo Mate se envolve acidentalmente em uma missão de espionagem internacional.",
        trailerId: "oFTfAdauCOo",
        duration: "1h 46min",
        release: "2011",
        director: "John Lasseter, Brad Lewis",
        cast: "Owen Wilson, Larry the Cable Guy, Michael Caine",
        rating: "Livre para todos os públicos"
    },
    "carros-3": {
        title: "Carros 3",
        tagline: "Nunca desista da sua corrida",
        heroImg: "https://i.pinimg.com/1200x/b4/31/3c/b4313c71fa8799b1bf850659cf8c11d1.jpg",
        age: "L",
        ageClass: "l",
        res: "4K HDR",
        genre: "Animação • Aventura • Família",
        description: "Surpreendido por uma nova geração de corredores ultrarrápidos, o lendário Relâmpago McQueen é repentinamente afastado do esporte que ama.",
        trailerId: "2LeOH9AGJQM",
        duration: "1h 42min",
        release: "2017",
        director: "Brian Fee",
        cast: "Owen Wilson, Cristela Alonzo, Chris Cooper",
        rating: "Livre para todos os públicos"
    },
    "alvin": {
        title: "Alvin e os Esquilos",
        tagline: "Música, diversão e muita confusão",
        heroImg: "images/alvim.jpg",
        age: "L",
        ageClass: "l",
        res: "HD",
        genre: "Comédia • Família • Musical",
        description: "Três esquilos muito falantes e com enorme talento musical transformam a casa de um compositor solitário em uma fábrica de sucessos.",
        trailerId: "m1tO1hY22pY",
        duration: "1h 32min",
        release: "2007",
        director: "Tim Hill",
        cast: "Jason Lee, Justin Long, Matthew Gray Gubler",
        rating: "Livre para todos os públicos"
    },
    "doutor-estranho-no-multiverso-da-loucura": {
        title: "Doutor Estranho no Multiverso da Loucura",
        tagline: "Entre em uma nova dimensão do desconhecido",
        heroImg: "https://image.tmdb.org/t/p/w1280/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
        age: "14+",
        ageClass: "r14",
        res: "4K IMAX",
        genre: "Ficção • Ação • Fantasia",
        description: "O Doutor Estranho viaja pelas realidades misteriosas e perigosas do Multiverso para proteger uma jovem com poderes inimagináveis.",
        trailerId: "aWzlQ2N6qqg",
        duration: "2h 06min",
        release: "2022",
        director: "Sam Raimi",
        cast: "Benedict Cumberbatch, Elizabeth Olsen, Xochitl Gomez",
        rating: "14 anos"
    },
    "pantera-negra-wakanda-para-sempre": {
        title: "Pantera Negra: Wakanda Para Sempre",
        tagline: "Wakanda para sempre",
        heroImg: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        age: "14+",
        ageClass: "r14",
        res: "4K HDR",
        genre: "Ação • Aventura • Ficção",
        description: "A rainha Ramonda, Shuri e os líderes de Wakanda lutam para proteger sua nação de potências mundiais após a morte do rei T'Challa.",
        trailerId: "_Z3QKkl1WyM",
        duration: "2h 41min",
        release: "2022",
        director: "Ryan Coogler",
        cast: "Letitia Wright, Lupita Nyong'o, Danai Gurira, Tenoch Huerta",
        rating: "14 anos"
    },
    "zotopia": {
        title: "Zootopia: Essa Cidade é o Bicho",
        tagline: "Qualquer um pode ser o que quiser",
        heroImg: "images/zotopia.jpg",
        age: "L",
        ageClass: "l",
        res: "4K Ultra HD",
        genre: "Animação • Comédia • Mistério",
        description: "Uma otimista coelha policial e um raposo vigarista se unem para desvendar uma conspiração que ameaça a paz em toda a metrópole de Zootopia.",
        trailerId: "jWM0ct-OLsM",
        duration: "1h 48min",
        release: "2016",
        director: "Byron Howard, Rich Moore",
        cast: "Ginnifer Goodwin, Jason Bateman, Idris Elba",
        rating: "Livre para todos os públicos"
    },
    "toy-story": {
        title: "Toy Story",
        tagline: "Ao infinito e além!",
        heroImg: "images/toystory.jpg",
        age: "L",
        ageClass: "l",
        res: "4K HDR",
        genre: "Animação • Aventura • Família",
        description: "O ciumento caubói Woody vê seu posto de brinquedo favorito ameaçado quando um moderno astronauta chamado Buzz Lightyear chega ao quarto.",
        trailerId: "v-PjgYDrg70",
        duration: "1h 21min",
        release: "1995",
        director: "John Lasseter",
        cast: "Tom Hanks, Tim Allen, Don Rickles",
        rating: "Livre para todos os públicos"
    },
    "pokemon-detective-pikachu": {
        title: "Pokémon: Detetive Pikachu",
        tagline: "A verdade é surpreendente",
        heroImg: "https://image.tmdb.org/t/p/w500/51y6BGzB5gdjDMNAbFa8rjNMYyY.jpg",
        age: "10+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Aventura • Comédia • Mistério",
        description: "Tim Goodman precisa investigar a misteriosa morte de seu pai ao lado de um Pikachu com habilidades de detetive e fala.",
        trailerId: "1pz3Bn9x5MT",
        duration: "1h 44min",
        release: "2019",
        director: "Rob Letterman",
        cast: "Ryan Reynolds, Justice Smith, Kathryn Newton",
        rating: "10 anos"
    },
    "pokemon-os-pokemon-o-poder-de-todos": {
        title: "Pokémon 3: O Poder de Todos",
        tagline: "O poder da união salva o mundo",
        heroImg: "https://image.tmdb.org/t/p/w500/g2C95ubS56O1ITXy1MgC69kAwF0.jpg",
        age: "L",
        ageClass: "l",
        res: "HD",
        genre: "Animação • Aventura • Família",
        description: "Ash, Misty e Brock enfrentam um novo desafio quando um Pokémon lendário desperta uma ameaça que pode destruir o mundo.",
        trailerId: "O6gIw3PxbBk",
        duration: "1h 33min",
        release: "2000",
        director: "Kunihiko Yuyama",
        cast: "Veronica Taylor, Eric Stuart, Rachael Lillis",
        rating: "Livre para todos os públicos"
    },
    "pokemon-mewtwo-strikes-back": {
        title: "Pokémon: O Retorno de Mewtwo",
        tagline: "O poder mais forte do universo",
        heroImg: "https://image.tmdb.org/t/p/w500/rtlyO2oIMcCx2DbOM52XO2rAcgn.jpg",
        age: "10+",
        ageClass: "r12",
        res: "4K Ultra HD",
        genre: "Animação • Ação • Ficção",
        description: "Mewtwo, o Pokémon clonado mais poderoso, convida os melhores treinadores para uma batalha épica enquanto questiona sua própria existência.",
        trailerId: "4tUkMiA1FGg",
        duration: "1h 36min",
        release: "2019",
        director: "Tetsuo Yajima",
        cast: "Sarah Natochenny, Jimmy Zoppi, Rodger Parsons",
        rating: "10 anos"
    },
    "pokemon-i-o-pikachu-e-o-pokemon-selvagem": {
        title: "Pokémon: Eu, Pikachu e o Pokémon Selvagem",
        tagline: "Uma jornada inesperada",
        heroImg: "https://image.tmdb.org/t/p/w500/7vWiCtO1pa0oSG6QTyVKd8eyLLk.jpg",
        age: "L",
        ageClass: "l",
        res: "4K HDR",
        genre: "Animação • Aventura • Comédia",
        description: "Ash e Pikachu se perdem na floresta e encontram Lugia, o guardião dos mares, enquanto enfrentam um grupo que ameaça o equilíbrio da natureza.",
        trailerId: "mYfCldL0kVI",
        duration: "1h 41min",
        release: "2017",
        director: "Tetsuo Yajima",
        cast: "Veronica Taylor, Rachael Lillis, Eric Stuart",
        rating: "Livre para todos os públicos"
    },
    "pokemon-movie-mewtwo-contro-ataque": {
        title: "Pokémon: O Filme - Mewtwo Contra-Ataca",
        tagline: "A lenda começou",
        heroImg: "https://image.tmdb.org/t/p/w500/6YPzBcMH0aPNTvdXNCDLY0zdE1g.jpg",
        age: "10+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Animação • Ação • Ficção",
        description: "Mewtwo, um Pokémon criado por engenharia genética, parte para uma vingança contra a humanidade, mas Ash e seus amigos tentam detê-lo.",
        trailerId: "P2w_rHAN1C0",
        duration: "1h 25min",
        release: "1998",
        director: "Kunihiko Yuyama",
        cast: "Veronica Taylor, Rachael Lillis, Eric Stuart",
        rating: "10 anos"
    },
    "star-wars-uma-nova-esperanca": {
        title: "Star Wars: Uma Nova Esperança",
        tagline: "Muito tempo atrás, em uma galáxia muito, muito distante...",
        heroImg: "https://image.tmdb.org/t/p/w1280/yUiXA68FfQeA8cRBhd0Ao0jIRZt.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/fai0rspsNeJCS69wHNjOdWxcI7P.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Aventura • Ação • Ficção Científica",
        description: "Luke Skywalker une forças com um cavaleiro Jedi, Han Solo e os droides R2-D2 e C-3PO para resgatar a Princesa Leia e destruir a Estrela da Morte do Império.",
        trailerId: "1g3_CFmnU7k",
        duration: "2h 1min",
        release: "1977",
        director: "George Lucas",
        cast: "Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness",
        rating: "12 anos"
    },
    "star-wars-imperio-contra-ataca": {
        title: "Star Wars: O Império Contra-Ataca",
        tagline: "A saga épica continua",
        heroImg: "https://image.tmdb.org/t/p/w1280/k9pshruhCpJAdH9RaGJO6jaWQ4X.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Aventura • Ação • Ficção Científica",
        description: "Luke Skywalker busca o treinamento Jedi com o mestre Yoda, enquanto Darth Vader intensifica sua busca para capturar o herói e revelar um segredo que mudará tudo.",
        trailerId: "yCtaxF7XutI",
        duration: "2h 4min",
        release: "1980",
        director: "Irvin Kershner",
        cast: "Mark Hamill, Harrison Ford, Carrie Fisher, Frank Oz",
        rating: "12 anos"
    },
    "star-wars-retorno-do-jedi": {
        title: "Star Wars: O Retorno do Jedi",
        tagline: "O confronto final contra o Império",
        heroImg: "https://image.tmdb.org/t/p/w1280/ziECpBRIyclmBNaFSWlvCfsKbMD.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/jQYlydvHm3kUix1f8prMucrplhm.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Aventura • Ação • Ficção Científica",
        description: "Os rebeldes atacam a nova Estrela da Morte enquanto Luke confronta Darth Vader e o Imperador na batalha decisiva pela galáxia.",
        trailerId: "p4vIFhk621Q",
        duration: "2h 12min",
        release: "1983",
        director: "Richard Marquand",
        cast: "Mark Hamill, Harrison Ford, Carrie Fisher, Ian McDiarmid",
        rating: "12 anos"
    },
    "star-wars-ameaca-fantasma": {
        title: "Star Wars: A Ameaça Fantasma",
        tagline: "Toda história tem um começo",
        heroImg: "https://image.tmdb.org/t/p/w1280/3TeGmKJfkik1D1rIoqGb1aR4k9c.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Aventura • Ação • Ficção Científica",
        description: "Dois cavaleiros Jedi são enviados para resolver um conflito e acabam descobrindo Anakin Skywalker, um jovem escravo de incrível poder na Força.",
        trailerId: "bD7bpG-zDJQ",
        duration: "2h 16min",
        release: "1999",
        director: "George Lucas",
        cast: "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
        rating: "12 anos"
    },
    "star-wars-despertar-da-forca": {
        title: "Star Wars: O Despertar da Força",
        tagline: "A Força desperta",
        heroImg: "https://image.tmdb.org/t/p/w1280/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Aventura • Ação • Ficção Científica",
        description: "Décadas após a queda do Império, uma nova ameaça surge, e a eliminação Rey, o stormtrooper Finn e o piloto Poe Dameron embarcam em uma nova aventura galáctica.",
        trailerId: "sGbxmsDFVnE",
        duration: "2h 16min",
        release: "2015",
        director: "J.J. Abrams",
        cast: "Daisy Ridley, John Boyega, Oscar Isaac, Harrison Ford",
        rating: "12 anos"
    },
    "star-wars-rogue-one": {
        title: "Rogue One: Uma História Star Wars",
        tagline: "Uma rebelião construída na esperança",
        heroImg: "https://image.tmdb.org/t/p/w1280/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg",
        age: "14+",
        ageClass: "r14",
        res: "4K HDR",
        genre: "Ação • Aventura • Ficção Científica",
        description: "Um grupo improvável de combatentes da resistência se une para roubar os planos da Estrela da Morte e trazer uma nova esperança à galáxia.",
        trailerId: "frdj1zb9sMY",
        duration: "2h 13min",
        release: "2016",
        director: "Gareth Edwards",
        cast: "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
        rating: "14 anos"
    },
    "deadpool-e-wolverine": {
        title: "Deadpool & Wolverine",
        tagline: "Os mercenários mais amados do multiverso",
        heroImg: "https://image.tmdb.org/t/p/w1280/by8z9Fe8y7p4jo2YlW2SZDnptyT.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        age: "18+",
        ageClass: "r18",
        res: "4K HDR",
        genre: "Ação • Comédia • Ficção Científica",
        description: "Wolverine está relutante, mas Deadpool precisa de sua ajuda para salvar seu universo. Os dois mercenários partem para uma missão caótica pelo multiverso.",
        trailerId: "73_1biulkYk",
        duration: "2h 8min",
        release: "2024",
        director: "Shawn Levy",
        cast: "Ryan Reynolds, Hugh Jackman, Emma Corrin",
        rating: "18 anos"
    },
    "alien-romulus": {
        title: "Alien: Romulus",
        tagline: "O terror original está de volta",
        heroImg: "https://image.tmdb.org/t/p/w1280/iYqSQaWDttQIQzsxg9xHyg0bttG.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg",
        age: "16+",
        ageClass: "r16",
        res: "4K HDR",
        genre: "Terror • Ficção Científica",
        description: "Um grupo de jovens colonos espaciais encontra uma colônia abandonada e enfrenta a forma mais aterrorizante de vida já criada.",
        trailerId: "OzY2r2JXsDM",
        duration: "1h 59min",
        release: "2024",
        director: "Fede Alvarez",
        cast: "Cailee Spaeny, David Jonsson, Archie Renaux, Isabela Merced",
        rating: "16 anos"
    },
    "o-reino-do-planeta-dos-macacos": {
        title: "O Reino do Planeta dos Macacos",
        tagline: "Nem todos são iguais",
        heroImg: "https://image.tmdb.org/t/p/w1280/fypydCipcWDKDTTCoPucBsdGYXW.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Ficção Científica • Aventura • Ação",
        description: "Anos após o reinado de César, um novo líder dos macacos tenta construir seu império enquanto o destino das espécies está em jogo.",
        trailerId: "XtFI7SNtVpY",
        duration: "2h 25min",
        release: "2024",
        director: "Wes Ball",
        cast: "Owen Teague, Freya Allan, Kevin Durand, Peter Macon",
        rating: "12 anos"
    },
    "free-guy": {
        title: "Free Guy: Assumindo o Controle",
        tagline: "A vida é um jogo. Quebre as regras.",
        heroImg: "https://image.tmdb.org/t/p/w1280/rOJb0yQOCny0bPjg8bCLw8DyAD7.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/dxraF0qPr1OEgJk17ltQTO84kQF.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K HDR",
        genre: "Comédia • Aventura • Ficção Científica",
        description: "Um caixa de banco descobre que é um personagem secundário em um jogo de vídeo game e decide se tornar o herói da própria história.",
        trailerId: "cttnRmcr_ME",
        duration: "1h 55min",
        release: "2021",
        director: "Shawn Levy",
        cast: "Ryan Reynolds, Jodie Comer, Taika Waititi, Lil Rel Howery",
        rating: "12 anos"
    },
    "logan": {
        title: "Logan",
        tagline: "A natureza o fez. Ele se tornou algo mais.",
        heroImg: "https://image.tmdb.org/t/p/w1280/qTdCfGyDisY9e8BLycszlyTsPWx.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
        age: "18+",
        ageClass: "r18",
        res: "4K HDR",
        genre: "Ação • Drama • Ficção Científica",
        description: "No ano de 2029, um envelhecido Logan cuida de um doente Professor X enquanto protege uma jovem mutante que pode ter o futuro da raça em suas mãos.",
        trailerId: "Div0iP65aZo",
        duration: "2h 17min",
        release: "2017",
        director: "James Mangold",
        cast: "Hugh Jackman, Patrick Stewart, Dafne Keen",
        rating: "18 anos"
    },
    "leao-a-alcateia-marsh": {
        title: "LEÃO",
        tagline: "A extraordinária história real do filhote de leão Kio",
        heroImg: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1600&auto=format&fit=crop",
        thumb: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=800&auto=format&fit=crop",
        badge: "Nova série",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/National_Geographic_logo.svg/1280px-National_Geographic_logo.svg.png",
        age: "10+",
        ageClass: "r10",
        res: "4K UHD",
        genre: "Animais e natureza, Docussérie",
        description: "A extraordinária história real do filhote de leão Kio, em sua jornada para se tornar rei.",
        trailerId: "d9MyW72ELq0",
        duration: "6 Episódios",
        release: "2026",
        director: "National Geographic",
        cast: "Narrador Especialista",
        rating: "10 anos"
    },
    "homem-de-ferro": {
        title: "Homem de Ferro",
        tagline: "Heróis não nascem. São construídos.",
        heroImg: "https://image.tmdb.org/t/p/w1280/mqN7RxojEiPoh3FTSTwOtwg7KAu.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/mqN7RxojEiPoh3FTSTwOtwg7KAu.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K UHD",
        genre: "Ação • Aventura • Ficção Científica",
        description: "Tony Stark, um industrial bilionário e inventor genial, é sequestrado e forçado a construir uma arma devastadora. Em vez disso, constrói uma armadura de alta tecnologia para escapar.",
        trailerId: "8ugaeA-nMTc",
        duration: "2h 06min",
        release: "2008",
        director: "Jon Favreau",
        cast: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges",
        rating: "12 anos"
    },
    "homem-de-ferro-2": {
        title: "Homem de Ferro 2",
        tagline: "Nem mesmo o homem de ferro pode fazer isso sozinho.",
        heroImg: "https://image.tmdb.org/t/p/w1280/vzROjQbgKWMVf2EldXipCcjpuBL.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/vzROjQbgKWMVf2EldXipCcjpuBL.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K UHD",
        genre: "Ação • Aventura • Ficção Científica",
        description: "Com o mundo agora ciente de que ele é o Homem de Ferro, o bilionário Tony Stark precisa lidar com a pressão do governo para entregar sua tecnologia e com novos inimigos.",
        trailerId: "wKtcmiifycU",
        duration: "2h 04min",
        release: "2010",
        director: "Jon Favreau",
        cast: "Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Mickey Rourke, Scarlett Johansson",
        rating: "12 anos"
    },
    "thor": {
        title: "Thor",
        tagline: "Dois mundos. Um herói.",
        heroImg: "https://image.tmdb.org/t/p/w1280/aEV9QmgBqjRTdjsvdCgdK89tavQ.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/aEV9QmgBqjRTdjsvdCgdK89tavQ.jpg",
        age: "10+",
        ageClass: "r10",
        res: "4K UHD",
        genre: "Ação • Aventura • Fantasia",
        description: "O poderoso mas arrogante guerreiro Thor é expulso do reino fantástico de Asgard e enviado para viver entre os humanos na Terra, onde se torna um de seus maiores defensores.",
        trailerId: "JOddp-nlNvQ",
        duration: "1h 55min",
        release: "2011",
        director: "Kenneth Branagh",
        cast: "Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins",
        rating: "10 anos"
    },
    "marvel-one-shot-o-consultor": {
        title: "Marvel One-Shot: O Consultor",
        tagline: "Uma operação secreta da S.H.I.E.L.D.",
        heroImg: "https://image.tmdb.org/t/p/w1280/cfEXCNAAdCc8czAqdo4Me3iwuxM.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/cfEXCNAAdCc8czAqdo4Me3iwuxM.jpg",
        age: "10+",
        ageClass: "r10",
        res: "HD",
        genre: "Ação • Curta-Metragem",
        description: "Os agentes da S.H.I.E.L.D. Coulson e Sitwell conspiram para impedir que Emil Blonsky seja libertado e recrutado para a Iniciativa Vingadores, enviando um consultor improvável: Tony Stark.",
        trailerId: "dKrVegVI0Us",
        duration: "4min",
        release: "2011",
        director: "Leythum",
        cast: "Clark Gregg, Maximiliano Hernández",
        rating: "10 anos"
    },
    "capitao-america-o-primeiro-vingador": {
        title: "Capitão América: O Primeiro Vingador",
        tagline: "Quando os patriotas se tornam heróis.",
        heroImg: "https://image.tmdb.org/t/p/w1280/19wxfSXHhuJBRbbfUweCsfXFhpv.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/19wxfSXHhuJBRbbfUweCsfXFhpv.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K UHD",
        genre: "Ação • Aventura • Ficção Científica",
        description: "Steve Rogers, um jovem frágil e rejeitado pelo exército na Segunda Guerra Mundial, se oferece voluntariamente para um projeto ultrassecreto que o transforma no Capitão América.",
        trailerId: "JerVrbLldXw",
        duration: "2h 04min",
        release: "2011",
        director: "Joe Johnston",
        cast: "Chris Evans, Hayley Atwell, Sebastian Stan, Hugo Weaving, Tommy Lee Jones",
        rating: "12 anos"
    },
    "marvel-one-shot-martelo-thor": {
        title: "Marvel One-Shot: O Martelo de Thor",
        tagline: "Aconteceu uma coisa engraçada a caminho do martelo de Thor",
        heroImg: "https://image.tmdb.org/t/p/w1280/m1qnAP74odRJzmgzoWmUHqDy7ff.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/m1qnAP74odRJzmgzoWmUHqDy7ff.jpg",
        age: "10+",
        ageClass: "r10",
        res: "HD",
        genre: "Ação • Comédia • Curta-Metragem",
        description: "A caminho do Novo México para investigar o misterioso martelo caído do céu, o agente Coulson para em um posto de gasolina e impede um assalto a mão armada com facilidade impressionante.",
        trailerId: "JOddp-nlNvQ",
        duration: "4min",
        release: "2011",
        director: "Leythum",
        cast: "Clark Gregg",
        rating: "10 anos"
    },
    "os-vingadores": {
        title: "Os Vingadores",
        tagline: "Alguns heróis são lendas. Juntos, são invencíveis.",
        heroImg: "https://image.tmdb.org/t/p/w1280/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/PtSapjHdDjlVcsqdEo0u7rDE6i.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K UHD",
        genre: "Ação • Aventura • Super-Heróis",
        description: "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico Tesseract. Nick Fury, diretor da S.H.I.E.L.D., reúne os heróis mais poderosos da Terra para salvar o planeta.",
        trailerId: "eOrNdBpGMv8",
        duration: "2h 23min",
        release: "2012",
        director: "Joss Whedon",
        cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner",
        rating: "12 anos"
    },
    "wandavision": {
        title: "WandaVision",
        tagline: "Um casal nada comum.",
        heroImg: "https://image.tmdb.org/t/p/w1280/8mAyDNSCZDiejPTm4lwgbztut7y.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/8mAyDNSCZDiejPTm4lwgbztut7y.jpg",
        age: "14+",
        ageClass: "r14",
        res: "4K UHD",
        genre: "Mistério • Ficção Científica • Romance",
        description: "Wanda Maximoff e Visão, dois seres superpoderosos vivendo sua vida suburbana ideal, começam a suspeitar que nem tudo é o que parece na pacata cidade de Westview.",
        trailerId: "UBhlqe2KVt4",
        duration: "9 Episódios",
        release: "2021",
        director: "Matt Shakman",
        cast: "Elizabeth Olsen, Paul Bettany, Kathryn Hahn, Teyonah Parris",
        rating: "14 anos"
    },
    "falcao-e-o-soldado-invernal": {
        title: "Falcão e o Soldado Invernal",
        tagline: "O legado do escudo está em jogo.",
        heroImg: "https://image.tmdb.org/t/p/w1280/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
        age: "14+",
        ageClass: "r14",
        res: "4K UHD",
        genre: "Ação • Aventura • Drama",
        description: "Sam Wilson e Bucky Barnes se unem em uma aventura global que coloca suas habilidades e paciência à prova enquanto enfrentam o grupo anarquista Flag Smashers.",
        trailerId: "IWBsDa44fls",
        duration: "6 Episódios",
        release: "2021",
        director: "Kari Skogland",
        cast: "Anthony Mackie, Sebastian Stan, Wyatt Russell, Daniel Brühl",
        rating: "14 anos"
    },
    "loki": {
        title: "Loki",
        tagline: "O Deus da Trapaça fora do tempo.",
        heroImg: "https://image.tmdb.org/t/p/w1280/2TwPJfPiBI2lVrofggw3H0b4cDC.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/2TwPJfPiBI2lVrofggw3H0b4cDC.jpg",
        age: "14+",
        ageClass: "r14",
        res: "4K UHD",
        genre: "Ficção Científica • Fantasia • Aventura",
        description: "O mercurial vilão Loki retoma seu papel como o Deus da Trapaça em uma série após os acontecimentos de Vingadores: Ultimato, sendo levado para a misteriosa Autoridade de Variância Temporal (AVT).",
        trailerId: "nW948Va-l10",
        duration: "12 Episódios",
        release: "2021",
        director: "Kate Herron",
        cast: "Tom Hiddleston, Owen Wilson, Sophia Di Martino, Gugu Mbatha-Raw",
        rating: "14 anos"
    },
    "viuva-negra": {
        title: "Viúva Negra",
        tagline: "Ela tem pendências no passado.",
        heroImg: "https://image.tmdb.org/t/p/w1280/lrJ9QI2HMbO8N2S2r2v7fjtou5c.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/lrJ9QI2HMbO8N2S2r2v7fjtou5c.jpg",
        age: "14+",
        ageClass: "r14",
        res: "4K UHD",
        genre: "Ação • Espionagem • Aventura",
        description: "Natasha Romanoff confronta as partes sombrias de sua história quando surge uma conspiração perigosa ligada ao seu passado na Sala Vermelha.",
        trailerId: "ybji16u608U",
        duration: "2h 14min",
        release: "2021",
        director: "Cate Shortland",
        cast: "Scarlett Johansson, Florence Pugh, David Harbour, Rachel Weisz",
        rating: "14 anos"
    },
    "what-if": {
        title: "What If...?",
        tagline: "Um universo de infinitas possibilidades.",
        heroImg: "https://image.tmdb.org/t/p/w1280/kJQWrrwtu0TAsIKq8Adgzeg4bFt.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/kJQWrrwtu0TAsIKq8Adgzeg4bFt.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K UHD",
        genre: "Animação • Ação • Ficção Científica",
        description: "Explorando momentos cruciais do Universo Cinematográfico Marvel e virando-os de cabeça para baixo, levando o público a territórios inexplorados do Multiverso.",
        trailerId: "x9D0uUkJ5KI",
        duration: "18 Episódios",
        release: "2021",
        director: "Bryan Andrews",
        cast: "Jeffrey Wright, Hayley Atwell, Chadwick Boseman",
        rating: "12 anos"
    },
    "shang-chi": {
        title: "Shang-Chi e a Lenda dos Dez Anéis",
        tagline: "Você não pode fugir do seu destino.",
        heroImg: "https://image.tmdb.org/t/p/w1280/d3wNegI8XJF8Kto6KhlqPicBRAp.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/d3wNegI8XJF8Kto6KhlqPicBRAp.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K UHD",
        genre: "Ação • Fantasia • Aventura",
        description: "Shang-Chi deve enfrentar o passado que ele pensou ter deixado para trás quando é atraído para a teia da misteriosa organização dos Dez Anéis.",
        trailerId: "8YjFbMbfXaQ",
        duration: "2h 12min",
        release: "2021",
        director: "Destin Daniel Cretton",
        cast: "Simu Liu, Awkwafina, Tony Leung, Michelle Yeoh",
        rating: "12 anos"
    },
    "eternos": {
        title: "Eternos",
        tagline: "No início...",
        heroImg: "https://image.tmdb.org/t/p/w1280/c6H7Z4u73ir3Aqur6k5RupNk809.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
        age: "12+",
        ageClass: "r12",
        res: "4K UHD",
        genre: "Ação • Fantasia • Aventura",
        description: "Originários dos primeiros momentos do universo, os Eternos guiaram a humanidade em segredo por milênios, até que uma tragédia inesperada os força a sair das sombras para enfrentar os Deviantes.",
        trailerId: "0b2v3gK1y4w",
        duration: "2h 36min",
        release: "2021",
        director: "Chloé Zhao",
        cast: "Gemma Chan, Richard Madden, Angelina Jolie, Salma Hayek",
        rating: "12 anos"
    },
    "deadpool-e-wolverine": {
        title: "Deadpool & Wolverine",
        tagline: "Jesus da Marvel está chegando.",
        heroImg: "https://image.tmdb.org/t/p/w1280/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        thumb: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        age: "16+",
        ageClass: "r16",
        res: "4K UHD",
        genre: "Ação • Comédia • Super-Heróis",
        description: "Wade Wilson oferece seus serviços à AVT e une forças relutantemente com um Wolverine desiludido para salvar sua realidade de uma ameaça existencial.",
        trailerId: "73_1biulkYk",
        duration: "2h 08min",
        release: "2024",
        director: "Shawn Levy",
        cast: "Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen",
        rating: "16 anos"
    }
};

const catalogSuggestions = [
    { title: "Vingadores: Doutor Destino", img: "images/movie-1.png", key: "vingadores-doutor-destino" },
    { title: "Homem-Aranha", img: "images/movie-2.jpg", key: "homem-aranha" },
    { title: "Moana 2", img: "https://image.tmdb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg", key: "moana-2" },
    { title: "Capitão América", img: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg", key: "capitao-america-guerra-civil" },
    { title: "Avatar", img: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", key: "avatar-o-caminho-da-agua" },
    { title: "Mufasa", img: "https://image.tmdb.org/t/p/w500/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg", key: "mufasa-o-rei-leao" },
    { title: "Vingadores Ultimato", img: "images/movie-6.jpg", key: "vingadores-ultimato" },
    { title: "Vingadores: Guerra Infinita", img: "https://image.tmdb.org/t/p/w500/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg", key: "vingadores-guerra-infinita" },
    { title: "Era de Ultron", img: "images/avengers.jpg", key: "vingadores-era-de-ultron" },
    { title: "Demon Slayer", img: "images/akaza.jpg", key: "demon-slayer-castelo-infinito" },
    { title: "Carros", img: "images/carros.jpg", key: "carros" }
];

// ==========================================
// CARROSSEL DE DESTAQUE (HOME / PARA VOCÊ)
// ==========================================
const featuredSlides = [
    {
        key: "carros",
        img: "https://i.pinimg.com/1200x/b4/31/3c/b4313c71fa8799b1bf850659cf8c11d1.jpg",
        title: "Carros",
        brand: "Disney · Pixar",
        age: "L",
        ageClass: "l",
        year: "2006",
        genre: "Comédia, Animação",
        subtitle: "A vida é uma viagem, não um destino.",
        description: "Ao viajar para a Califórnia para a Copa Pistão, Relâmpago McQueen se perde na empoeirada cidadezinha de Radiator Springs."
    },
    {
        key: "vingadores-doutor-destino",
        img: "https://i.pinimg.com/736x/b7/a0/35/b7a0358bc35698f39b09ce5eb39e3c96.jpg",
        title: "Vingadores: Doutor Destino",
        brand: "Marvel Studios",
        badge: "Em Breve",
        age: "14+",
        ageClass: "r14",
        year: "2026",
        genre: "Ação e aventura, Ficção",
        subtitle: "A maior ameaça de todo o multiverso se aproxima.",
        description: "Prepare-se para o novo capítulo épico que unirá heróis através do tempo e das realidades."
    },
    {
        key: "moana-2",
        img: "https://image.tmdb.org/t/p/w1280/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
        title: "Moana 2",
        brand: "Disney",
        badge: "Sucesso de Bilheteria",
        age: "L",
        ageClass: "l",
        year: "2024",
        genre: "Aventura, Musical, Família",
        subtitle: "O oceano está chamando para uma nova aventura.",
        description: "Moana e Maui se reúnem três anos depois para uma nova e expansiva viagem ao lado de uma tripulação improvável."
    }
];

// ==========================================
// FILEIRA DE PÔSTERES (HOME)
// ==========================================
const posterRow = [
    { key: "vingadores-ultimato-encore", img: "images/endgame encore.jpg" },
    { key: "homem-aranha-sem-volta-para-casa", img: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
    { key: "carros", img: "images/carros.jpg" },
    { key: "carros-2", img: "images/carros2.jpg" },
    { key: "alvin", img: "images/alvim.jpg" },
    { key: "doutor-estranho-no-multiverso-da-loucura", img: "images/doutro estranho.jpg" },
    { key: "zotopia", img: "images/zotopia.jpg" },
    { key: "toy-story", img: "images/toystory.jpg" }
];

// ==========================================
// CARROSSEL DISNEY+ (ABA DISNEY+)
// ==========================================
const disneyPlusSlides = [
    {
        key: "leao-a-alcateia-marsh",
        img: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1600&auto=format&fit=crop",
        title: "LEÃO",
        subtitle: "A ALCATEIA MARSH DE MASAI MARA",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/National_Geographic_logo.svg/1280px-National_Geographic_logo.svg.png",
        badge: "Nova série",
        year: "2026",
        genre: "Animais e natureza, Docussérie",
        description: "A extraordinária história real do filhote de leão Kio, em sua jornada para se tornar rei."
    },
    {
        key: "mufasa-o-rei-leao",
        img: "https://image.tmdb.org/t/p/w1280/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg",
        title: "Mufasa: O Rei Leão",
        brand: "Disney",
        badge: "Original Disney",
        year: "2024",
        genre: "Aventura, Drama, Família",
        subtitle: "A lenda do rei que uniu a savana",
        description: "Rafiki conta a história da ascensão do lendário rei das Terras do Reino."
    },
    {
        key: "moana-2",
        img: "https://image.tmdb.org/t/p/w1280/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
        title: "Moana 2",
        brand: "Disney",
        badge: "Destaque",
        year: "2024",
        genre: "Aventura, Musical",
        subtitle: "O oceano está chamando para uma nova aventura",
        description: "Uma nova jornada mística pelos mares do pacífico."
    }
];

// ==========================================
// FILEIRAS DISNEY+ (ABA DISNEY+)
// ==========================================
const disneyPlusMovieRows = [
    {
        title: "Clássicos Disney",
        keys: ["moana-2", "mufasa-o-rei-leao", "zotopia", "alvin"]
    },
    {
        title: "Pixar & Animação",
        keys: ["carros", "carros-2", "carros-3", "toy-story"]
    },
    {
        title: "Marvel no Nobre+",
        keys: ["vingadores-ultimato", "vingadores-era-de-ultron", "capitao-america-guerra-civil", "homem-aranha", "doutor-estranho-no-multiverso-da-loucura"]
    },
    {
        title: "Star Wars",
        keys: ["star-wars-uma-nova-esperanca", "star-wars-imperio-contra-ataca", "star-wars-retorno-do-jedi", "star-wars-ameaca-fantasma", "star-wars-despertar-da-forca", "star-wars-rogue-one"]
    }
];

// ==========================================
// FILMES POKÉMON (ABA POKÉMON)
// ==========================================
const pokemonTabKeys = [
    "pokemon-detective-pikachu",
    "pokemon-os-pokemon-o-poder-de-todos",
    "pokemon-mewtwo-strikes-back",
    "pokemon-i-o-pikachu-e-o-pokemon-selvagem",
    "pokemon-movie-mewtwo-contro-ataque"
];

// ==========================================
// SAGAS DA PÁGINA MARVEL (marvel.html)
// ==========================================
const marvelInfinitySaga = [
    "homem-de-ferro",
    "homem-de-ferro-2",
    "thor",
    "marvel-one-shot-o-consultor",
    "capitao-america-o-primeiro-vingador",
    "marvel-one-shot-martelo-thor",
    "os-vingadores",
    "capitao-america-guerra-civil",
    "vingadores-era-de-ultron",
    "vingadores-ultimato"
];

const marvelMultiverseSaga = [
    "wandavision",
    "falcao-e-o-soldado-invernal",
    "loki",
    "viuva-negra",
    "what-if",
    "shang-chi",
    "eternos",
    "homem-aranha-sem-volta-para-casa",
    "doutor-estranho-no-multiverso-da-loucura",
    "deadpool-e-wolverine",
    "vingadores-doutor-destino"
];

function normalizeKey(str) {
    if (!str) return '';
    return str.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[´`'":]/g, "")
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
}

function findMovieKey(element) {
    const explicitKey = element.getAttribute('data-movie-key');
    if (explicitKey && moviesDatabase[explicitKey]) return explicitKey;

    const rawTitle = element.getAttribute('data-title') || 
                     element.querySelector('h4')?.textContent || 
                     element.querySelector('.movie-title')?.textContent ||
                     element.querySelector('img')?.getAttribute('alt') || 
                     '';

    const normalized = normalizeKey(rawTitle);

    const exactMatch = Object.keys(moviesDatabase).find(k => k === normalized);
    if (exactMatch) return exactMatch;

    const partialMatch = Object.keys(moviesDatabase).find(k => normalized.includes(k) || k.includes(normalized));
    if (partialMatch) return partialMatch;

    return "vingadores-doutor-destino";
}

// ==========================================
// URL DE EMBED DO YOUTUBE
// ==========================================
function getEmbedOrigin() {
    const origin = window.location.origin;
    const isFile = window.location.protocol === 'file:' || origin === 'null';
    return (!isFile && origin) ? `&origin=${encodeURIComponent(origin)}` : '';
}

function buildEmbedUrl(trailerId, params) {
    return `https://www.youtube-nocookie.com/embed/${trailerId}?${params}${getEmbedOrigin()}`;
}

// ==========================================
// FALLBACK DE PÔSTER (imagem quebrada)
// ==========================================
function posterFallback(img, title) {
    if (!img) return;
    img.onerror = null;
    const txt = String(title || 'Nobre+')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450">'
        + '<rect width="300" height="450" fill="#101020"/>'
        + '<rect x="8" y="8" width="284" height="434" fill="none" stroke="rgba(230,36,41,0.9)" stroke-width="5"/>'
        + '<text x="150" y="208" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="34" font-weight="bold" fill="#ffffff">Nobre+</text>'
        + '<text x="150" y="252" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="16" fill="#e62429">' + txt + '</text>'
        + '<text x="150" y="424" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="12" fill="#8a8a9a">Poster indisponível</text>'
        + '</svg>';
    img.src = 'data:image/svg+xml;charset=utf8,' + encodeURIComponent(svg);
}


