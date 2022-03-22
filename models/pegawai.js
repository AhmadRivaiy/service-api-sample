const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pegawai', {
    id_peg: {
      type: DataTypes.CHAR(9),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nama: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tgl_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "pegawai_email_key"
    },
    no_telp: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "pegawai_no_telp_key"
    },
    kode_jabatan: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      references: {
        model: 'jabatan',
        key: 'kode_jabatan'
      }
    }
  }, {
    sequelize,
    tableName: 'pegawai',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pegawai_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "pegawai_no_telp_key",
        unique: true,
        fields: [
          { name: "no_telp" },
        ]
      },
      {
        name: "pegawai_pkey",
        unique: true,
        fields: [
          { name: "id_peg" },
        ]
      },
    ]
  });
};
