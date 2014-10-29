
// Classe Personnage
function Inventaire() {
    
    // Variables
    this.name = "";
    this.objets = new Array();
    
    /**
     * Ajoute un objet à l'inventaire
     * @param {type} objet Objet à ajouter
     */
    this.addObjet = function(objet) {
        this.objets.push(objet);
    };
    
}
