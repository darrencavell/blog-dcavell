'use strict';

const Blog = require('./../models').Blog;

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return Promise.all([
      Blog.create({
        userId: 1,
        name: 'Tips Menangani Stress Untuk Programmer',
        content: 'Setiap aktivitas pekerjaan atau suatu profesi pasti mengalami masa-masa stress. Tidak terkecuali dengan profesi Programmer. ¨I´m programmer, I Have No Life¨, bahkan slogan itu sudah sering diucapkan oleh programmer. Itu membuktikan kalau profesi sebagai programmer rentan terhadap stress.',
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      Blog.create({
        userId: 1,
        name: '4 Text Editor Terbaik Menurut HACKTIV8',
        content: 'Ketika mempelajari web development, kamu akan membutuhkan sebuah text editor untuk menuliskan program. Text editor yang baik untuk melakukan coding adalah text editor yang bisa membantu pekerjaan seorang developer.',
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      Blog.create({
        userId: 2,
        name: '5 Hal yang Programmer Bisa Lakukan di Weekend',
        content: 'Weekend adalah hari yang ditunggu-tunggu oleh kebanyakan orang. Tak terkecuali oleh seorang programmer. Setelah melakukan pekerjaan coding dari hari Senin - Jumat seorang programmer juga harus mengistirahat diri agar bisa kembali fresh ketika hari Senin datang. Berikut ini ada 5 hal yang Programmer bisa lakukan di Weekend',
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      Blog.create({
        userId: 2,
        name: 'Beasiswa Hana Bank Untuk Kelas Immersive Full-Stack JavaScript',
        content: 'Akhir Desember 2018 HACKTIV8 dengan resmi bekerjasama dengan KEB Hana Bank. Hana Financial Group memiliki komitmen yang sangat tinggi kepada pengembangan bisnis di Indonesia. Hana Financial Group memiliki minat yang besar di bidang IT dan melalui KEB Hana Bank Indonesia, menyediakan kesempatan bagi talenta-talenta di Indonesia untuk mempelajari kemampuan IT yang banyak dicari.',
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      Blog.create({
        userId: 3,
        name: 'Why Learning AWS DevOps is Great for your Career',
        content: 'Secara singkat, ini berarti tidak ada satu jalan yang khusus dan pasti untuk mencapai kesuksesan. Sekarang kita tengah berada di masa perubahan. Banyak bisnis yang mengubah cara kerja mereka untuk bersaing dengan startup yang mulai mengambil alih berbagai macam industri. Amazon mengubah pengalaman berbelanja. Facebook dan Google membuat revolusi di dunia periklanan digital. Gojek dan Grab mengubah dunia taxi dan transportasi umum. Dan di masa mendatang, mobil tanpa pengemudi berkemungkinan besar mengubah cara orang berpergian.',
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      Blog.create({
        userId: 1,
        name: 'Beginner\'s Guide to Scrum and Agile Project Management (Part 2)',
        content: 'Dalam post kami minggu lalu, kami mengenalkanmu dengan arti dari konsep “Agile” dan “Scrum”. Jika kamu belum membaca post itu, klik link ini sebelum kamu lanjut membaca post lanjutan ini. Blog post minggu ini akan membawamu lebih dalam ke dunia Agile Scrum.',
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      Blog.create({
        userId: 1,
        name: 'Beginner\'s Guide to Scrum and Agile Project Management (Part 1)',
        content: 'Apa yang dapat membantumu merakit sebuah mobil, membangun software atau bahkan merenovasi rumah? Sebuah papan tulis, setumpuk sticky notes, dan ilmu untuk menggunakannya secara efektif! Jika kamu bekerja di bidang teknologi, mungkin istilah “Agile” dan “Scrum” tidak asing bagimu. Agile dan Scrum merupakan sistem yang banyak digunakan di bidang teknologi dan tampaknya memiliki bahasanya sendiri. Istilah seperti “planning poker”, “stand-ups” dan “sprints” sering digunakan oleh pengguna Agile dan Scrum.',
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      Blog.create({
        userId: 3,
        name: 'The Advantage of Google\'s Golang',
        content: 'Dalam post ini, kita akan berbicara mengenai Golang dan bagaimana cara ideal untuk mulai belajar Golang. Tapi, artikel ini tidak akan membahas fitur utama Go yang sudah banyak diketahui banyak orang. Kami akan membahas fitur-fitur Go yang mungkin terlihat kecil, tapi akan sangat berguna jika saat kamu menggunakan Go.',
        createdAt: new Date(),
        updatedAt: new Date()
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Blogs', null, {});
  }
};
