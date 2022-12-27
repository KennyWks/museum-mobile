let languages = {};

const condition = 'indonesia';
if (condition === 'english') {
  languages = {
    formRecommendations: {
      titleHeaderPage: 'Recommendations',
      name: 'Name',
      email: 'Email Address',
      phone: 'HandPhone Number',
      recommendations: 'Recommendations',
    },
  };
} else {
  languages = {
    formRecommendations: {
      titleHeaderPage: 'Saran',
      name: 'Nama',
      email: 'Alamat Email',
      phone: 'Nomor HP',
      recommendations: 'Saran',
    },
  };
}

export {languages};
