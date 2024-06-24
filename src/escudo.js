// Define a classe Escudo que extende Phaser.GameObjects.Sprite
class Escudo extends Phaser.GameObjects.Sprite {
    // Construtor da classe Escudo
    constructor(scene, x, y, sprite) {
        // Chama o construtor da classe base Phaser.GameObjects.Sprite
        // e define a origem do sprite para o centro (0.5, 0.5)
        super(scene, x, y, sprite).setOrigin(0.5, 0.5);
        
        // Adiciona o sprite à cena
        scene.add.existing(this);
    }
    
    // Método update que é chamado em cada frame do jogo
    update() {
        var DistLaser1;
        var DistLaser2;
        
        // Verifica se o primeiro laser está ativo e calcula a distância ao escudo
        if (laser1Ativo == 1) {
            DistLaser1 = Phaser.Math.Distance.Between(obj_laser1.x, obj_laser1.y, this.x, this.y);
        }
        
        // Verifica se o segundo laser está ativo e calcula a distância ao escudo
        if (laser2Ativo == 1) {
            DistLaser2 = Phaser.Math.Distance.Between(obj_laser2.x, obj_laser2.y, this.x, this.y);
        }
        
        // Verifica se o primeiro laser atingiu o escudo
        if (DistLaser1 < 20) {
            this.destroy();
            obj_laser1.destroy();
            laser1Ativo = -1;
            qtdeTiros--;
        }
        
        // Verifica se o segundo laser atingiu o escudo
        if (DistLaser2 < 20) {
            this.destroy();
            obj_laser2.destroy();
            laser2Ativo = -1;
            qtdeTiros--;
        }
        
        var DistEnemyLaser;
        
        // Verifica se o laser inimigo está ativo e calcula a distância ao escudo
        if (laserEnemyAtivo == 1) {
            DistEnemyLaser = Phaser.Math.Distance.Between(enemy_shot.x, enemy_shot.y, this.x, this.y);
        }
        
        // Verifica se o laser inimigo atingiu o escudo
        if (DistEnemyLaser < 20) {
            this.destroy();
            enemy_shot.destroy();
            laserEnemyAtivo = 0;
        }
        
        // Verifica se o escudo ultrapassou o limite inferior e destrói-o
        if (LimiteBai + obj_agent.y > this.y + 20) {
            this.destroy();
        }
    }
}
