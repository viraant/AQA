let cinema = {
    name: 'Multiplex',
    viewingHalls: {
        blue: [true, false, false, true, false, true, false],
        yellow: [false, false, false, true, false, false, false],
        red: [true, true, false, true, false, true, false]
    },
    getAvailableSeats(viewingHall) {
        seats = this.viewingHalls[viewingHall];
        for (let i = 0; i < seats.length; i++) {
            if (seats[i]) {
                console.log(i + 1);
            }
        }
    },
    setSeat(viewingHall, seat, value) {
        this.viewingHalls[viewingHall][seat - 1] = value;
    },
    getSeat(viewingHall, seat) {
        console.log(this.viewingHalls[viewingHall][seat - 1]);
    }
};
cinema.getAvailableSeats('blue');
console.log('Before:');
cinema.getSeat('yellow', 4);
cinema.setSeat('yellow', 4, false);
console.log('After:');
cinema.getSeat('yellow', 4);
