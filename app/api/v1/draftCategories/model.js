const { DataTypes } = require('sequelize')
const db = require('../../../configs/connection')

const DraftCategories = db.define('draftCategories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    kBuku: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Kode buku harus diisi"
            },
        }
    },
    judul: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Kode buku harus diisi"
            },
        }
    },
    tglBeli: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Tanggal pembelian harus diisi.'
            }
        }
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prodi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Teknik Mesin', 'Teknik Industri', 'Teknik Informatika', 'Teknik Sipil']]
        }
    },
    kondisi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Baik', 'Rusak']]
        }
    },
    jenis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Fiksi', 'Non-Fiksi', 'Ensiklopedia', 'Referensi', 'Pengembangan']]
        }
    }
})

module.exports = DraftCategories;

(async () => {
    await db.sync()
})();