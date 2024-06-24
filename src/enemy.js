// Define a classe Enemy que extende Phaser.GameObjects.Sprite
class Enemy extends Phaser.GameObjects.Sprite {
    // Construtor da classe Enemy
    constructor(scene, x, y, sprite) {
        // Chama o construtor da classe base Phaser.GameObjects.Sprite
        // e define a origem do sprite para o centro (0.5, 0.5)
        super(scene, x, y, sprite).setOrigin(0.5, 0.5);
        
        // Adiciona o sprite à cena
        scene.add.existing(this);
    }
    
    // Método update que é chamado em cada frame do jogo
    update() {
        var sLado; 
        var sAjuste;
        
        // Determina o lado (esquerdo ou direito) e ajusta a escala do inimigo
        if (this.x < 400) { 
            sLado = 1; 
            sAjuste = 0;
        } else { 
            sLado = -1; 
            sAjuste = -400;
        }
        
        // Ajusta a escala do inimigo com base na posição
        this.scale = (((this.x - 200 + sAjuste) / 20) * (0.02 * sLado)) + 1;
        
        // Move o inimigo para baixo se a condição de derrota for verdadeira
        if (contadorFramesDerrota == 1 && (LimiteBai + obj_agent.y > 410)) {
            this.y += 5;
        }
        
        // Atualiza a posição do inimigo com base no movimento do agente
        this.x = (obj_agent.x - agentOldX) + this.x;
        this.y = (obj_agent.y - agentOldY) + this.y;
        
        var DistLaser1;
        var DistLaser2;
        
        // Calcula a distância do primeiro laser ao inimigo, se ativo
        if (laser1Ativo == 1) {
            DistLaser1 = Phaser.Math.Distance.Between(obj_laser1.x, obj_laser1.y, this.x, this.y);
        }
        
        // Calcula a distância do segundo laser ao inimigo, se ativo
        if (laser2Ativo == 1) {
            DistLaser2 = Phaser.Math.Distance.Between(obj_laser2.x, obj_laser2.y, this.x, this.y);
        }
        
        // Calcula a posição do inimigo na matriz do sensor do agente
        var enemyPosicaoArrayX = Math.round(((Math.floor(this.x) - Math.floor(obj_agent.x)) + 225) / 50);
        var enemyPosicaoArrayY = Math.round((Math.floor(this.y) - Math.floor(obj_agent.y)) / 50);
        
        // Verifica se o primeiro laser atingiu o inimigo
        if (DistLaser1 < 25) {
            this.destroy(); 
            agentArraySensor[enemyPosicaoArrayY][enemyPosicaoArrayX] = 0;
            agentVel += 0.225;
            
            // Atualiza a pontuação com base na linha do inimigo
            if (enemyPosicaoArrayY == 0) { 
                score += 30; 
                str_score.x = 120; 
            }
            if (enemyPosicaoArrayY == 1) { 
                score += 20; 
                str_score.x = 120; 
            }
            if (enemyPosicaoArrayY >= 2) { 
                score += 10; 
                str_score.x = 120; 
            }
            
            // Destrói o laser que atingiu o inimigo
            obj_laser1.destroy(); 
            laser1Ativo = -1; 
            qtdeTiros--;
        }
        
        // Verifica se o segundo laser atingiu o inimigo
        if (DistLaser2 < 25) {
            this.destroy(); 
            agentArraySensor[enemyPosicaoArrayY][enemyPosicaoArrayX] = 0;
            agentVel += 0.225;
            
            // Atualiza a pontuação com base na linha do inimigo
            if (enemyPosicaoArrayY == 0) { 
                score += 30; 
                str_score.x = 120; 
            }
            if (enemyPosicaoArrayY == 1) { 
                score += 20; 
                str_score.x = 120; 
            }
            if (enemyPosicaoArrayY >= 2) { 
                score += 10; 
                str_score.x = 120; 
            }
            
            // Destrói o laser que atingiu o inimigo
            obj_laser2.destroy(); 
            laser2Ativo = -1; 
            qtdeTiros--;
        }
    }
}
