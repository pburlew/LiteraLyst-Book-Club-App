module.exports = function(table) {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed");
      return table.create({ 
         title: "American Dirt",
         author: "Jeanine Cummins",
         synopsis: "American Dirt is an urgent, blistering, unforgettable book. In her portrayal of Lydia and Luca, a mother and son forced to leave their Mexican home, Jeanine Cummins has given face to migrants everywhere who flee violence and near-certain death in search of only one thing: a chance at life.",
         cover: "askdlf",
         status: "read" });
   }
   return Promise.resolve();
};
