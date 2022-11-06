module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define("Employees", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   rate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    days: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tax: {
      type:DataTypes.STRING,
      allowNull:false
    },
    philhealth: {
      type:DataTypes.STRING,
      allowNull:false
    },
    sss: {
      type:DataTypes.STRING,
      allowNull:false
    },
    deduction: {
      type:DataTypes.STRING,
      allowNull:false
    },
    gross: {
      type:DataTypes.STRING,
      allowNull:false
    },
    net: {
      type:DataTypes.STRING,
      allowNull:false
    },
  });

  return Employees;
};
