
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('podcasts').del(),

    // Inserts seed entries
    knex('podcasts').insert([{title: 'A podcast', description: 'this is a description, this is a description', date: '1/18/1999', link: 'www.google.com', image_url: 'http://www.denverpost.com/wp-content/uploads/2016/04/20150210__20150211_A10_BZ11MERGELANEp1.jpg?w=654'}, {title: 'A podcast', description: 'this is a description, this is a description', date: '1/18/1999', link: 'www.google.com', image_url: 'http://www.denverpost.com/wp-content/uploads/2016/04/20150210__20150211_A10_BZ11MERGELANEp1.jpg?w=654'}, {title: 'A podcast', description: 'this is a description, this is a description', date: '1/18/1999', link: 'www.google.com', image_url: 'http://www.denverpost.com/wp-content/uploads/2016/04/20150210__20150211_A10_BZ11MERGELANEp1.jpg?w=654'}])
  );
};
