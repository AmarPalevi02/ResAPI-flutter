const { DataTypes } = require("sequelize");
const db = require('../../../configs/connection')
const Image = require('../images/model')

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
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
    alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Alamat wajib di isi"
            },
            len: {
                args: [3],
                msg: "Alamat minimal harus memiliki panjang 10 karakter"
            }
        }
    },
    tglDaftar: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Tanggal daftar harus diisi.'
            }
        }
    },
    noTelpon: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Alamat wajib di isi"
            },
            len: {
                args: [5, 15],
                msg: "nomort telpon tidak valid"
            }
        }
    },
    imageId: {
        type: DataTypes.INTEGER,
        references: {
            model: Image,
            key: 'id'
        }
    },
})

User.belongsTo(Image, { foreignKey: 'imageId' });

module.exports = User;

(async () => {
    await db.sync()
})();