const { DataTypes } = require('sequelize')
const Image = require('../images/model')
const db = require('../../../configs/connection')

const Categories = db.define('categories', {
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
    imageId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Image,
            key: 'id'
        }
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

Categories.belongsTo(Image, { foreignKey: 'imageId' });

module.exports = Categories;

(async () => {
    await db.sync()
})();