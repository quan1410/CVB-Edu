import {
  Award,
  BriefcaseBusiness,
  Building2,
  ChefHat,
  ClipboardCheck,
  Cpu,
  FileCheck2,
  GraduationCap,
  Hammer,
  HeartPulse,
  Hotel,
  Languages,
  Map,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

export const contactConfig = {
  brand: "CVB Edu",
  logo: "/logo.jpg",
  consultantAvatar: "/consultant-avatar.png",
  zaloQr: "/zalo-qr.jpg",
  hotline: "0774300969",
  email: "vuongquan14102004@gmail.com",
  address:
    "Tầng 5, tòa nhà Song Long, KĐT Nam Trung Yên, Yên Hòa, Cầu Giấy, Hà Nội, Hanoi, Vietnam",
  zalo: "https://zalo.me/0774300969",
  facebook: "https://www.facebook.com/profile.php?id=61589713376844",
  tiktok: "",
  messenger: "https://www.facebook.com/profile.php?id=61589713376844",
};

export const navItems = [
  { label: "Lộ Trình", href: "#lo-trinh" },
  { label: "Dịch Vụ", href: "#chuong-trinh" },
  { label: "Học Tiếng", href: "#dao-tao" },
  { label: "Công Nhận Bằng", href: "#cong-nhan-bang" },
  { label: "Cam Kết", href: "#cam-ket" },
  { label: "Liên Hệ", href: "#lien-he" },
];

export const trustStats = [
  { label: "Đào tạo từ con số 0" },
  { label: "Cam kết đầu ra với các chính sách, quyền lợi phù hợp" },
  { label: "Rõ ràng, minh bạch" },
  { label: "Đồng hành cùng học viên đến khi cất cánh" },
];

export const painPoints = [
  {
    icon: Map,
    title: "Chưa biết chọn ngành",
    text: "Phân tích năng lực, sở thích và mục tiêu nghề nghiệp trước khi chọn lộ trình.",
  },
  {
    icon: Languages,
    title: "Chưa có tiếng Đức",
    text: "Xác định mốc A1-B2 phù hợp với hồ sơ, phỏng vấn và thời điểm nộp.",
  },
  {
    icon: FileCheck2,
    title: "Lo hồ sơ visa",
    text: "Có checklist giấy tờ, mốc thời gian và người theo sát từng bước chuẩn bị.",
  },
  {
    icon: ClipboardCheck,
    title: "Chưa rõ chi phí",
    text: "Bóc tách chi phí học tiếng, hồ sơ, dịch thuật, visa và khoản dự phòng.",
  },
  {
    icon: Award,
    title: "Muốn công nhận bằng",
    text: "Kiểm tra văn bằng, kinh nghiệm và khả năng chuyển đổi sang hệ thống Đức.",
  },
  {
    icon: ShieldCheck,
    title: "Cần lộ trình cá nhân hóa",
    text: "Không dùng một kịch bản cho mọi hồ sơ; mỗi bạn có một hướng đi riêng.",
  },
];

export const services = [
  {
    title: "Du học nghề Đức",
    icon: GraduationCap,
    items: [
      "Tư vấn ngành nghề phù hợp",
      "Đào tạo tiếng Đức",
      "Chuẩn bị hồ sơ",
      "Kết nối trường/ngành nghề",
      "Hỗ trợ visa",
      "Đồng hành sau khi sang Đức",
    ],
  },
  {
    title: "Công nhận & chuyển đổi bằng CHLB Đức",
    icon: BriefcaseBusiness,
    items: [
      "Kiểm tra văn bằng Việt Nam",
      "Tư vấn khả năng công nhận bằng",
      "Hướng dẫn dịch thuật, công chứng, hợp pháp hóa",
      "Chuẩn bị hồ sơ gửi cơ quan Đức",
      "Theo dõi quá trình xét duyệt",
      "Tư vấn lộ trình bổ sung nếu cần",
    ],
  },
];

export const timeline = [
  {
    title: "Tư vấn năng lực & mục tiêu",
    text: "Nắm nền tảng học tập, tài chính, kinh nghiệm và mong muốn nghề nghiệp.",
  },
  {
    title: "Chọn ngành, bang, chương trình",
    text: "Đề xuất hướng phù hợp với hồ sơ và cơ hội thực tế tại Đức.",
  },
  {
    title: "Học tiếng Đức & chuẩn bị hồ sơ",
    text: "Theo dõi tiến độ học, giấy tờ, dịch thuật và lịch nộp.",
  },
  {
    title: "Nộp hồ sơ, phỏng vấn, visa",
    text: "Rà soát lỗi thường gặp và luyện phỏng vấn theo từng mục tiêu.",
  },
  {
    title: "Bay sang Đức & đồng hành sau nhập học",
    text: "Tiếp tục hỗ trợ hòa nhập, cập nhật tiến độ và xử lý vấn đề phát sinh.",
  },
];

export const programSeed = [
  {
    title: "Du học nghề Đức",
    slug: "du-hoc-nghe-duc",
    description:
      "Dành cho học sinh, sinh viên, người mới tốt nghiệp muốn vừa học nghề, vừa nhận lương tại Đức.",
    benefits: ["Lộ trình rõ từ A1 đến visa", "Định hướng ngành theo hồ sơ", "Hỗ trợ phỏng vấn và hòa nhập"],
  },
  {
    title: "Công nhận bằng tại Đức",
    slug: "cong-nhan-bang-tai-duc",
    description:
      "Dành cho người đã có bằng nghề, cao đẳng, đại học hoặc kinh nghiệm làm việc tại Việt Nam muốn chuyển đổi sang hệ thống Đức.",
    benefits: ["Rà soát bằng cấp", "Checklist hồ sơ Đức", "Tư vấn lộ trình bổ sung"],
  },
  {
    title: "Đào tạo tiếng Đức",
    slug: "dao-tao-tieng-duc",
    description:
      "Lộ trình học tiếng Đức từ A1 đến B1, có mốc học chính thức, buổi thi và ôn thi rõ ràng.",
    benefits: ["A1: 50 buổi", "A2: 50 buổi", "B1: 60 buổi và ôn thi"],
  },
  {
    title: "Tư vấn hồ sơ visa",
    slug: "tu-van-ho-so-visa",
    description:
      "Hỗ trợ chuẩn bị giấy tờ, rà soát hồ sơ, lịch hẹn và định hướng phỏng vấn visa.",
    benefits: ["Checklist minh bạch", "Rà soát lỗi thường gặp", "Theo sát tiến độ"],
  },
];

export const jobFieldSeed = [
  { name: "Điều dưỡng", slug: "dieu-duong", icon: "HeartPulse", description: "Phù hợp người kiên nhẫn, thích chăm sóc sức khỏe cộng đồng.", salary: "1.100-1.300 EUR/tháng", germanLevel: "B1-B2", fit: "Rất phù hợp nếu bạn bền bỉ và có tinh thần phục vụ." },
  { name: "Nhà hàng - Khách sạn", slug: "nha-hang-khach-san", icon: "Hotel", description: "Phù hợp người thích dịch vụ, giao tiếp và môi trường quốc tế.", salary: "950-1.200 EUR/tháng", germanLevel: "A2-B1", fit: "Phù hợp với bạn năng động, thích gặp khách hàng." },
  { name: "Cơ khí", slug: "co-khi", icon: "Wrench", description: "Phù hợp người thích kỹ thuật, máy móc và thao tác thực hành.", salary: "1.000-1.250 EUR/tháng", germanLevel: "A2-B1", fit: "Tốt cho hồ sơ thích thực hành và có tư duy kỹ thuật." },
  { name: "Điện - Điện tử", slug: "dien-dien-tu", icon: "Cpu", description: "Phù hợp người có nền tảng kỹ thuật và tư duy hệ thống.", salary: "1.000-1.300 EUR/tháng", germanLevel: "B1", fit: "Phù hợp nếu bạn thích lắp đặt, kiểm tra và vận hành hệ thống." },
  { name: "Công nghệ thông tin", slug: "cong-nghe-thong-tin", icon: "Cpu", description: "Phù hợp người yêu thích phần mềm, dữ liệu và tự học tốt.", salary: "1.050-1.350 EUR/tháng", germanLevel: "B1-B2", fit: "Tốt với hồ sơ có nền tảng tin học và khả năng tự học." },
  { name: "Xây dựng", slug: "xay-dung", icon: "Building2", description: "Phù hợp người có sức khỏe, kỷ luật và thích công trình thực tế.", salary: "1.000-1.250 EUR/tháng", germanLevel: "A2-B1", fit: "Phù hợp người thích môi trường ngoài hiện trường." },
  { name: "Logistics", slug: "logistics", icon: "Truck", description: "Phù hợp người thích vận hành, kho bãi, chuỗi cung ứng.", salary: "950-1.200 EUR/tháng", germanLevel: "A2-B1", fit: "Tốt cho bạn cẩn thận, có tư duy tổ chức và vận hành." },
  { name: "Bán hàng", slug: "ban-hang", icon: "Users", description: "Phù hợp người giao tiếp tốt, thích tư vấn khách hàng.", salary: "900-1.150 EUR/tháng", germanLevel: "B1", fit: "Phù hợp nếu bạn tự tin giao tiếp và xử lý tình huống." },
  { name: "Chế biến thực phẩm", slug: "che-bien-thuc-pham", icon: "ChefHat", description: "Phù hợp người tỉ mỉ, thích sản xuất và tiêu chuẩn chất lượng.", salary: "900-1.150 EUR/tháng", germanLevel: "A2-B1", fit: "Tốt cho bạn thích quy trình, vệ sinh và tiêu chuẩn rõ ràng." },
  { name: "Làm bánh", slug: "lam-banh", icon: "ChefHat", description: "Phù hợp người khéo tay, thích nghề thủ công và sáng tạo.", salary: "900-1.150 EUR/tháng", germanLevel: "A2-B1", fit: "Phù hợp người kiên trì, thích sản phẩm thủ công và chi tiết." },
];

export const jobIcons = {
  HeartPulse,
  Hotel,
  Wrench,
  Cpu,
  Building2,
  Truck,
  Users,
  ChefHat,
  Hammer,
};

export const commitments = [
  {
    title: "Tư vấn cá nhân hóa",
    text: "Đánh giá từng hồ sơ theo năng lực, mục tiêu, tài chính và thời điểm nộp.",
    icon: Users,
  },
  {
    title: "Minh bạch chi phí",
    text: "Bóc tách rõ khoản học tiếng, hồ sơ, dịch thuật, visa và chi phí dự phòng.",
    icon: ClipboardCheck,
  },
  {
    title: "Đồng hành hồ sơ",
    text: "Theo sát từ checklist giấy tờ, phỏng vấn đến lịch hẹn và kết quả xử lý.",
    icon: FileCheck2,
  },
  {
    title: "Định hướng ngành phù hợp",
    text: "Không chọn ngành theo phong trào; ưu tiên ngành khớp hồ sơ và khả năng hòa nhập.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Hỗ trợ trước và sau khi sang Đức",
    text: "Tiếp tục đồng hành trong giai đoạn chuẩn bị bay, nhập học và ổn định ban đầu.",
    icon: ShieldCheck,
  },
  {
    title: "Kết nối chương trình đa ngành",
    text: "Tư vấn du học nghề, học tiếng và công nhận bằng theo nhiều nhóm ngành thực tế.",
    icon: GraduationCap,
  },
];

export const testimonialSeed = [
  {
    studentName: "Nguyễn Minh Anh",
    program: "Du học nghề điều dưỡng",
    content: "Mình hiểu rõ từng mốc hồ sơ và không còn bị rối khi chuẩn bị phỏng vấn.",
    status: "Đã có visa",
  },
  {
    studentName: "Trần Quốc Huy",
    program: "Công nhận bằng cơ khí",
    content: "Đội tư vấn giúp mình biết bằng hiện tại cần bổ sung gì trước khi nộp sang Đức.",
    status: "Đang làm hồ sơ công nhận bằng",
  },
  {
    studentName: "Lê Phương Thảo",
    program: "Đào tạo tiếng Đức",
    content: "Lộ trình học rõ, có kiểm tra tiến độ nên phụ huynh cũng nắm được tình hình.",
    status: "Đang học tiếng",
  },
];

export const faqSeed = [
  {
    question: "Du học nghề Đức cần trình độ tiếng Đức nào?",
    answer: "Thông thường hồ sơ cần tối thiểu A2-B1 tùy chương trình, ngành nghề và yêu cầu phỏng vấn. Chúng tôi sẽ đánh giá hồ sơ để đưa mốc học phù hợp.",
    order: 1,
  },
  {
    question: "Có cần chứng minh tài chính không?",
    answer: "Một số trường hợp cần chuẩn bị tài chính hoặc tài khoản phong tỏa theo yêu cầu hồ sơ. Mức cụ thể phụ thuộc chương trình và thời điểm nộp.",
    order: 2,
  },
  {
    question: "Học nghề tại Đức có được nhận lương không?",
    answer: "Phần lớn chương trình Ausbildung có trợ cấp học nghề hàng tháng. Mức trợ cấp khác nhau theo ngành, bang và doanh nghiệp đào tạo.",
    order: 3,
  },
  {
    question: "Tôi đã có bằng ở Việt Nam thì có cần học lại không?",
    answer: "Không phải ai cũng cần bắt đầu lại. Cần kiểm tra văn bằng, kinh nghiệm và yêu cầu nghề tại Đức để xác định hướng công nhận hoặc bổ sung.",
    order: 4,
  },
  {
    question: "Công nhận bằng ở Đức mất bao lâu?",
    answer: "Thời gian phụ thuộc ngành nghề, cơ quan xét duyệt và độ đầy đủ của hồ sơ. Chúng tôi sẽ giúp bạn chuẩn bị timeline thực tế.",
    order: 5,
  },
  {
    question: "Chi phí làm hồ sơ gồm những gì?",
    answer: "Thường gồm học tiếng, dịch thuật, công chứng, hợp pháp hóa, phí nộp hồ sơ, visa và chi phí dự phòng. Tất cả cần được bóc tách minh bạch.",
    order: 6,
  },
  {
    question: "Trượt visa thì có được hỗ trợ lại không?",
    answer: "Chúng tôi rà soát nguyên nhân, điều kiện hồ sơ và tư vấn hướng bổ sung phù hợp trước khi cân nhắc nộp lại.",
    order: 7,
  },
  {
    question: "Phụ huynh có thể theo dõi tiến độ hồ sơ không?",
    answer: "Có. Phụ huynh có thể nhận cập nhật theo từng mốc học tiếng, hồ sơ, lịch hẹn và kết quả xử lý.",
    order: 8,
  },
];

export const courseSeed = [
  {
    title: "Tiếng Đức A1",
    slug: "tieng-duc-a1",
    level: "A1",
    description: "47 buổi học chính thức xây nền phát âm, ngữ pháp, giao tiếp cơ bản và thói quen học tiếng Đức; 3 buổi dành cho kiểm tra/thi.",
    duration: "50 buổi: 47 buổi học chính thức, 3 buổi thi",
  },
  {
    title: "Tiếng Đức A2",
    slug: "tieng-duc-a2",
    level: "A2",
    description: "Mở rộng ngữ pháp, từ vựng đời sống, phản xạ nghe nói và khả năng giao tiếp trong các tình huống thường gặp.",
    duration: "50 buổi",
  },
  {
    title: "Tiếng Đức B1",
    slug: "tieng-duc-b1",
    level: "B1",
    description: "Tập trung giao tiếp độc lập, viết - nói theo chủ đề, luyện phỏng vấn và củng cố kiến thức trước kỳ thi.",
    duration: "60 buổi và ôn thi",
  },
];

export const recognitionSteps = [
  "Kiểm tra văn bằng",
  "Đánh giá khả năng công nhận",
  "Chuẩn bị hồ sơ dịch thuật/công chứng",
  "Hỗ trợ gửi hồ sơ sang Đức",
  "Theo dõi kết quả",
];

export const heroImage =
  "/hero-banner.png";
