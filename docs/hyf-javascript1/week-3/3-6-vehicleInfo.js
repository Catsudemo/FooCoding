function vehicleInfo(color, vehicle, years) {
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

    console.log("This is a" + age + " " + color + type);
}

vehicleInfo('blue', 1, 1);

