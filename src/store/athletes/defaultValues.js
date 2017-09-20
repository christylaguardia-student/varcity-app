
export default {
  _id: {
    info: {
      firstName: '',
      lastName: '',
      public: false,
      profileUrl: '',
      primarySport: '',
      position: '',
      person: {
        dob: '9/20/2017',
        gender: '', 
        height: 0,
        heightUom: 'in',
        weight: 0,
        weightUom: 'lb'
      },
      organization: '',
      location: {
        city: '',
        state: '',
        country: '',
      },
      socials: {
        facebookUrl: '',
        twitterUrl: '',
        instagramUrl: '',
      }
    },
    bio: {
      about: '',
      awards: '',
    },
    edu: [],
    testScores: {
      SAT: {
        reading: 0,
        math: 0,
        writing: 0
      },
      ACT: {
        reading: 0,
        math: 0,
        writing: 0,
        science: 0
      }
    },
    sports: [],
    media: []
  }
};
