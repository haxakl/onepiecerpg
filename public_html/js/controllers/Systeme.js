
// Classe Système
function Systeme() {

    // Listes
    this.fruitsDuDemons = new Array();
    this.factions = new Array();

    // Variables
    this.personnage = new Personnage();
    this.game = null;

    /**
     * Initialise le système
     */
    this.init = function () {

        // Lancement du moteur Phaser
        this.game = new Game();
//        this.game.init();

        // Chargement du personnage
        this.personnage.load(sessionStorage.getItem("personnage"));

        // Liste des fruits du fruits du démon
        this.addFruitDuDemon(new FruitDuDemon({
            nom: "Fruit du feu",
            degats: 50
        }));
        this.addFruitDuDemon(new FruitDuDemon({
            nom: "Fruit de l'eau"
        }));

        // Liste des factions
        this.addFaction(new Faction({
            nom: "Marines"
        }));
        this.addFaction(new Faction({
            nom: "Pirates"
        }));

    };

    /**
     * Ajouter un fruit du démon
     * @param {type} fruit
     */
    this.addFruitDuDemon = function (fruit) {
        this.fruitsDuDemons.push(fruit);
    };

    /**
     * Ajouter une faction
     * @param {type} faction
     */
    this.addFaction = function (faction) {
        this.factions.push(faction);
    };

}
