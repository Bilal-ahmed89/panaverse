function Car_Info(manufacturer, model, color, horsepwer) {
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    if (color) {
        car.color = color;
    }
    if (horsepwer) {
        car.horsepwer = horsepwer;
    }
    return console.log(car);
}
Car_Info('Tesla', 'Model X');
Car_Info('Audi', 'A5', 'white');
