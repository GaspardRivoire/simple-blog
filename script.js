module.exports = {
    generate: function (client) {

        var json =  [
            {
                "id": 1,
                "titre": "Les pinguins en Afrique",
                "date": "12/10/1997",
                "auteur": "Bobby",
                "resume": "L'avenir des pinguins en Afrique en périle du au réchauffement climatique.",
                "contenu": "Donner 10000 euros pour sauver un pinguin"
            },
            {
                "id": 2,
                "titre": "Le prénom louis est trop populaire",
                "date": "18/12/1997",
                "auteur": "Bobby",
                "resume": "Louis est un joli prénom.",
                "contenu": "Occurrence :Ce prénom est, en 2013, porté par plus de 220 000 personnes en France et figure au top 10 national.Louis est un prénom qui doit son succès aux nombreux rois de France, qui en firent un symbole de noblesse, mais aussi de gloire, de courage et de justice. Étymologie : Louis est un dérivé du prénom Clovis, lui-même dérivé du prénom germanique Hlodovic composé des racines hlod (« renommé, illustre, glorieux ») et wig (« combat »). Au fil des siècles, le prénom Hlodovic devient Chlodowig plus connu sous la forme Clovis, puis est latinisé en Clodovico, qui donne Ludovicus, francisé en Ludovic puis en Louis3. Louis est un prénom masculin d'origine franque, c’est-à-dire germanique. C'est une forme composée signifiant « glorieux (hlud, hluth) à la guerre (wig) ».La forme originelle Hlodowig (cf. allemand Ludwig) a été latinisée en Clodouechus (ultérieurement Clodouicus et Clodoueus), la fricative sourde [x] (notée h) du germanique ancien n'existant pas en latin, d'où le français médiéval Clovis, l'occitan Clodovèu, l'italien Clodoveo, etc. Dans les régions de la Romania où la fricative n'a pas été prise en compte, le nom a été transcrit Ludouicus, à l'origine de la forme savante Ludovic et de la forme populaire Looïs, laquelle a évolué en Louis (on observe le même phénomène dans d'autres langues romanes, comme l'italien, où coexistent Ludovico et Luigi). Autres formes remontant à Hlodowig : Aloïs, Aloys, Alvise.tique."
            },
            {
                "id": 3,
                "titre": "Le véganisme : bonne idée ou héresie",
                "date": "12/12/2012",
                "auteur": "Bernard",
                "resume": "Le véganisme est un hérésie",
                "contenu": "Pas de barbecue égal pas de vie, pas vie de éqal héresie!"
            },
            {
                "id": 4,
                "titre": "La distopie utopique de la licence Devops",
                "date": "28/05/2018",
                "auteur": "Donut",
                "resume": "Cette licence est une vaste blaque, nous n'aurions jamais du venir ici",
                "contenu": "Fuyer pauvre fou!"
            },
            {
                "id": 5,
                "titre": "Le Rap",
                "date": "28/09/2017",
                "auteur": "Davodka",
                "resume": "Accusé de réfléxion",
                "contenu": "Le rap est un sport d'illettré, c'est faux, ça te ferait trop chier de l'admettre. Ma plume te botte le cul, c'est une phrase à prendre au pied de la lettre"
            }
        ];

        var db = client.db("blogdb");
        var collection = db.collection('articles');
        collection.insert(json);
    }
}