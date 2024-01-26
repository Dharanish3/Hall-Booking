import  express  from "express";
import RoomController from '../Controller/rooms.js'
const route = express.Router()


route.get('/', RoomController.room)
route.post('/room-add', RoomController.roomAdd)
route.get('/booking', RoomController.booking)
route.post('/booking-create', RoomController.bookingAdd)
route.get('/view-room', RoomController.Allroom)
route.get('/customer-booking', RoomController.Allcustomer)
route.get('/customers/:roomName', RoomController.Allcustomer)


export  default route