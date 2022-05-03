/*
    ranged unit attacks -- new object 'Projectile', holds img_src/velocity, gets assigned a target on creation and goes till hits or the target 
    use same class for turrets.js
*/

class Projectile {
    constructor(x, y, target, velocity, img_src) {
        this.x = x; // initial horizontal position
        this.y = y; // initial vertical position
        this.target = target; // 'unit' object the projectile is going towards
        this.velocity = velocity; // speed
        this.img_src = img_src; // image to use for projectile rendering
    }

    draw() {

    }
}