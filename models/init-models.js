var DataTypes = require("sequelize").DataTypes;
var _jabatan = require("./jabatan");
var _pegawai = require("./pegawai");
var _presensi = require("./presensi");
var _izin = require("./izin");

function initModels(sequelize) {
  var jabatan = _jabatan(sequelize, DataTypes);
  var pegawai = _pegawai(sequelize, DataTypes);
  var presensi = _presensi(sequelize, DataTypes);
  var izin = _izin(sequelize, DataTypes);

  jabatan.belongsTo(pegawai, { foreignKey: "id_atasan"});
  pegawai.hasMany(jabatan, { foreignKey: "id_atasan"});

  pegawai.belongsTo(jabatan, { foreignKey: "kode_jabatan"});
  jabatan.hasMany(pegawai, { foreignKey: "kode_jabatan"});

  presensi.belongsTo(pegawai, { foreignKey: "id_peg"});
  pegawai.hasMany(presensi, { foreignKey: "id_peg"});

  izin.belongsTo(pegawai, { foreignKey: "id_atasan"});
  pegawai.hasMany(izin, { foreignKey: "id_atasan"});
  izin.belongsTo(pegawai, { foreignKey: "id_peg"});
  pegawai.hasMany(izin, { foreignKey: "id_peg"});

  return {
    jabatan,
    pegawai,
    presensi,
    izin,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;