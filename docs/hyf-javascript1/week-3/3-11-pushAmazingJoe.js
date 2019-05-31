let vehicleSingle = ['truck', 'bicycle', 'rickshaw', 'dog sled', 'car', 'motorcycle', 'el-scooter']
let iterations = vehicleSingle.length -2;
let vehiclePlural = [];

for (let i = 0; i <= iterations; i += 1) {
    vehiclePlural += (vehicleSingle[i] + 's, ')
};
let lastVehicle = (vehicleSingle[vehicleSingle.length - 1] + 's.');


console.log("Here at Amazing Joe\'s, we service " + vehiclePlural + "and " + lastVehicle);