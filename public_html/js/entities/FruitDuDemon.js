
// Classe Personnage
function FruitDuDemon(params) {
    
    // Variables
    this.name = (typeof params.nom === 'undefined' ? "" : params.nom);
    this.degats = (typeof params.degats === 'undefined' ? 0 : params.degats);
    
}
