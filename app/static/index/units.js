/*
    define unit classes for all moving shits
    movement direction, attack range, training time/cost
    same move speed = all in nice order = no issues
    have attack/walk animations? 2 or 3 frames for each, switch between them each N renders
*/

class Unit {
    constructor(range, damage, attack_time, t_cost, t_time, walk_imgs, attack_imgs) {
        this.range = range; // attack range
        this.damage = damage; // attack damage
        this.attack_time = attack_time; // time between attacks (seconds or frames?)
        this.t_cost = t_cost; // training cost ($$)
        this.t_time = t_time; // training time (seconds, probably)

        // these are going to be arrays of images to use for the walking/fighting animation
        // each one probably only 2 or 3 length but it allows for more expansion later if i feel like it
        // not sure how i'll time the progression thru the images yet --
        // probably the walking will be constant 5/10 frames between stages of animations for all units
        // attacking might be linked to attack_time somehow?
        // if i make attack_time in frames i could do that without too much trouble right?
        // TODO: think more on this later
        this.walk_imgs = walk_imgs;
        this.attack_imgs = attack_imgs;

        this.x; // position along the map -- TODO: set based on side
        this.y; // vertical position, should be the same for all units
    }
    
    draw() {
        
    }
}