module.exports = function(sequelize, DataTypes) {
   const Book = sequelize.define("Book", {
      title: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [1]
         }
      },
      author: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [1]
         }
      }, 
      synopsis: {
         type: DataTypes.TEXT,
         allowNull: false,
         len: [1]
      }, 
     status: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [1]
         }
      }
   }, {
      carset: "utf8",
   });
   return Book;
};
