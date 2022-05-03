/*
    define classes for all turrets in the game
    cost, range, dmg -- separate sell cost or just constant ratio of how much u get rfrom selling?
    use same Projectile class as units.js?
*/

class Turret {
    constructor(cost, range, damage, img_src, side, p_img_src='default.png') {
        this.cost = cost; // how much $$ it costs
        this.range = range; // how far it can shoot (idk what the units for this will be yet -- NOT PIXELS)
        this.damage = damage; // how much it shoot
        this.img_src = img_src; // which image to use for it
        this.side = side; // player or computer controlled (determines direction its facing i think)
        this.p_img_src = p_img_src; // which image to use for its projectiles
    }

    draw() { 
        // MIGHT ACTUALLY DO THIS IN PLAYER.JS becuase the turret class doesn't know what turret spot its on? 
        // though,
        // i'll need to know the turret's x/y value for starting the projectiles it spawns
        // so maybe i add a this.x and this.y to Turret class and do draw from here
    }
}