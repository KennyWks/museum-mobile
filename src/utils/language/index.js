let languages = {};

const condition = 'english';
if (condition === 'english') {
  languages = {
    formVisitors: {
      name: 'Name',
      nationality: 'Your Nationality',
      states_provinces: 'Your States/Provinces',
      cities_regions: 'Your Cities/Regions',
      address: 'Address',
      gender: 'Gender',
      jobs: 'Your Jobs',
      school_college: 'Your School/University',
      phone_number: 'Phone Number',
    },
    formRecommendations: {
      titleHeaderPage: 'Recommendations',
      name: 'Name',
      email: 'Email Address',
      phone: 'HandPhone Number',
      recommendations: 'Recommendations',
    },
    tabNavigationMenu: {
      home: 'Home',
      scanner: 'Scanner',
      register: 'Register',
      recommendations: 'Recommend',
    },
    headerScannerPage: {
      title: 'Scan QR Code',
    },
    homePage: {
      cardTitle: {
        events: 'Events',
        articles: 'Articles',
      },
    },
    showDataPage: {
      subDataRelicHeader: {
        label1: 'Category',
        label2: 'Descriptions',
      },
    },
    button: {
      buttonSave: {
        label: 'Save',
      },
    },
    dropDown: {
      placeholder: 'Select ',
      searchPlaceholder: 'Search... ',
    },
  };
} else {
  languages = {
    formVisitors: {
      name: 'Nama',
      nationality: 'Asal Negara',
      states_provinces: 'Propinsi',
      cities_regions: 'Kota/Kabupaten',
      address: 'Alamat',
      gender: 'Jenis Kelamin',
      jobs: 'Pekerjaan',
      school_college: 'Nama Sekolah/Perguruan Tinggi',
      phone_number: 'Nomor HP',
    },
    formRecommendations: {
      titleHeaderPage: 'Saran',
      name: 'Nama',
      email: 'Alamat Email',
      phone: 'Nomor HP',
      recommendations: 'Saran',
    },
    tabNavigationMenu: {
      home: 'Beranda',
      scanner: 'Pemindai',
      register: 'Daftar',
      recommendations: 'Saran',
    },
    headerScannerPage: {
      title: 'Pindai QR Code',
    },
    homePage: {
      cardTitle: {
        events: 'Kegiatan',
        articles: 'Artikel',
      },
    },
    showDataPage: {
      subDataRelicHeader: {
        label1: 'Kategori',
        label2: 'Deskripsi',
      },
    },
    button: {
      buttonSave: {
        label: 'Simpan',
      },
    },
    dropDown: {
      placeholder: 'Pilih ',
      searchPlaceholder: 'Cari... ',
    },
  };
}

export {languages};
