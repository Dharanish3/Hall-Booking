const rooms = [
  {
    id: 1,
    roomName: "R1",
    seats: "30",
    amenities: "Tv,Ac,Table",
    pricePerHour: "100",
  },
];

const bookings = [
  {
    id: 1,
    customerName: "Dharanish",
    date: "23-1-24",
    startTime: "12:00pm",
    endTime: "3:00am",
    roomName: "R1",
    bookingId: "B1",
    bookingDate: "34",
    bookingstatus: "Booked",
  },
];

// Create Room
const roomAdd = (req, res) => {
  try {
    const { roomName } = req.body;
    const existingRoom = rooms.find(
      (room) => room.roomName === req.body.roomName
    );
    if (!existingRoom) {
      const id = rooms.length ? rooms[rooms.length - 1].id + 1 : 1;
      req.body.id = id;
      rooms.push(req.body);

      res.status(200).send({ Rooms: rooms });
    } else {
      res.status(500).send({ message: "Room Already Exist" });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error",
    });
  }
};

// Booking Room
const bookingAdd = (req, res) => {
  try {
    let bookRoom = req.body;
    let data = new Date();
    let dateFormat = data.toLocaleDateString();
    let bookId = "B" + (bookings.length + 1);
    const id = rooms.length ? rooms[rooms.length - 1].id + 1 : 1;
    req.body.id = id;
    let newBooking = {
      ...bookRoom,
      bookingId: bookId,
      bookingstatus: "Booked",
      bookingDate: dateFormat,
      roomName: "R" + id,
    };
    bookings.push(newBooking);
    res.status(200).send({ message: "Created Successfully", bookings });
  } catch (error) {
    res.status(500).send({
      message: "Invalid Data",
    });
  }
};


// Room List
const Allroom = (req, res) => {
  try {
    const bookedRoom = bookings.map((booking) => {
      const {
        roomName,
        bookingstatus,
        customerName,
        date,
        startTime,
        endTime,
      } = booking;
      return {
        roomName,
        bookingstatus,
        customerName,
        date,
        startTime,
        endTime,
      };
    });
    res.status(200).send(bookedRoom);
  } catch (err) {
    res.status(500).send({ Rooms: room });
  }
};



// All Customer
const Allcustomer = (req, res) => {
  try {
    const customerBooking = bookings.map((booking) => {
      const { customerName, roomName, date, startTime, endTime } = booking;
      return { customerName, roomName, date, startTime, endTime };
    });
    res.status(200).send(customerBooking);
  } catch (err) {
    res.status(500).send({ Rooms: room });
  }
};



// Customer List
const customer = (req, res) => {
  try {
    const { customerName } = req.params;
    const customer = bookings.find(
      (cust) => cust.customerName === customerName
    );
    if (!customer) {
      res.status(500).send({ message: "Invalid Customer" });
    } else {
      const customers = bookings.map((booking) => {
        const {
          customerName,
          roomName,
          date,
          startTime,
          endTime,
          bookingId,
          bookingDate,
          bookingstatus,
        } = booking;
        return {
          customerName,
          roomName,
          date,
          startTime,
          endTime,
          bookingId,
          bookingDate,
          bookingstatus,
        };
      });
      res.status(200).send(customers);
    }
  } catch (err) {
    res.status(500).send({ Rooms: room });
  }
};



const room = (req, res) => {
  try {
    res.status(200).send({ Rooms: rooms });
  } catch (err) {
    res.status(500).send({ Rooms: room });
  }
};


const booking = (req, res) => {
  try {
    res.status(200).send({ booking: bookings });
  } catch (err) {
    res.status(500).send(err);
  }
};

export default { room, booking, roomAdd, bookingAdd, Allroom, Allcustomer,customer };
