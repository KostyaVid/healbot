export class Unit {
  /**
   * Create a unit.
   * @param {string} name The unit`s name
   * @param {number} health The unit`s health
   * @param {number} armor The unit`s armor from 0 to 100
   */
  constructor({ name, health, armor }) {
    this._name = name;
    this._health = health;
    this._armor = armor;
    this._isDeath = health > 0 ? false : true;
  }

  get name() {
    return this._name;
  }

  get health() {
    return this._health;
  }

  /**
   * @param {number} health
   */
  set health(health) {
    if (health > 0) {
      this._health = health;
      return;
    }

    this._health = 0;
    this.setDeath();
  }

  get armor() {
    return this._armor;
  }

  get isDeath() {
    return this._isDeath;
  }

  setDeath = () => {
    this._isDeath = true;
    console.log(this.isDeath);
  };

  /**
   * @param {number} damage
   */
  takeDamage = (damage) => {
    var armor = this._armor >= 100 ? 100 : this._armor;
    var calculatedDamage = damage - (damage / 100) * armor;

    this.health = this.health - calculatedDamage;
  };
}
