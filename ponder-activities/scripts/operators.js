// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function isHit() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();
    if (randomNumber > .5){
        return true; 
    } else if (randomNumber < .5) {
       return false; 
    }
} 

function shipCanFire(shipHealth, shipAmmo) {
    // return true if the ships health is above 0 AND ammo is above 0 false otherwise
    if (shipHealth > 0 && shipAmmo > 0 ) {
        return true;
    } else {
        return false;
    }
    
  }

  function isDestroyed(shipHealth) {
    let health = shipHealth; 
    if (health < 0){ 
        return true; 
    }
  }

  function reloadShip() {
      // Check if ship health is greater than 0 before reloading
      if (shipHealth > 0) { 
        shipHealth--; // Decrease ship health by 1
        shipAmmo+=3; // Increase ammo by 3
      }
  }

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;                      
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
} 