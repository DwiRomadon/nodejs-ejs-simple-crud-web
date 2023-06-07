const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const moment = require('moment')

exports.getDataWeb = async (req, res) => {
    try {
        const query = await prisma.dosen.findMany({})
        return res.render('./pages/index', {
            datas: query,
            moment: moment
        })
    } catch (error) {
        return res.render('./error/500')
    }
}

exports.viewInputDosen = async (req, res) => {
    try {
        return res.render('./pages/input_dosen')
    } catch (error) {
        return res.render('./error/500')
    }
}

exports.inputDosen = async (req, res) => {
    try {
        const data = req.body
        data.tgl_lahir = new Date(data.tgl_lahir)
        await prisma.dosen.create({ data: data })
        res.writeHead(302, {
            'Location': '/'
        })
        res.end()
    } catch (error) {
        console.log(error)
        return res.render('./error/500')
    }
}

exports.deleteDosen = async (req, res) => {
    try {
        await prisma.dosen.delete({ where: { nidn: req.params.nidn } })
        res.writeHead(302, {
            'Location': '/'
        })
        res.end()
    } catch (error) {
        return res.render('./error/500')
    }
}