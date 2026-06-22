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
  { label: "Trường hợp", href: "#truong-hop" },
  { label: "Hỗ trợ", href: "#ho-tro" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Chương trình", href: "#chuong-trinh" },
  { label: "FAQ", href: "#faq" },
  { label: "Liên Hệ", href: "#lien-he" },
];

export const heroTrustSignals = [
  "Tư vấn theo từng trường hợp hồ sơ, không dùng một kịch bản chung",
  "Hỗ trợ học tiếng Đức, chọn ngành, giấy tờ và các mốc hồ sơ",
  "Trao đổi rõ phạm vi hỗ trợ, chi phí dự kiến và tiến độ xử lý",
  "Có Zalo/hotline để học viên và phụ huynh theo dõi trực tiếp",
];

export const audienceSituations = [
  {
    title: "Em mới tốt nghiệp THPT, chưa biết chọn ngành",
    situation: "Bạn cần hiểu ngành nào phù hợp với sức khỏe, tính cách, học lực và khả năng học tiếng Đức.",
    checks: "Kiểm tra độ tuổi, học bạ/bằng tốt nghiệp, mong muốn nghề nghiệp, tài chính dự kiến và thời điểm có thể bắt đầu học tiếng.",
    result: "Nhận danh sách ngành nên tìm hiểu trước, mốc học tiếng cần đạt và các giấy tờ nên chuẩn bị từ sớm.",
  },
  {
    title: "Em đang học tiếng Đức nhưng chưa có hồ sơ",
    situation: "Bạn đã học A1/A2/B1 nhưng chưa rõ khi nào nên chuẩn bị giấy tờ, dịch thuật hoặc đặt lịch hồ sơ.",
    checks: "Kiểm tra trình độ hiện tại, lịch thi dự kiến, mục tiêu ngành, giấy tờ cá nhân và các mốc có thể nộp.",
    result: "Nhận timeline học tiếp, thi chứng chỉ và chuẩn bị hồ sơ theo đúng thứ tự.",
  },
  {
    title: "Đã có bằng nghề/cao đẳng/đại học",
    situation: "Bạn muốn biết bằng ở Việt Nam có thể dùng để công nhận, bổ sung hoặc định hướng việc làm tại Đức hay không.",
    checks: "Rà soát ngành đào tạo, bảng điểm, kinh nghiệm làm việc, chứng chỉ liên quan và yêu cầu tiếng Đức theo nhóm nghề.",
    result: "Nhận hướng công nhận bằng hoặc phương án bổ sung nếu hồ sơ chưa đủ điều kiện.",
  },
  {
    title: "Phụ huynh muốn kiểm tra chi phí và tiến độ",
    situation: "Gia đình cần biết con nên bắt đầu từ đâu, chi phí gồm những khoản nào và rủi ro hồ sơ nằm ở bước nào.",
    checks: "Trao đổi về mục tiêu của học viên, ngân sách, thời gian học tiếng, giấy tờ gia đình và khả năng theo dõi tiến độ.",
    result: "Nhận bức tranh tổng quan về mốc thời gian, khoản chi thường gặp và cách cập nhật tiến độ.",
  },
  {
    title: "Hồ sơ từng bị chậm hoặc đang lo điều kiện visa",
    situation: "Bạn đã chuẩn bị một phần hồ sơ nhưng bị vướng giấy tờ, lịch thi, lịch hẹn hoặc chưa tự tin về điều kiện visa.",
    checks: "Rà soát các giấy tờ đã có, giấy tờ còn thiếu, lỗi thường gặp, lịch hẹn và nội dung cần giải trình nếu có.",
    result: "Nhận danh sách việc cần xử lý trước, việc nên tạm dừng và bước tiếp theo phù hợp với hồ sơ thật.",
  },
];

export const serviceGroups = [
  {
    title: "Tư vấn du học nghề Đức",
    summary: "Dành cho học viên muốn vừa học nghề vừa làm việc tại Đức theo chương trình phù hợp với hồ sơ.",
    items: [
      "Kiểm tra độ tuổi, bằng cấp, sức khỏe, tài chính dự kiến và mục tiêu nghề nghiệp.",
      "Gợi ý nhóm ngành nên tìm hiểu trước khi học viên quyết định đăng ký.",
      "Sắp xếp các mốc học tiếng, chuẩn bị giấy tờ, phỏng vấn và hồ sơ visa.",
    ],
  },
  {
    title: "Học tiếng Đức và định hướng chứng chỉ",
    summary: "Gắn việc học tiếng với mục tiêu hồ sơ thay vì học rời rạc, không biết khi nào cần thi.",
    items: [
      "Xác định trình độ hiện tại và mốc A1, A2, B1 hoặc B2 cần hướng tới.",
      "Theo dõi tiến độ học để tránh chuẩn bị hồ sơ quá sớm hoặc quá muộn.",
      "Chuẩn bị nội dung giao tiếp/phỏng vấn theo ngành và tình huống hồ sơ.",
    ],
  },
  {
    title: "Hồ sơ, visa và giấy tờ liên quan",
    summary: "Hỗ trợ người học hiểu rõ giấy tờ nào cần chuẩn bị, giấy tờ nào cần dịch thuật/công chứng và mốc nào cần ưu tiên.",
    items: [
      "Lập checklist giấy tờ cá nhân, học tập, chứng chỉ tiếng Đức và hồ sơ liên quan.",
      "Rà soát lỗi thường gặp trước khi nộp hoặc đặt lịch hẹn.",
      "Trao đổi rõ phần CVB Edu hỗ trợ và phần học viên/gia đình cần tự chuẩn bị.",
    ],
  },
  {
    title: "Công nhận bằng và định hướng làm việc tại Đức",
    summary: "Dành cho người đã có bằng hoặc kinh nghiệm tại Việt Nam và muốn tìm hiểu khả năng chuyển đổi sang hệ thống Đức.",
    items: [
      "Kiểm tra bằng cấp, bảng điểm, kinh nghiệm và nhóm nghề liên quan.",
      "Hướng dẫn chuẩn bị hồ sơ dịch thuật, công chứng hoặc bổ sung nếu cần.",
      "Lưu ý rằng kết quả phụ thuộc vào hồ sơ cá nhân và cơ quan xét duyệt tại Đức.",
    ],
  },
];

export const processSteps = [
  {
    title: "Kiểm tra thông tin ban đầu",
    text: "Tư vấn viên hỏi nhanh về tuổi, tỉnh thành, bằng cấp, trình độ tiếng Đức, mục tiêu ngành và thời điểm dự kiến đi.",
  },
  {
    title: "Đánh giá bằng cấp, tiếng Đức và mục tiêu",
    text: "Hồ sơ được phân loại theo nhóm phù hợp: du học nghề, học tiếng trước, chuẩn bị visa hoặc tìm hiểu công nhận bằng.",
  },
  {
    title: "Đề xuất lộ trình học tiếng, ngành nghề và hồ sơ",
    text: "Bạn nhận được các mốc cần làm trước/sau, giấy tờ nên chuẩn bị và điểm cần cân nhắc trước khi đăng ký.",
  },
  {
    title: "Chuẩn bị giấy tờ và theo dõi tiến độ",
    text: "Từng đầu việc như chứng chỉ, dịch thuật, công chứng, lịch hẹn hoặc phỏng vấn được theo dõi theo timeline.",
  },
  {
    title: "Chuẩn bị trước khi bay hoặc trước khi nộp công nhận bằng",
    text: "Tư vấn viên rà lại các mốc cuối, nội dung cần trao đổi và phương án xử lý nếu hồ sơ phát sinh thay đổi.",
  },
];

export const programTracks = [
  {
    title: "Du học nghề điều dưỡng",
    fit: "Phù hợp học viên kiên nhẫn, có tinh thần chăm sóc và sẵn sàng học tiếng nghiêm túc.",
    details: ["Kiểm tra sức khỏe, trình độ tiếng Đức và khả năng theo học dài hạn.", "Trao đổi trước về đặc thù nghề, lịch học, thực hành và yêu cầu tại Đức."],
  },
  {
    title: "Du học nghề nhà hàng - khách sạn",
    fit: "Phù hợp học viên thích môi trường dịch vụ, giao tiếp và có khả năng làm việc theo ca.",
    details: ["Đánh giá khả năng giao tiếp, thái độ dịch vụ và mức tiếng cần đạt.", "Gợi ý mốc học tiếng, hồ sơ và phỏng vấn theo nhóm ngành dịch vụ."],
  },
  {
    title: "Du học nghề cơ khí/kỹ thuật",
    fit: "Phù hợp học viên thích thực hành, máy móc, quy trình và môi trường làm việc kỹ thuật.",
    details: ["Rà soát nền tảng học tập, kinh nghiệm thực hành nếu có và khả năng học thuật ngữ nghề.", "Trao đổi yêu cầu hồ sơ theo từng ngành kỹ thuật cụ thể."],
  },
  {
    title: "Công nhận bằng điều dưỡng/y tế",
    fit: "Dành cho người đã có bằng, bảng điểm hoặc kinh nghiệm trong lĩnh vực y tế tại Việt Nam.",
    details: ["Kiểm tra văn bằng, bảng điểm, kinh nghiệm và giấy tờ nghề nghiệp liên quan.", "Tư vấn hướng bổ sung, dịch thuật và nộp hồ sơ theo yêu cầu cơ quan xét duyệt."],
  },
  {
    title: "Học tiếng Đức từ A1 đến B1/B2",
    fit: "Dành cho học viên cần xây nền tiếng Đức theo mục tiêu hồ sơ, phỏng vấn và hòa nhập.",
    details: ["A1: 50 buổi, gồm 47 buổi học chính thức và 3 buổi thi/kiểm tra.", "A2: 50 buổi. B1: 60 buổi và ôn thi; B2 định hướng theo yêu cầu ngành/hồ sơ."],
  },
];

export const anonymousCases = [
  {
    profile: "Học viên 19 tuổi, mới tốt nghiệp THPT",
    initialState: "Chưa học tiếng Đức, gia đình muốn biết nên bắt đầu từ ngành nào và cần chuẩn bị chi phí ra sao.",
    issue: "Bạn chưa có tiêu chí chọn ngành, chưa biết giấy tờ nào cần làm trước và dễ bị rối giữa học tiếng, hồ sơ và visa.",
    direction: "Tư vấn viên kiểm tra học lực, sức khỏe, mục tiêu nghề nghiệp, ngân sách gia đình và đề xuất mốc học tiếng cùng nhóm ngành nên tìm hiểu.",
  },
  {
    profile: "Học viên đang học A2",
    initialState: "Đã học tiếng một thời gian nhưng chưa có timeline rõ để lên B1 và chuẩn bị hồ sơ.",
    issue: "Nếu đợi đến khi có chứng chỉ mới chuẩn bị giấy tờ, hồ sơ có thể bị chậm; nếu chuẩn bị quá sớm, một số giấy tờ có thể phải làm lại.",
    direction: "Tư vấn viên sắp xếp lịch học, lịch thi dự kiến, danh sách giấy tờ cần chuẩn bị song song và nội dung cần luyện phỏng vấn.",
  },
  {
    profile: "Người đã có bằng điều dưỡng tại Việt Nam",
    initialState: "Muốn biết có thể công nhận bằng tại Đức hay cần học bổ sung.",
    issue: "Bằng cấp, bảng điểm, kinh nghiệm và yêu cầu của cơ quan xét duyệt cần được kiểm tra trước khi chọn hướng đi.",
    direction: "Tư vấn viên rà soát văn bằng, kinh nghiệm, trình độ tiếng Đức và hướng dẫn nhóm giấy tờ cần dịch thuật/công chứng.",
  },
  {
    profile: "Phụ huynh muốn nắm tổng chi phí cho con",
    initialState: "Gia đình cần biết những khoản chi thường gặp và khi nào cần chuẩn bị.",
    issue: "Nếu chỉ nghe một con số tổng, phụ huynh khó biết phần nào là học tiếng, hồ sơ, dịch thuật, visa hoặc dự phòng.",
    direction: "Tư vấn viên bóc tách từng nhóm chi phí, mốc phát sinh dự kiến và cách gia đình theo dõi tiến độ cùng học viên.",
  },
];

export const educationReasons = [
  {
    title: "Không phải ai cũng phù hợp cùng một lộ trình",
    text: "Tuổi, bằng cấp, sức khỏe, tài chính, ngành chọn và trình độ tiếng Đức tạo ra những hướng chuẩn bị khác nhau.",
  },
  {
    title: "Thứ tự chuẩn bị giấy tờ ảnh hưởng đến thời gian",
    text: "Một số giấy tờ cần dịch thuật, công chứng hoặc xin lại; làm sai thứ tự có thể khiến hồ sơ bị chậm.",
  },
  {
    title: "Trình độ tiếng Đức cần gắn với mục tiêu hồ sơ",
    text: "Mốc A1, A2, B1 hoặc B2 phụ thuộc ngành, phỏng vấn, yêu cầu chương trình và khả năng theo học thực tế.",
  },
  {
    title: "Tư vấn ban đầu giúp biết việc cần làm trước",
    text: "Ở bước đầu, bạn chưa cần nộp giấy tờ. Điều quan trọng là xác định đúng tình trạng hiện tại và bước tiếp theo.",
  },
];

export const trustStats = [
  { label: "Tư vấn theo từng trường hợp hồ sơ" },
  { label: "Hỗ trợ học tiếng Đức và giấy tờ" },
  { label: "Trao đổi rõ chi phí, phạm vi hỗ trợ và tiến độ" },
  { label: "Có Zalo/hotline để theo dõi trực tiếp" },
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
    studentName: "Case ẩn danh 01",
    program: "Học viên mới tốt nghiệp THPT",
    content: "Tình trạng ban đầu: chưa học tiếng Đức, chưa biết chọn ngành. Hướng tư vấn: kiểm tra học lực, sức khỏe, ngân sách và mốc học tiếng trước khi chọn chương trình.",
    status: "Case tư vấn thường gặp",
  },
  {
    studentName: "Case ẩn danh 02",
    program: "Học viên đang học A2",
    content: "Tình trạng ban đầu: đã học tiếng nhưng chưa có timeline hồ sơ. Hướng tư vấn: sắp xếp lịch lên B1, giấy tờ cần chuẩn bị song song và nội dung phỏng vấn.",
    status: "Case tư vấn thường gặp",
  },
  {
    studentName: "Case ẩn danh 03",
    program: "Người đã có bằng điều dưỡng",
    content: "Tình trạng ban đầu: muốn tìm hiểu công nhận bằng tại Đức. Hướng tư vấn: rà soát văn bằng, bảng điểm, kinh nghiệm, trình độ tiếng và giấy tờ cần dịch thuật.",
    status: "Case tư vấn thường gặp",
  },
];

export const faqSeed = [
  {
    question: "Chưa biết tiếng Đức có đăng ký tư vấn được không?",
    answer: "Có. Ở bước đầu, tư vấn viên sẽ kiểm tra tuổi, bằng cấp, mục tiêu ngành và thời gian bạn có thể dành cho việc học tiếng. Sau đó mới đề xuất mốc A1, A2, B1 hoặc B2 phù hợp với hồ sơ.",
    order: 1,
  },
  {
    question: "Bao lâu thì có thể bắt đầu làm hồ sơ?",
    answer: "Thời điểm bắt đầu phụ thuộc vào giấy tờ cá nhân, trình độ tiếng Đức, ngành chọn và yêu cầu chương trình. Một số giấy tờ có thể chuẩn bị song song khi học tiếng, nhưng cần rà soát để tránh làm sai thứ tự.",
    order: 2,
  },
  {
    question: "Có bắt buộc phải có B1 không?",
    answer: "Không có một câu trả lời chung cho mọi hồ sơ. Nhiều chương trình yêu cầu A2 hoặc B1 ở từng mốc khác nhau; một số ngành hoặc hướng công nhận bằng có thể cần mức tiếng cao hơn. Tư vấn viên sẽ kiểm tra theo mục tiêu cụ thể của bạn.",
    order: 3,
  },
  {
    question: "Phụ huynh có thể đăng ký tư vấn thay con không?",
    answer: "Có. Phụ huynh có thể để lại thông tin để cùng nắm chi phí, tiến độ và giấy tờ cần chuẩn bị. Khi trao đổi chi tiết, học viên vẫn nên tham gia để xác nhận mục tiêu ngành và khả năng học tiếng.",
    order: 4,
  },
  {
    question: "CVB Edu có cam kết visa không?",
    answer: "Không cam kết chắc chắn visa. CVB Edu hỗ trợ kiểm tra điều kiện, chuẩn bị giấy tờ, rà soát hồ sơ và luyện nội dung cần thiết. Kết quả phụ thuộc vào hồ sơ cá nhân và cơ quan xét duyệt.",
    order: 5,
  },
  {
    question: "Công nhận bằng tại Đức cần chuẩn bị gì?",
    answer: "Thông thường cần kiểm tra văn bằng, bảng điểm, kinh nghiệm, giấy tờ cá nhân, bản dịch/công chứng và yêu cầu của cơ quan xét duyệt theo ngành. Danh sách cụ thể phụ thuộc vào nghề và bang tại Đức.",
    order: 6,
  },
  {
    question: "Chi phí làm hồ sơ gồm những khoản nào?",
    answer: "Tùy trường hợp, chi phí có thể gồm học tiếng, thi chứng chỉ, dịch thuật, công chứng, hợp pháp hóa, phí hồ sơ, visa và khoản dự phòng. Các khoản cần được bóc tách trước khi học viên quyết định đăng ký.",
    order: 7,
  },
  {
    question: "Ở bước tư vấn đầu tiên có cần gửi giấy tờ không?",
    answer: "Chưa cần. Bạn chỉ cần cung cấp thông tin cơ bản như tuổi, bằng cấp, trình độ tiếng Đức hiện tại, mục tiêu ngành và tỉnh/thành phố. Nếu cần rà soát sâu hơn, tư vấn viên sẽ hướng dẫn giấy tờ nên chuẩn bị sau.",
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
