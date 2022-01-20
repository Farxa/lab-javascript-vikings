// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(theDamage) {

    super.receiveDamage(theDamage);

    if (this.health > 0) {
      return this.name + ' has received ' + theDamage + ' points of damage';
    } else {
      return this.name + ' has died in act of combat';
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(theDamage) {

    super.receiveDamage(theDamage);

    if (this.health > 0) {
      return 'A Saxon has received ' + theDamage + ' points of damage';
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  genericAttack(attackingArmy, defendingArmy) {
    const indexOfRandomAttacker = Math.floor(Math.random() * attackingArmy.length);
    const indexOfRandomDefender = Math.floor(Math.random() * defendingArmy.length);

    const randomAttacker = attackingArmy[indexOfRandomAttacker];
    const randomDefender = defendingArmy[indexOfRandomDefender]

    const message = randomDefender.receiveDamage(randomAttacker.strength)

    if (randomDefender.health <= 0 ) {
      defendingArmy.splice(indexOfRandomDefender, 1)
    }
    return message
  }

  
  vikingAttack() {
    return this.genericAttack(this.vikingArmy, this.saxonArmy)
  }

  saxonAttack() {
    return this.genericAttack(this.saxonArmy, this.vikingArmy)
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

const war = new War;
const viking = new Viking('Ragner', 50, 300);
const saxon = new Saxon(50, 200);

war.addViking(viking);
war.addSaxon(saxon);
war.saxonAttack();

