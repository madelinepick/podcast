
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('podcasts').del(),

    // Inserts seed entries
    knex('podcasts').insert([{title: 'MergeLane incubates women-lead businesses', description: 'this is a description, this is a description', date: '6/1/2016', link: 'www.google.com', image_url: 'http://www.denverpost.com/wp-content/uploads/2016/04/20150210__20150211_A10_BZ11MERGELANEp1.jpg?w=654'}, {title: 'Boulder Digital Collective', description: 'this is a description, this is a description', date: '6/12/2016', link: 'www.google.com', image_url: 'http://static1.squarespace.com/static/57215e5dc6fc0829df286374/5721614545bf21749a2144b1/57216ea08a65e20d87783ca9/1463706799134/Stacie+LaughLR.jpg?format=1000w'}, {title: 'A tale of two founders', description: 'this is a description, this is a description', date: '6/22/2016', link: 'www.google.com', image_url: 'https://revolar.com/wp-content/uploads/2016/02/JaqRevolar-0009.jpg'}, {title: 'Interview with Sue Anderson', description: 'this is a description, this is a description', date: '6/27/2016', link: 'www.google.com', image_url: 'http://extras.mnginteractive.com/live/media/site21/2016/0128/20160128_122202_BZ27MERGELANE_KO19025.jpg'}, {title: 'Stormy waters for AI', description: 'this is a description, this is a description', date: '6/25/2016', link: 'www.google.com', image_url: 'http://nerdsmagazine.com/wp-content/uploads/2016/02/shutterstock_135053870-e1396029269930.jpg'}, {title: 'Turning idea into action', description: 'this is a description, this is a description', date: '6/15/2016', link: 'www.google.com', image_url: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-11/enhanced/webdr05/20/17/grid-cell-13775-1384988034-19.jpg'}])
  );
};
