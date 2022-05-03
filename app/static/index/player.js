/*
    mega class for player / computer
    stores units, current stage/xp level, base health, etc etc
    queue for spawning units + array of curernt units
    how many turrets/turret spots + which turrets go with which spots
*/

class Player {
    constructor() {
        this.units = []; // units currently on the field
        this.unit_queue = []; // units being trained
        this.stage = 0; // 1-4 when game start
        this.xp = 0; // determines when to progress to next stage
        this.xp_cutoff = [0, 0, 0, 0, 0]; // check in update() if (this.xp >= this.xp_cutoff[stage]) advance
        this.base_hp = 0; // max hp set by stage
        
    }

    draw() {

    }
}