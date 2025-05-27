export const navLinks = [
  { href: "/", icon: "fas fa-home", text: "Trang chủ" },
  { href: "#", icon: "fas fa-tags", text: "Sản phẩm" },
  { href: "#", icon: "fas fa-bolt", text: "Khuyến mãi" },
  { href: "#", icon: "fas fa-project-diagram", text: "Dự án mẫu" },
  { href: "#", icon: "fas fa-newspaper", text: "Tin tức" },
  { href: "#", icon: "fas fa-info-circle", text: "Về chúng tôi" },
  { href: "#", icon: "fas fa-phone", text: "Liên hệ" },
];

export const categories = [
  { icon: "fas fa-microchip", name: "Vi xử lý" },
  { icon: "fas fa-memory", name: "Bộ nhớ" },
  { icon: "fas fa-solar-panel", name: "Arduino" },
  { icon: "fas fa-puzzle-piece", name: "Raspberry Pi" },
  { icon: "fas fa-battery-full", name: "Pin & Năng lượng" },
  { icon: "fas fa-tools", name: "Công cụ" },
];

export const featuredProducts = [
  {
    imgSrc:
      "https://static.cytron.io/image/cache/catalog/products/ARDUINO-UNO/A000066_03.front_970c6014-61ab-4-800x800.jpg",
    alt: "Arduino Uno",
    badge: "Bán chạy",
    badgeClass: "bg-secondary",
    name: "Arduino Uno R3",
    star: 4.5,
    reviews: 120,
    description: "Board Arduino phiên bản mới nhất, vi điều khiển ATmega328P",
    price: "215.000đ",
  },
  {
    imgSrc:
      "https://raspberrypi.vn/wp-content/uploads/2019/06/raspberry_pi_4_2-510x510.jpg",
    alt: "Raspberry Pi",
    badge: "Còn hàng",
    badgeClass: "bg-green-500",
    name: "Raspberry Pi 4 Model B - 4GB",
    star: 5,
    reviews: 85,
    description:
      "Máy tính mini Raspberry Pi 4 với RAM 4GB, hỗ trợ 4K dual display",
    price: "1.800.000đ",
  },
  {
    imgSrc:
      "https://product.hstatic.net/1000362368/product/mach_wifi_esp8266_cp2102_nodemcu_3__77b7a3b9a2e04ede8699fd958e0ffe84_master.jpg",
    alt: "Module ESP8266",
    badge: "Giảm giá",
    badgeClass: "bg-red-500",
    name: "Module WiFi ESP8266 NodeMCU",
    star: 4,
    reviews: 76,
    description: "Module kết nối WiFi ESP8266 với vi xử lý tích hợp để IoT",
    price: "85.000đ",
    oldPrice: "120.000đ",
  },
  {
    imgSrc:
      "https://product.hstatic.net/200000469993/product/37_module_arduino_kit_bo-1000x1000_4cc0b54652594a199ea0e641039a3dbe.jpg",
    alt: "Sensor Kit",
    badge: null,
    name: "Bộ Kit 37 Cảm Biến Arduino",
    star: 3,
    reviews: 42,
    description:
      "Bộ kit gồm 37 loại cảm biến các loại cho Arduino và Raspberry Pi",
    price: "295.000đ",
  },
];

export const newArrivals = [
  {
    imgSrc:
      "https://nshopvn.com/wp-content/uploads/2019/03/cam-bien-sieu-am-hc-sr04-q9zv-1.jpg",
    alt: "Sensors",
    name: "Cảm biến siêu âm HC-SR04",
    star: 4.5,
    price: "24.000đ",
  },
  {
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/grande/100/005/602/products/module-led-matrix-8x8-max2719-520x520.jpg?v=1679481698263",
    alt: "LED Matrix",
    name: "Matrix LED 8x8 MAX7219",
    star: 4,
    price: "60.000đ",
  },
  {
    imgSrc:
      "https://nshopvn.com/wp-content/uploads/2019/03/mach-dieu-khien-dong-co-dc-l298n-skiq-1.jpg",
    alt: "Motor Driver",
    name: "Motor Driver L298N",
    star: 3.5,
    price: "38.000đ",
  },
];

export const blogPosts = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1563452965085-2e77e5bf2607?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Arduino Project",
    date: "20/04/2025",
    author: "Admin",
    title: "Hướng dẫn làm robot tránh vật cản với Arduino",
    excerpt:
      "Học cách tạo một robot đơn giản có khả năng phát hiện và tránh chướng ngại vật với Arduino và cảm biến siêu âm.",
    link: "#",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Raspberry Pi Project",
    date: "15/04/2025",
    author: "Admin",
    title: "Xây dựng hệ thống giám sát nhiệt độ với Raspberry Pi",
    excerpt:
      "Thiết lập một hệ thống IoT để giám sát nhiệt độ và độ ẩm từ xa sử dụng Raspberry Pi và cảm biến DHT22.",
    link: "#",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Electronics Basics",
    date: "10/04/2025",
    author: "Admin",
    title: "Kiến thức cơ bản về vi điều khiển cho người mới bắt đầu",
    excerpt:
      "Giới thiệu những khái niệm cơ bản về vi điều khiển, cách hoạt động và các ứng dụng trong các dự án điện tử.",
    link: "#",
  },
];

export const testimonials = [
  {
    star: 5,
    quote:
      "Tôi đã mua rất nhiều linh kiện từ ElectroTech cho các dự án Arduino của mình. Sản phẩm luôn đúng như mô tả và giao hàng nhanh chóng.",
    imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    alt: "Customer 1",
    name: "Nguyễn Văn A",
    title: "Sinh viên Điện tử",
  },
  {
    star: 4.5,
    quote:
      "Dịch vụ chăm sóc khách hàng tuyệt vời. Tôi đã được tư vấn rất nhiệt tình khi chọn linh kiện phù hợp cho dự án IoT của công ty.",
    imgSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    alt: "Customer 2",
    name: "Trần Thị B",
    title: "Kỹ sư phần mềm",
  },
  {
    star: 4,
    quote:
      "Giá cả hợp lý nhất trên thị trường mà tôi từng thấy. Đặc biệt là chương trình khuyến mãi cho sinh viên rất hấp dẫn.",
    imgSrc: "https://randomuser.me/api/portraits/men/67.jpg",
    alt: "Customer 3",
    name: "Lê Minh C",
    title: "Giảng viên ĐH Bách Khoa",
  },
];

export const footerQuickLinks = [
  { href: "#", text: "Trang chủ" },
  { href: "#", text: "Sản phẩm" },
  { href: "#", text: "Khuyến mãi" },
  { href: "#", text: "Tin tức" },
  { href: "#", text: "Về chúng tôi" },
  { href: "#", text: "Liên hệ" },
];

export const footerCategoryLinks = [
  { href: "#", text: "Arduino" },
  { href: "#", text: "Raspberry Pi" },
  { href: "#", text: "Cảm biến & Module" },
  { href: "#", text: "Linh kiện điện tử" },
  { href: "#", text: "Dụng cụ & Phụ kiện" },
  { href: "#", text: "Kit học tập" },
];
