const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jabatan', {
    kode_jabatan: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gaji_pokok: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    batas_msk: {
      type: DataTypes.TIME,
      allowNull: false
    },
    batas_plg: {
      type: DataTypes.TIME,
      allowNull: false
    },
    id_atasan: {
      type: DataTypes.CHAR(9),
      allowNull: true,
      references: {
        model: 'pegawai',
        key: 'id_peg'
      }
    }
  }, {
    sequelize,
    tableName: 'jabatan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jabatan_pkey",
        unique: true,
        fields: [
          { name: "kode_jabatan" },
        ]
      },
    ]
  });
};
