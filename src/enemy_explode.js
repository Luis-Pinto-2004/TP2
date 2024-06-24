// Define a classe Enemy_Explode que extende Phaser.GameObjects.Sprite
class Enemy_Explode extends Phaser.GameObjects.Sprite {
    // Construtor da classe Enemy_Explode
    constructor(scene, x, y, sprite) {
        // Chama o construtor da classe base Phaser.GameObjects.Sprite
        // e define a origem do sprite para o centro (0.5, 0.5)
        super(scene, x, y, sprite).setOrigin(0.5, 0.5);
        
        // Inicia a animação do sprite
        this.anims.play(sprite, true);
        
        // Adiciona o sprite à cena
        scene.add.existing(this);
    }
    
    // Método update que é chamado em cada frame do jogo
    update() {
        // Define um evento para destruir o sprite quando a animação estiver completa
        this.once('animationcomplete', () => { this.destroy(); });
    }
}
