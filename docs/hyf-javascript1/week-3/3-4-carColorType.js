function vehicleType(color, vehicle) {
    let type;
    if (vehicle < 2) {
        type = " car"
    }

    else if (vehicle == 2) {
        type = " bike"
    }

    else {
        type = " vehicle"

    }

    console.log("This is a " + color + type);
}

vehicleType('blue', 1);

