export const services = [
  {
    id: 1,
    title: "Engine Overhaul",
    desc: "Pemeriksaan dan perbaikan menyeluruh mesin motor Anda. Dari tune-up ringan hingga rebuild total dengan komponen bergaransi.",
    tag: "MESIN",
  },
  {
    id: 2,
    title: "Sistem Kelistrikan",
    desc: "Diagnosa dan perbaikan sistem elektrikal, ECU remapping, instalasi aksesoris, dan upgrade performa kelistrikan.",
    tag: "ELEKTRIKAL",
  },
  {
    id: 3,
    title: "Modifikasi Custom",
    desc: "Wujudkan motor impian Anda. Custom bodykit, airbrush, konversi aliran, dan build full custom dari konsep ke kenyataan.",
    tag: "CUSTOM",
  },
  {
    id: 4,
    title: "Kaki-Kaki & Suspensi",
    desc: "Balancing, spooring, ganti ban, upgrade suspensi, dan alignment untuk handling terbaik di segala medan.",
    tag: "SUSPENSI",
  },
  {
    id: 5,
    title: "Perawatan Berkala",
    desc: "Service rutin, ganti oli, filter, busi, rantai, dan semua kebutuhan perawatan motor Anda secara teratur dan profesional.",
    tag: "SERVICE",
  },
  {
    id: 6,
    title: "Body & Cat",
    desc: "Cat ulang, perbaikan dent, detailing, coating ceramic, dan pemasangan aksesoris eksterior profesional.",
    tag: "EKSTERIOR",
  },
];

const yearsInOperation = new Date().getFullYear() - 2021;
export const stats = [
  { value: `${yearsInOperation}+`, label: "Tahun Pengalaman" },
  { value: "500+", label: "Layanan Motor Diselesaikan" },
  { value: "98%", label: "Kepuasan Pelanggan" },
  { value: "3", label: "Mekanik Berpengalaman" },
];

export const testimonials = [
  {
    id: 1,
    name: "Rizky Maulana",
    role: "Pemilik CBR 250RR",
    text: "Rads Garage beda banget sama bengkel lain. Transparan, hasil kerja rapi, dan mekaniknya beneran tahu seluk-beluk motor sport. Motor saya lebih bertenaga setelah tune-up di sini.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dewi Sartika",
    role: "Pemilik NMAX 155",
    text: "Sudah 3 tahun langganan di Rads Garage. Servis berkala, ganti kampas, sampai custom lampu — semuanya dikerjakan cepat dan harga bersaing. Sangat recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Pemilik Ninja 250",
    text: "Custom project motor saya dikerjakan oleh tim Rads dengan detail yang luar biasa. Hasilnya melebihi ekspektasi. Mereka benar-benar passionate soal motor.",
    rating: 5,
  },
];

export const team = [
  { name: "Renaldi", role: "Founder & Head Mechanic", exp: "5 Tahun" },
  { name: "Kiting", role: "Junior Engine Specialist", exp: "2 Tahun" },
];

export const gallery = [
  {
    id: 1,
    author: "Pak Kurnadi",
    label: "Honda Vario 125",
    cat: "Service",
    images: ["/images/gallery/hondaVario-1-(1).png", "/images/gallery/hondaVario-1-(2).png", "/images/gallery/hondaVario-1-(3).png"],
  },
  { id: 2, author: "Pramudyo", label: "Honda BeaT Deluxe", cat: "Modifikasi", images: ["/images/gallery/hondaBeat-1-(1).jpg", "/images/gallery/hondaBeat-1-(2).jpg"] },
];
