var vehicleArray = ['Aerosani', 'All-terrain vehicle', 'Amphibious all-terrain vehicle', 'Amphibious vehicle', 'Auto rickshaw', 'Bathyscaphe', 'Cable car', 'Catamaran', 'Coach (bus)', 'Coach (carriage)', 'Cycle rickshaw', 'Dandy horse', 'Deep Submergence Vehicle', 'Diving bell', 'Diving chamber', 'Dog sled', 'Draisine', 'Electric vehicle', 'Golf cart', 'Ground effect vehicle', 'Handcar', 'Hopper[1]', 'Hovercraft', 'Ice Skates', 'jet ski', 'Kick scooter', 'Land yacht', 'Launch escape capsule', 'Locomotive', 'Maglev', 'Minibus', 'Minivan', 'Monorail', 'Monowheel', 'Moped', 'Narrow-track vehicle', 'Omni Directional Vehicle', 'Ornithopter', 'Passenger car', 'Rickshaw', 'Pedalo', 'Pogo Stick', 'Powered parachute', 'Quadracycle', 'Race car', 'Road train', 'Rocket', 'Rocket sled', 'Rover', 'Screw-propelled vehicle', 'Sea tractor', 'Single-track vehicle', 'Tilting trike', 'Zipline']

function vehicleInfo(color, vehicleIndex, years) {

    let type = vehicleArray[vehicleIndex];


    let age;
    if (years < 1.5) {
        age = " new";
    }

    else if (years > 4) {
        age = " used";
    }

    else {
        age = " slightly used";

    }

    console.log("This is a" + age + " " + color + " " + type);
}

vehicleInfo('blue', 8, 1);
