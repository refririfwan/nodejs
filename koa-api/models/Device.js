const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeviceSchema = new Schema({
    device_id: {
        type: String
    },
    device_type: {
        type: String
    },
    device_description: {
        type: String
    },
    device_credentials: {
        type: String
    }
})

module.exports = Device = mongoose.model('devices', DeviceSchema)