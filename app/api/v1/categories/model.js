const { DataTypes } = require('sequelize')
const db = require('../../../configs/connection')

const CategoriesBuku = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    noISBN: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Nomor induk wajib di isi"
            },
            len: {
                args: [4, 7],
                msg: "Nomor NoISBN minimal harus memiliki panjang 7 karakter"
            }
        }
    },
    namaPengarang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Nama wajib di isi"
            },
            len: {
                args: [3],
                msg: "Nama minimal harus memiliki panjang 3 karakter"
            }
        }
    },
    tglCetak: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Tanggal pembelian harus diisi.'
            }
        }
    },
    kondisi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Baik', 'Rusak']]
        }
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'harga harus di isi.'
            }
        }
    },
    jenis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['Fiksi', 'Non-Fiksi', 'Ensiklopedia', 'Referensi', 'Pengembangan']]
        }
    },
    hargaProduksi: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'harga harus di isi.'
            }
        }
    },
})

module.exports = CategoriesBuku;

(async () => {
    await db.sync()
})();