const Router = require('koa-router')
const router = new Router()
const Device = require('../models/Device')

router.get('/api/devices', async ctx => {
    await Device.find()
        .then(devices => {
            ctx.body = devices
        })
        .catch(err => {
            ctx.body = 'error: ' + err
        })
})

router.post('/api/device', async ctx => {
    if (!ctx.request.body.device_id) {
        ctx.body = {
            error: 'Bad Data'
        }
    } else {
        let device = new Device()
        device.device_id = ctx.request.body.device_id
        device.device_type = ctx.request.body.device_type
        device.device_description = ctx.request.body.device_description
        device.device_credentials = ctx.request.body.device_credentials
        await device.save()
            .then(data => {
                ctx.body = data
            })
            .catch(err => {
                ctx.body = 'error : ' + err
            })
    }
})

router.put('/api/device/:id', async ctx => {
    if (!ctx.request.body.device_id) {
        ctx.body = {
            error: 'Bad Data'
        }
    } else {
        await Device.findOneAndUpdate(
            {
                _id: ctx.params.id
            },
            {
                device_id: ctx.request.body.device_id,
                device_type: ctx.request.body.device_type,
                device_description: ctx.request.body.device_description,
                device_credentials: ctx.request.body.device_credentials
            }
        )
            .then(() => {
                ctx.body = {status: 'Device Updated !'}
            })
            .catch(err => {
                ctx.body = 'error : ' + err
            })
    }
})

router.delete('/api/device/:id', async ctx => {
    await Device.deleteOne({
        _id: ctx.params.id
    })
        .then(() => {
            ctx.body = {status: 'Device Deleted !'}
        })
        .catch(err => {
            ctx.body = 'error : ' + err
        })
})

module.exports = router