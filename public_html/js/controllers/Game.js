
// Classe du Jeu Phaser
function Game() {

    // Variables
    this.moteur = null;

    /**
     * Initialisation
     * @returns {undefined}
     */
    this.init = function () {
        this.moteur = new Phaser.Game(800, 600, Phaser.AUTO, '', {
            preload: this.preload,
            create: this.create,
            update: this.update
        });

    };

    /**
     * Chargement des assets
     */
    this.preload = function () {

    };

    /**
     * Création des mobs, du monde, des personnages, etc.
     * @returns {undefined}
     */
    this.create = function () {
        
    };

    /**
     * Boucle de rendu
     * @returns {undefined}
     */
    this.update = function () {

    };

}
