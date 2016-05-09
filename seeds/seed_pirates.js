
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert([{name: 'Anne Bonney', poison: 'Rum', accessory: 'hot temper', image_url:'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'},{name: 'Charles Parrot', poison: 'Gold', accessory: 'Parrot', image_url:'http://www.ianbean.co.uk/wp-content/uploads/2015/09/pirate.jpg'},{name: 'Mandy McFearson', poison: 'Chicken', accessory: 'Bow and Arrow', image_url:'http://cdn.history.com/sites/2/2015/06/list-female-pirates-mary-read-GettyImages-89858524-E.jpeg'}])
  );
};
