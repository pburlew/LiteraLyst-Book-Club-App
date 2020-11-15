module.exports = function(sequelize, DataTypes) {
   const Member = sequelize.define("Member", {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [1]
         }
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [1]
         }
      }
   },{
      carset: "utf8",
   });
   return Member;
};
