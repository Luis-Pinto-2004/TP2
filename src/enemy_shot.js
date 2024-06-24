// Define a classe Enemy_Shot que extende Phaser.GameObjects.Sprite
class Enemy_Shot extends Phaser.GameObjects.Sprite {
    // Construtor da classe Enemy_Shot
    constructor(scene, x, y, sprite) {
        // Chama o construtor da classe base Phaser.GameObjects.Sprite
        // e define a origem do sprite para o centro (0.5, 0.5)
        super(scene, x, y, sprite).setOrigin(0.5, 0.5);
        
        // Adiciona o sprite à cena
        scene.add.existing(this);
    }
    // Método update que é chamado em cada frame do jogo
    update() {
        // Marca o laser do inimigo como ativo
        laserEnemyAtivo = 1;
        
        // Move o laser para baixo
        this.y += 5;
        
        // Verifica se o laser saiu da tela
        if (this.y > 450) {
            // Destrói o laser e marca-o como inativo
            this.destroy();
            laserEnemyAtivo = 0;
        }
        
        // Calcula a distância entre o laser e o jogador
        var DistImpactoPlayer = Phaser.Math.Distance.Between(obj_player.x, obj_player.y, this.x, this.y);
        
        // Verifica se o laser atingiu o jogador
        if (DistImpactoPlayer < 35) {
            // O jogador perde 1 vida
            lives--;
            str_lives.x = 520;
            playerVivo = 0;
            
            // Destrói o laser e marca-o como inativo
            this.destroy();
            laserEnemyAtivo = 0;
        }
        
        // Verifica se o contador de frames de vitória é maior que 0
        if (contadorFramesVitoria > 0) {
            // Destrói o laser e marca-o como inativo
            this.destroy();
            laserEnemyAtivo = 0;
        }
    }
}
