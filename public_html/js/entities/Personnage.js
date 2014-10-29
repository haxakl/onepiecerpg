
// Classe Personnage
function Personnage() {

    // Variables
    this.name = "";
    this.vie = 100;
    this.faction = null;
    this.inventaire = new Inventaire();

    /**
     * Ajoute un objet à l'inventaire
     * @param {type} objet Objet à ajouter
     */
    this.addObjet = function (objet) {
        this.inventaire.addObjet(objet);
    };

    /**
     * Récupération d'un personnage
     */
    this.reverse = function (infos) {
        for (i in infos) {
            this[infos[i].name] = infos[i].value;
        }
    };

    /**
     * Récupération d'un personnage
     */
    this.load = function (infos) {
        if(infos !== null) {
            infos = JSON.parse(infos);
            this.name = infos.name;
            this.faction = infos.faction;
        }
    };

}
