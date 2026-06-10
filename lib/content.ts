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
  facebook: "https://www.facebook.com/vuong.quan.tvdh14/",
  tiktok: "",
  messenger: "https://www.facebook.com/vuong.quan.tvdh14/",
};

export const navItems = [
  { label: "Lộ Trình", href: "#lo-trinh" },
  { label: "Chương Trình", href: "#chuong-trinh" },
  { label: "Đào Tạo", href: "#dao-tao" },
  { label: "Công Nhận Bằng", href: "#cong-nhan-bang" },
  { label: "Cam Kết", href: "#cam-ket" },
  { label: "Liên Hệ", href: "#lien-he" },
];

export const trustStats = [
  { value: "3.247+", label: "học viên được tư vấn" },
  { value: "98%", label: "hồ sơ được định hướng đúng lộ trình" },
  { value: "50+", label: "ngành nghề tại Đức" },
  { value: "A-Z", label: "đồng hành từ Việt Nam đến Đức" },
];

export const painPoints = [
  {
    icon: Map,
    title: "Chưa biết chọn ngành nào",
    text: "Được phân tích năng lực, sở thích, tài chính và mục tiêu nghề nghiệp trước khi chọn lộ trình.",
  },
  {
    icon: Languages,
    title: "Không rõ cần tiếng Đức đến đâu",
    text: "Tư vấn mốc A1-B2 phù hợp với chương trình, lịch phỏng vấn và hồ sơ visa.",
  },
  {
    icon: FileCheck2,
    title: "Lo hồ sơ, visa, tài chính",
    text: "Có checklist giấy tờ, timeline và người theo sát từng bước chuẩn bị.",
  },
  {
    icon: Award,
    title: "Đã có bằng tại Việt Nam",
    text: "Kiểm tra khả năng công nhận bằng, bổ sung hồ sơ hoặc học chuyển đổi nếu cần.",
  },
  {
    icon: ShieldCheck,
    title: "Sợ bị tư vấn sai lộ trình",
    text: "Tập trung điều kiện thực tế, không vẽ cam kết vượt quá năng lực hồ sơ.",
  },
  {
    icon: ClipboardCheck,
    title: "Chưa biết chi phí thật",
    text: "Tách rõ chi phí học tiếng, hồ sơ, dịch thuật, visa và khoản dự phòng.",
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
  "Tư vấn định hướng cá nhân",
  "Đánh giá hồ sơ, bằng cấp, năng lực tiếng Đức",
  "Lựa chọn ngành nghề hoặc hướng công nhận bằng",
  "Đào tạo tiếng Đức và hoàn thiện hồ sơ",
  "Nộp hồ sơ, phỏng vấn, xin visa",
  "Sang Đức học tập, làm việc và ổn định cuộc sống",
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
      "Lộ trình học tiếng Đức từ A1 đến B1/B2, tập trung giao tiếp, phỏng vấn và hồ sơ du học nghề.",
    benefits: ["Lớp theo mục tiêu", "Theo dõi tiến độ", "Luyện phỏng vấn thực tế"],
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
  { name: "Điều dưỡng", slug: "dieu-duong", icon: "HeartPulse", description: "Phù hợp người kiên nhẫn, thích chăm sóc sức khỏe cộng đồng." },
  { name: "Nhà hàng - Khách sạn", slug: "nha-hang-khach-san", icon: "Hotel", description: "Phù hợp người thích dịch vụ, giao tiếp và môi trường quốc tế." },
  { name: "Cơ khí", slug: "co-khi", icon: "Wrench", description: "Phù hợp người thích kỹ thuật, máy móc và thao tác thực hành." },
  { name: "Điện - Điện tử", slug: "dien-dien-tu", icon: "Cpu", description: "Phù hợp người có nền tảng kỹ thuật và tư duy hệ thống." },
  { name: "Công nghệ thông tin", slug: "cong-nghe-thong-tin", icon: "Cpu", description: "Phù hợp người yêu thích phần mềm, dữ liệu và tự học tốt." },
  { name: "Xây dựng", slug: "xay-dung", icon: "Building2", description: "Phù hợp người có sức khỏe, kỷ luật và thích công trình thực tế." },
  { name: "Logistics", slug: "logistics", icon: "Truck", description: "Phù hợp người thích vận hành, kho bãi, chuỗi cung ứng." },
  { name: "Bán hàng", slug: "ban-hang", icon: "Users", description: "Phù hợp người giao tiếp tốt, thích tư vấn khách hàng." },
  { name: "Chế biến thực phẩm", slug: "che-bien-thuc-pham", icon: "ChefHat", description: "Phù hợp người tỉ mỉ, thích sản xuất và tiêu chuẩn chất lượng." },
  { name: "Làm bánh", slug: "lam-banh", icon: "ChefHat", description: "Phù hợp người khéo tay, thích nghề thủ công và sáng tạo." },
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
  "Tư vấn đúng năng lực, không vẽ lộ trình ảo",
  "Minh bạch chi phí",
  "Rõ ràng từng bước hồ sơ",
  "Đồng hành từ lúc học tiếng Đức đến khi sang Đức",
  "Hỗ trợ phụ huynh theo dõi tiến độ",
  "Bảo mật thông tin cá nhân",
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
    title: "Tiếng Đức A1 nền tảng",
    slug: "tieng-duc-a1",
    level: "A1",
    description: "Phát âm, ngữ pháp nền, giao tiếp cơ bản và thói quen học tiếng Đức.",
    duration: "10-12 tuần",
  },
  {
    title: "Tiếng Đức A2-B1 hồ sơ nghề",
    slug: "tieng-duc-a2-b1",
    level: "A2-B1",
    description: "Tập trung nghe nói, phỏng vấn, từ vựng nghề và chuẩn bị hồ sơ.",
    duration: "20-28 tuần",
  },
];

export const recognitionSteps = [
  "Kiểm tra bằng cấp hiện có",
  "Đối chiếu với yêu cầu nghề tại Đức",
  "Tư vấn hồ sơ cần chuẩn bị",
  "Dịch thuật, công chứng, hợp pháp hóa",
  "Nộp hồ sơ tới cơ quan có thẩm quyền",
  "Theo dõi kết quả và tư vấn bước tiếp theo",
];

export const heroImage =
  "/hero-banner.png";
