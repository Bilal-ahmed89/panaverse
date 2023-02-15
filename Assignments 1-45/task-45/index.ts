interface car {
    manufacturer: string,
    model: string,
    color?: string,
    horsepwer?: number
}

function Car_Info(manufacturer: string, model: string, color?: string, horsepwer?: number) {
    const car: car = {
        manufacturer,
        model
    }
    if (color) {
        car.color = color
    }
    if (horsepwer) {
        car.horsepwer = horsepwer
    }
    return console.log(car);
    

}

Car_Info('Tesla', 'Model X')
Car_Info('Audi', 'A5', 'white')