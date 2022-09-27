import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Firas',
      email: 'firas@admin.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Aldo',
      email: 'aldo@customer.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    }
  ],
  products: [
    {
      image: require('../public/data/placeholder.png'),
      duration: '13D/10N',
      title: 'Travelling Europe',
      route: 'German - Swiss - England - Canada - Italy',
      price: '5000/Pack',
    },
    {
      image: require('../public/data/placeholder.png'),
      duration: '13D/10N',
      title: 'Travelling Europe',
      route: 'German - Swiss - England - Canada - Italy',
      price: '5000/Pack',
    },
    {
      image: require('../public/data/placeholder.png'),
      duration: '13D/10N',
      title: 'Travelling Europe',
      route: 'German - Swiss - England - Canada - Italy',
      price: '5000/Pack',
    },
    {
      image: require('../public/data/placeholder.png'),
      duration: '13D/10N',
      title: 'Travelling Europe',
      route: 'German - Swiss - England - Canada - Italy',
      price: '5000/Pack',
    },
    {
      image: require('../public/data/placeholder.png'),
      duration: '13D/10N',
      title: 'Travelling Europe',
      route: 'German - Swiss - England - Canada - Italy',
      price: '5000/Pack',
    },
    {
      image: require('../public/data/placeholder.png'),
      duration: '13D/10N',
      title: 'Travelling Europe',
      route: 'German - Swiss - England - Canada - Italy',
      price: '5000/Pack',
    },
  ]
};

export { data };
