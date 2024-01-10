// imageId: {
//     type: DataTypes.INTEGER,
//     references: {
//         model: Image,
//         key: 'id'
//     }
// },
// prodi: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//         isIn: [['Teknik Mesin', 'Teknik Industri', 'Teknik Informatika', 'Teknik Sipil']]
//     }
// }

CategoriesBuku.belongsTo(Image, { foreignKey: 'imageId' });
