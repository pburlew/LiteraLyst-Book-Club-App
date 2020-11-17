module.exports = function(sequelize, DataTypes) {
   const Review = sequelize.define("Review", {
      bookId: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },

      authorId: {
         type: DataTypes.INTEGER,
         allowNull: false,
      }, 

      body: {
         type: DataTypes.TEXT,
         allowNull: false,
         len: [1]
      }, 
   },{
      carset: "utf8",
      freezeTableName: true
   });

    
   return Review;
};
