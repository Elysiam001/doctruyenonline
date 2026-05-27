/* ==========================================
   INITIAL MOCK DATA
   ========================================== */
const initialStories = [
  {
    id: "dau-pha-thuong-khung",
    title: "Đấu Phá Thương Khung",
    author: "Thiên Tằm Thổ Đậu",
    cover: "covers/dau_pha_thuong_khung.png",
    description: "Tại đây, không có ma pháp diễm lệ, chỉ có đấu khí sinh sôi đến đỉnh phong! Hãy xem thiếu niên Tiêu Viêm, từ một phế vật tiếng xấu đồn xa, làm thế nào vượt qua gian nan nguy hiểm, từng bước nắm giữ thiên hạ đại quyền, trở thành Đấu Đế chí tôn vạn người ngưỡng vọng!",
    genres: ["Huyền Huyễn", "Tiên Hiệp", "Dị Giới"],
    status: "Hoàn thành",
    views: 124500,
    likes: 8520,
    chapters: [
      {
        id: "dau-pha-chuong-1",
        number: 1,
        title: "Chương 1: Phế vật thiếu niên",
        content: `“Đấu lực, tam đoạn!”

Nhìn năm chữ to màu đỏ có chút chói mắt trên trắc nghiệm ma thạch bi, thiếu niên mặt không biểu tình, khóe môi nhếch lên một nỗ lực tự giễu tự ti, nắm tay nắm chặt, bởi vì dùng sức quá độ dẫn tới móng tay đâm sâu vào lòng bàn tay, mang lại một trận đau đớn kịch liệt...

“Tiêu Viêm, đấu lực tam đoạn! Cấp biệt: Hạ đẳng!” Bên cạnh trắc nghiệm ma thạch bi, một trung niên nhân liếc nhìn kết quả hiển thị trên bia đá, mặt không biểu tình lớn tiếng tuyên bố.

Trung niên nhân vừa dứt lời, không ngoài dự liệu, trên quảng trường rộng lớn lập tức bộc phát ra một trận xôn xao xen lẫn trào phúng.

“Tam đoạn? Quả nhiên, 'thiên tài' này lại một lần nữa dậm chân tại chỗ.”
“Haiz, phế vật này thật là làm mất mặt gia tộc.”
“Nếu không phải phụ thân hắn là tộc trưởng, loại phế vật này sớm đã bị đuổi khỏi gia tộc rồi chứ nói gì được tu luyện tài nguyên.”

Nghe chung quanh truyền đến tiếng trào phúng chế giễu, thiếu niên hít sâu một hơi, lặng lẽ xoay người đi xuống quảng trường. Bóng lưng hắn lộ ra vẻ cô độc và kiên nghị không thuộc về tuổi tác này.`,
        publishDate: "2026-05-01"
      },
      {
        id: "dau-pha-chuong-2",
        number: 2,
        title: "Chương 2: Đấu Khí Đại Lục",
        content: `Nhớ lại ba năm trước, Tiêu Viêm từng là thiên tài chói sáng nhất của Tiêu gia. Mười một tuổi đột phá Đấu Giả, trở thành người trẻ tuổi nhất trong lịch sử trăm năm qua của gia tộc đạt được thành tựu này.

Thế nhưng, biến cố xảy ra đột ngột. Chỉ trong vòng một đêm, đấu khí tích lũy nhiều năm của hắn bỗng nhiên biến mất vô cớ. Không chỉ ngừng tiến bộ, thực lực của hắn còn không ngừng lùi lại, từ Đấu Giả rớt xuống Đấu Lực tam đoạn.

Suốt ba năm qua, bất kể hắn nỗ lực tu luyện thế nào, đấu khí vừa ngưng tụ ra đều sẽ kỳ lạ biến mất sạch sẽ. Hắn từ một thiên tài được vạn người chú mục, chớp mắt rơi xuống đáy vực trở thành phế vật bị người người khinh bỉ.

Ngồi trên ngọn đồi phía sau gia tộc, Tiêu Viêm ngửa mặt nhìn bầu trời đêm đầy sao, khẽ thở dài:
“Mẹ, rốt cuộc con đã làm sai điều gì? Tại sao ông trời lại đối xử với con như vậy?”

Đúng lúc này, chiếc nhẫn màu đen cổ phác trên ngón tay hắn bỗng nhiên lóe lên một tia sáng yếu ớt mà hắn không hề phát giác...`,
        publishDate: "2026-05-02"
      },
      {
        id: "dau-pha-chuong-3",
        number: 3,
        title: "Chương 3: Khách không mời mà đến",
        content: `Sáng hôm sau, Tiêu gia nghênh đón ba vị khách quý. Họ mặc trang phục sang trọng, ngực thêu biểu tượng của Vân Lam Tông - tông phái lớn nhất Gia Mã Đế Quốc.

Đi đầu là một lão giả râu tóc bạc phơ, thái độ kiêu ngạo, theo sau là một nam tử trẻ tuổi và một thiếu nữ xinh đẹp tuyệt trần. Thiếu nữ mặc váy dài màu xanh lá, dung nhan thanh tú như hoa sen mới nở, nhưng ánh mắt lại ẩn chứa sự lạnh lùng và cao ngạo. Nàng chính là Nạp Lan Yên Nhiên, vị hôn thê từ thuở nhỏ của Tiêu Viêm.

Tại đại sảnh tiếp khách, tộc trưởng Tiêu Chiến - phụ thân của Tiêu Viêm, nhiệt tình đón tiếp. Tuy nhiên, bầu không khí nhanh chóng trở nên ngột ngạt khi trưởng lão Vân Lam Tông thẳng thắn bày tỏ ý định:

“Tiêu tộc trưởng, chúng ta đến đây hôm nay là để cầu hôn... à không, chính xác là để giải trừ hôn ước giữa Yên Nhiên và Tiêu Viêm.”

Câu nói vừa thốt ra, cả đại sảnh lập tức yên tĩnh đến đáng sợ. Tiêu Chiến sắc mặt đại biến, bàn tay đặt trên thành ghế đột ngột bóp chặt làm bằng gỗ mun cứng rắn lập tức xuất hiện những vết rạn nứt sâu hoắm.`,
        publishDate: "2026-05-03"
      }
    ]
  },
  {
    id: "than-dao-dan-ton",
    title: "Thần Đạo Đan Tôn",
    author: "Cô Đơn Địa Phi",
    cover: "covers/than_dao_dan_ton.png",
    description: "Kiếp trước, hắn là tuyệt thế Đan Đế, vì truy cầu võ đạo tối cao mà tạ thế. Kiếp này, hắn sống lại trong thân xác một thiếu niên phế vật, thức tỉnh Thần cấp mạch linh, lấy đan đạo phụ trợ võ đạo, nghiền nát hết thảy thiên tài ngáng đường, ngạo thị thiên hạ!",
    genres: ["Huyền Huyễn", "Trọng Sinh", "Đan Dược"],
    status: "Đang ra",
    views: 89400,
    likes: 6210,
    chapters: [
      {
        id: "than-dao-chuong-1",
        number: 1,
        title: "Chương 1: Đan Đế trùng sinh",
        content: `Lăng Hàn mở mắt ra, đập vào mắt là một gian phòng gỗ giản dị nhưng sạch sẽ. Hắn xoa xoa cái đầu đau nhức, ký ức như thủy triều tràn vào trong não bộ.

“Ta... thế mà sống lại sao?”

Hắn vốn là Đan Đế danh chấn thiên hạ một vạn năm trước, vì luyện chế một viên đan dược nghịch thiên phá giới mà bị thiên kiếp đánh nát thân xác. Không ngờ linh hồn lại xuyên qua vạn năm thời gian, nhập vào thân xác một thiếu niên mười sáu tuổi cũng tên là Lăng Hàn tại Thương Vân Trấn này.

Thân xác này của Lăng Hàn cực kỳ yếu ớt, kinh mạch bế tắc, là một phế vật võ đạo nổi danh trong trấn. Nhưng đối với cựu Đan Đế mà nói, bế tắc kinh mạch thì có là gì? Hắn có vạn ngàn phương pháp để tẩy tủy phạt cốt, cải tử hoàn sinh.

“Đời này, ta không chỉ đứng đầu Đan đạo, mà còn phải leo lên đỉnh phong Võ đạo, nhìn xem phong cảnh nơi tuyệt lộ!” Lăng Hàn nắm chặt tay, ánh mắt lóe lên phong mang sắc bén.`,
        publishDate: "2026-05-05"
      },
      {
        id: "than-dao-chuong-2",
        number: 2,
        title: "Chương 2: Thần cấp mạch linh",
        content: `Để bắt đầu tu luyện võ đạo, việc đầu tiên cần làm là câu thông thiên địa để thức tỉnh Mạch Linh. Mạch Linh quyết định tiềm năng tu luyện và thuộc tính sức mạnh của võ giả.

Lăng Hàn ngồi xếp bằng trên giường, vận chuyển một môn công pháp cổ xưa tên là 《 Bất Diệt Thiên Kinh 》 mà kiếp trước hắn đạt được tại một di tích viễn cổ nhưng chưa kịp tu luyện.

Rầm!

Một tiếng nổ vang vọng trong biển thức hải của hắn. Một luồng ánh sáng vàng kim chói mắt bộc phát ra. Giữa vầng sáng ấy, một bóng hình thần bí chậm rãi hiện ra, tản phát ra uy áp khủng khiếp của thái cổ hồng hoang.

“Đây là... Thần cấp Mạch Linh trong truyền thuyết sao? Không, hình như còn vượt qua cả Thần cấp!” Lăng Hàn chấn động kinh ngạc. Mạch Linh này có hình dạng một cái đỉnh đồng ba chân, trên thân khắc đầy đồ đằng cổ xưa của vạn thú chân linh.`,
        publishDate: "2026-05-06"
      }
    ]
  },
  {
    id: "co-vo-tong-tai-kieu-sa",
    title: "Cô Vợ Tổng Tài Kiêu Sa Của Tôi",
    author: "Mai Can Thái Thiếu Bính",
    cover: "covers/co_vo_tong_tai.png",
    description: "Lâm Phi - một binh vương thế giới ngầm lánh đời, quay về đô thị làm một tên bảo vệ nhỏ nhoi. Trớ trêu thay, hắn lại bị cuốn vào cuộc hôn nhân sắp đặt với nữ tổng tài lạnh lùng kiêu sa của tập đoàn Mộ Thị. Câu chuyện tình yêu dở khóc dở cười và những trận chiến bảo vệ mỹ nhân bắt đầu...",
    genres: ["Đô Thị", "Ngôn Tình", "Hài Hước", "Bảo Vệ"],
    status: "Đang ra",
    views: 245300,
    likes: 19800,
    chapters: [
      {
        id: "tong-tai-chuong-1",
        number: 1,
        title: "Chương 1: Cuộc gặp gỡ định mệnh",
        content: `Khách sạn Lệ Cảnh năm sao rực rỡ ánh đèn.

Lâm Phi chỉnh lại bộ đồng phục bảo vệ hơi xộc xệch trên người, tựa lưng vào cột đá lớn ngoài sảnh, miệng ngậm một điếu thuốc lá rẻ tiền chưa châm lửa, mắt lười biếng quét qua những chiếc xe sang trọng đang đỗ ngoài sân.

Két!

Một chiếc Rolls-Royce Phantom màu đen sang trọng đỗ ngay trước thảm đỏ. Cửa xe mở ra, một đôi chân dài thon thả mang giày cao gót màu bạc bước xuống, tiếp đó là một bóng hình khiến cả không gian xung quanh như ngừng thở.

Nàng mặc một bộ váy dạ hội màu đen bó sát làm tôn lên đường cong chữ S hoàn hảo, mái tóc đen gợn sóng xõa ngang vai, gương mặt thanh tú không một góc chết nhưng lại phủ một lớp sương giá lạnh lùng. Nàng chính là Mộ Dung Tuyết - tổng tài tập đoàn Mộ Thị, đệ nhất mỹ nhân giới kinh doanh Trung Hải.

Khi nàng bước qua cửa xoay, một gã đàn ông say xỉn bỗng nhiên từ bên cạnh lao tới, tay cầm ly rượu định sàm sỡ nàng. Mộ Dung Tuyết biến sắc, lùi lại nhưng gót giày cao gót đột ngột trượt đi.

Đúng lúc nàng sắp ngã xuống đất, một cánh tay rắn rỏi bỗng từ bên cạnh vươn ra, nhẹ nhàng ôm lấy vòng eo mềm mại của nàng...`,
        publishDate: "2026-05-10"
      },
      {
        id: "tong-tai-chuong-2",
        number: 2,
        title: "Chương 2: Đăng ký kết hôn",
        content: `Tại văn phòng tổng tài rộng lớn của tòa tháp Mộ Thị.

Mộ Dung Tuyết lạnh lùng nhìn Lâm Phi đang ngồi vắt chân chữ ngũ trên ghế sofa da cao cấp, tay cầm một quả táo cắn rôm rốp không chút e dè lịch sự.

“Đây là thỏa thuận kết hôn trong vòng một năm. Anh ký vào đi.” Nàng đẩy một tập tài liệu mỏng sang phía hắn.

Lâm Phi liếc nhìn tờ giấy, cười cợt nhả:
“Bà xã à, chúng ta vừa mới gặp nhau có một ngày, cô liền vội vã muốn trói chặt tôi sao? Tôi tuy đẹp trai nhưng cũng là người có nguyên tắc...”

“Ngậm miệng!” Mộ Dung Tuyết đỏ mặt tức giận quát, sau đó lạnh giọng giải thích: “Đây chỉ là kết hôn giả để đối phó với sự ép buộc của gia tộc và các đối thủ kinh doanh. Mỗi tháng tôi sẽ trả cho anh năm mươi vạn phí sinh hoạt. Trong thời gian này, anh phải bảo vệ tôi an toàn và không được có bất kỳ hành vi vượt quá giới hạn nào với tôi.”

“Năm mươi vạn?” Lâm Phi mắt sáng lên, vỗ đùi cái đét: “Ký! Ai từ chối mới là kẻ ngốc!”`,
        publishDate: "2026-05-11"
      }
    ]
  }
];

const genresList = [
  "Huyền Huyễn", "Tiên Hiệp", "Dị Giới", "Trọng Sinh", "Đan Dược", 
  "Đô Thị", "Ngôn Tình", "Hài Hước", "Bảo Vệ", "Khoa Huyễn", 
  "Võng Du", "Lịch Sử", "Kiếm Hiệp"
];

/* ==========================================
   DATABASE CONTROLLER
   ========================================== */
const db = {
    stories: [],
    bookmarks: [],
    history: [],
    githubConfig: null,

    async init() {
        // 1. Load GitHub Config
        const localGH = localStorage.getItem('story_db_github');
        if (localGH) {
            try {
                const parsed = JSON.parse(localGH);
                if (parsed && parsed.token) {
                    this.githubConfig = parsed;
                }
            } catch (e) {}
        }

        // 2. Load Bookmarks & History
        this.bookmarks = JSON.parse(localStorage.getItem('story_db_bookmarks')) || [];
        this.history = JSON.parse(localStorage.getItem('story_db_history')) || [];

        // 3. Load Stories
        let loadedFromRemote = false;
        try {
            // If Admin, fetch directly from GitHub API to bypass Render/GitHub Pages deployment delay
            if (this.githubConfig && this.githubConfig.token) {
                const { username, repo, token, branch } = this.githubConfig;
                const ghUrl = `https://api.github.com/repos/${username}/${repo}/contents/stories.json?ref=${branch}`;
                const ghRes = await fetch(ghUrl, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Accept": "application/vnd.github.v3+json"
                    },
                    cache: "no-store"
                });
                if (ghRes.ok) {
                    const ghData = await ghRes.json();
                    // Handle unicode properly with Base64 decode
                    const contentStr = decodeURIComponent(escape(atob(ghData.content)));
                    const data = JSON.parse(contentStr);
                    if (Array.isArray(data)) {
                        this.stories = data;
                        localStorage.setItem('story_db_stories', JSON.stringify(data));
                        loadedFromRemote = true;
                    }
                }
            }
            
            // If not admin, or GH fetch failed, fallback to public URL
            if (!loadedFromRemote) {
                const res = await fetch('stories.json?t=' + new Date().getTime());
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data)) {
                        this.stories = data;
                        localStorage.setItem('story_db_stories', JSON.stringify(data));
                        loadedFromRemote = true;
                    }
                }
            }
        } catch (e) {
            console.log("Could not fetch remote stories.json. Fallback to local storage.", e);
        }

        if (!loadedFromRemote) {
            const localStories = localStorage.getItem('story_db_stories');
            if (localStories) {
                this.stories = JSON.parse(localStories);
            } else {
                this.stories = initialStories;
                this.saveLocalOnly();
            }
        }
    },

    saveLocalOnly() {
        localStorage.setItem('story_db_stories', JSON.stringify(this.stories));
    },

    async save() {
        // Save locally first
        this.saveLocalOnly();
        
        // If GitHub sync is configured, push to remote repository
        if (this.githubConfig && this.githubConfig.token && this.githubConfig.username && this.githubConfig.repo) {
            showToast("Đang đồng bộ lên GitHub...", "warning");
            const result = await gitHubSync.push(this.stories);
            if (result.success) {
                showToast("Đã đồng bộ thành công lên GitHub!", "success");
            } else {
                showToast("Đồng bộ GitHub lỗi: " + result.error, "error");
            }
        }
    },

    saveBookmarks() {
        localStorage.setItem('story_db_bookmarks', JSON.stringify(this.bookmarks));
    },

    saveHistory() {
        localStorage.setItem('story_db_history', JSON.stringify(this.history));
    },

    toggleBookmark(storyId) {
        if (this.bookmarks.includes(storyId)) {
            this.bookmarks = this.bookmarks.filter(id => id !== storyId);
            showToast("Đã xóa khỏi tủ sách!");
        } else {
            this.bookmarks.push(storyId);
            showToast("Đã thêm vào tủ sách!");
        }
        this.saveBookmarks();
    },

    addReadingHistory(storyId, chapterId) {
        // Remove existing record for this story
        this.history = this.history.filter(h => h.storyId !== storyId);
        // Add to top of list
        this.history.unshift({
            storyId,
            chapterId,
            timestamp: Date.now()
        });
        // Limit to 20 history items
        this.history = this.history.slice(0, 20);
        this.saveHistory();
    }
};

/* ==========================================
   GITHUB API SYNC CONTROLLER
   ========================================== */
const gitHubSync = {
    async push(storiesData) {
        const config = db.githubConfig;
        if (!config || !config.token) return { success: false, error: 'Chưa cấu hình Token.' };

        const { username, repo, token, branch } = config;
        const filepath = 'stories.json';
        const url = `https://api.github.com/repos/${username}/${repo}/contents/${filepath}`;

        try {
            // 1. Get the existing file's SHA (required by GitHub API to update a file)
            let sha = "";
            const getFileRes = await fetch(url + `?ref=${branch}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/vnd.github.v3+json"
                }
            });

            if (getFileRes.ok) {
                const fileData = await getFileRes.json();
                sha = fileData.sha;
            }

            // 2. Prepare Base64 content
            const contentString = JSON.stringify(storiesData, null, 2);
            // Handle UTF-8 encoding properly in Javascript Base64 conversion
            const utf8Bytes = new TextEncoder().encode(contentString);
            // Convert byte array to base64 string using btoa and binary string
            let binary = "";
            for (let i = 0; i < utf8Bytes.byteLength; i++) {
                binary += String.fromCharCode(utf8Bytes[i]);
            }
            const base64Content = btoa(binary);

            // 3. Put / Update file on Github
            const putRes = await fetch(url, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/vnd.github.v3+json"
                },
                body: JSON.stringify({
                    message: "Update stories database [skip ci]",
                    content: base64Content,
                    sha: sha || undefined, // undefined for new files
                    branch: branch
                })
            });

            if (putRes.ok) {
                return { success: true };
            } else {
                const errData = await putRes.json();
                return { success: false, error: errData.message || "HTTP Error " + putRes.status };
            }
        } catch (err) {
            return { success: false, error: err.message };
        }
    },

    async testConnection(username, repo, token) {
        const url = `https://api.github.com/repos/${username}/${repo}`;
        try {
            const res = await fetch(url, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/vnd.github.v3+json"
                }
            });
            if (res.ok) {
                return { success: true };
            } else {
                const errData = await res.json();
                return { success: false, error: errData.message || "Lỗi phản hồi từ GitHub" };
            }
        } catch (e) {
            return { success: false, error: e.message };
        }
    }
};

/* ==========================================
   STATIC ROUTER & HASH MANAGER
   ========================================== */
function handleRouting() {
    const hash = window.location.hash || '#home';
    const parts = hash.split('/');
    const view = parts[0];

    // Hide all views first
    document.querySelectorAll('.app-view').forEach(el => el.style.display = 'none');
    
    // Deactivate nav links
    document.querySelectorAll('.nav-link, .drawer-link').forEach(el => el.classList.remove('active'));

    // Handle views
    if (view === '#home') {
        document.getElementById('home-view').style.display = 'block';
        document.getElementById('nav-home').classList.add('active');
        document.getElementById('drawer-home').classList.add('active');
        renderHome();
    } 
    else if (view === '#story' && parts[1]) {
        document.getElementById('detail-view').style.display = 'block';
        renderStoryDetail(parts[1]);
    } 
    else if (view === '#reader' && parts[1] && parts[2]) {
        document.getElementById('reader-view').style.display = 'block';
        renderReader(parts[1], parts[2]);
    } 
    else if (view === '#bookmarks') {
        document.getElementById('bookmarks-view').style.display = 'block';
        document.getElementById('nav-bookmarks').classList.add('active');
        document.getElementById('drawer-bookmarks').classList.add('active');
        renderBookmarks();
    } 
    else if (view === '#admin') {
        document.getElementById('admin-view').style.display = 'block';
        document.getElementById('nav-admin').classList.add('active');
        document.getElementById('drawer-admin').classList.add('active');
        renderAdmin();
    } 
    else {
        // Fallback
        window.location.hash = '#home';
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Close mobile drawer on navigation
    closeMobileDrawer();
}

window.addEventListener('hashchange', handleRouting);

/* ==========================================
   STATE VARIABLES (FOR FILTERING/ROUTING)
   ========================================== */
let currentGenreFilter = "Tất cả";
let currentStatusFilter = "all"; // all, ongoing, completed
let chaptersOrderAsc = true;
let viewSessionViewsCounted = new Set(); // Prevent spamming views count in a single visit

/* ==========================================
   RENDER CLIENT: HOME VIEW
   ========================================== */
function renderHome() {
    // 1. Spotlight (featured hot story): Display the story with highest views
    if (db.stories.length > 0) {
        const sortedByViews = [...db.stories].sort((a, b) => (b.views || 0) - (a.views || 0));
        const hotStory = sortedByViews[0];
        
        document.getElementById('hero-story-title').textContent = hotStory.title;
        document.getElementById('hero-story-desc').textContent = hotStory.description;
        document.getElementById('hero-story-author').textContent = hotStory.author;
        document.getElementById('hero-story-views').textContent = formatViews(hotStory.views);
        document.getElementById('hero-story-cover').src = hotStory.cover || 'covers/dau_pha_thuong_khung.png';
        document.getElementById('hero-read-btn').href = `#story/${hotStory.id}`;
    }

    // 2. Genres Horizontal Scroll Bar
    const genreContainer = document.getElementById('genre-filter-list');
    genreContainer.innerHTML = '';
    
    const allBtn = document.createElement('button');
    allBtn.className = `genre-btn ${currentGenreFilter === 'Tất cả' ? 'active' : ''}`;
    allBtn.textContent = 'Tất cả';
    allBtn.addEventListener('click', () => {
        currentGenreFilter = 'Tất cả';
        renderHomeStoriesGrid();
        renderHome();
    });
    genreContainer.appendChild(allBtn);

    genresList.forEach(genre => {
        const btn = document.createElement('button');
        btn.className = `genre-btn ${currentGenreFilter === genre ? 'active' : ''}`;
        btn.textContent = genre;
        btn.addEventListener('click', () => {
            currentGenreFilter = genre;
            renderHomeStoriesGrid();
            renderHome();
        });
        genreContainer.appendChild(btn);
    });

    // 3. Render Stories Grid
    renderHomeStoriesGrid();
}

function renderHomeStoriesGrid() {
    const grid = document.getElementById('story-grid-list');
    grid.innerHTML = '';

    const query = document.getElementById('global-search').value.toLowerCase().trim();

    // Filter stories
    const filtered = db.stories.filter(story => {
        const matchesSearch = story.title.toLowerCase().includes(query) || 
                              story.author.toLowerCase().includes(query);
        
        const matchesGenre = currentGenreFilter === 'Tất cả' || 
                             story.genres.includes(currentGenreFilter);
        
        const matchesStatus = currentStatusFilter === 'all' || 
                              (currentStatusFilter === 'ongoing' && story.status === 'Đang ra') ||
                              (currentStatusFilter === 'completed' && story.status === 'Hoàn thành');

        return matchesSearch && matchesGenre && matchesStatus;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i data-lucide="search-code"></i>
                <p>Không tìm thấy bộ truyện nào khớp với bộ lọc.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filtered.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.addEventListener('click', () => {
            window.location.hash = `#story/${story.id}`;
        });

        const statusClass = story.status === 'Hoàn thành' ? 'completed' : 'ongoing';

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${story.cover || 'covers/dau_pha_thuong_khung.png'}" alt="${story.title}" onerror="this.src='covers/dau_pha_thuong_khung.png'">
                <span class="card-overlay-badge status-badge ${statusClass}">${story.status}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${story.title}</h3>
                <span class="card-author"><i data-lucide="user"></i> ${story.author}</span>
                <div class="card-meta-row">
                    <span class="card-chapters">${story.chapters.length} chương</span>
                    <div class="card-stats">
                        <span><i data-lucide="eye"></i> ${formatViews(story.views)}</span>
                        <span><i data-lucide="heart"></i> ${formatViews(story.likes)}</span>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

/* ==========================================
   RENDER CLIENT: STORY DETAIL VIEW
   ========================================== */
function renderStoryDetail(storyId) {
    const story = db.stories.find(s => s.id === storyId);
    if (!story) {
        showToast("Không tìm thấy bộ truyện này!", "error");
        window.location.hash = '#home';
        return;
    }

    // Increment views count once per session
    if (!viewSessionViewsCounted.has(story.id)) {
        story.views = (story.views || 0) + 1;
        db.saveLocalOnly(); // Silently save views to localStorage (don't push to GitHub for simple view ticks to avoid API limits)
        viewSessionViewsCounted.add(story.id);
    }

    // Cover and title
    document.getElementById('detail-cover').src = story.cover || 'covers/dau_pha_thuong_khung.png';
    document.getElementById('detail-cover').alt = story.title;
    document.getElementById('detail-banner-blur').style.backgroundImage = `url(${story.cover || 'covers/dau_pha_thuong_khung.png'})`;
    document.getElementById('detail-title').textContent = story.title;
    document.getElementById('detail-author').textContent = story.author;
    
    // Status Badge
    const statusEl = document.getElementById('detail-status');
    statusEl.textContent = story.status;
    statusEl.className = `status-badge ${story.status === 'Hoàn thành' ? 'completed' : 'ongoing'}`;

    // Stats
    document.getElementById('detail-views').textContent = formatViews(story.views);
    document.getElementById('detail-likes').textContent = formatViews(story.likes);
    document.getElementById('detail-chapters-count').textContent = story.chapters.length;
    document.getElementById('detail-chapters-tab-count').textContent = story.chapters.length;

    // Genres
    const genresContainer = document.getElementById('detail-genres');
    genresContainer.innerHTML = '';
    story.genres.forEach(genre => {
        const badge = document.createElement('span');
        badge.className = 'genre-badge';
        badge.textContent = genre;
        genresContainer.appendChild(badge);
    });

    // Description text
    document.getElementById('detail-description').textContent = story.description;

    // First Chapter Action (or Resume Reading)
    const firstChapterBtn = document.getElementById('detail-first-chapter-btn');
    if (story.chapters.length > 0) {
        firstChapterBtn.disabled = false;
        
        const historyItem = db.history.find(h => h.storyId === story.id);
        if (historyItem) {
            const chapter = story.chapters.find(c => c.id === historyItem.chapterId);
            if (chapter) {
                firstChapterBtn.innerHTML = `<i data-lucide="book-open"></i> Đọc tiếp Chương ${chapter.number}`;
                firstChapterBtn.onclick = () => {
                    window.location.hash = `#reader/${story.id}/${chapter.id}`;
                };
            } else {
                fallbackToFirstChapter();
            }
        } else {
            fallbackToFirstChapter();
        }

        function fallbackToFirstChapter() {
            const sortedChapters = [...story.chapters].sort((a, b) => a.number - b.number);
            firstChapterBtn.innerHTML = `<i data-lucide="book-open"></i> Đọc Ngay`;
            firstChapterBtn.onclick = () => {
                window.location.hash = `#reader/${story.id}/${sortedChapters[0].id}`;
            };
        }
    } else {
        firstChapterBtn.disabled = true;
        firstChapterBtn.innerHTML = `<i data-lucide="book-open"></i> Đọc Ngay`;
        firstChapterBtn.onclick = null;
    }

    // Bookmark Toggle State
    const bookmarkBtn = document.getElementById('detail-bookmark-btn');
    const updateBookmarkBtnUI = () => {
        if (db.bookmarks.includes(story.id)) {
            bookmarkBtn.innerHTML = `<i data-lucide="bookmark-check"></i> Đang Theo Dõi`;
            bookmarkBtn.className = "btn btn-success";
        } else {
            bookmarkBtn.innerHTML = `<i data-lucide="bookmark"></i> Thêm Vào Tủ Sách`;
            bookmarkBtn.className = "btn btn-secondary";
        }
        lucide.createIcons();
    };
    updateBookmarkBtnUI();
    bookmarkBtn.onclick = () => {
        db.toggleBookmark(story.id);
        updateBookmarkBtnUI();
    };

    // Render Chapters List Tab
    renderDetailChaptersList(story);

    // Toggle Tabs action
    const tabBtns = document.querySelectorAll('.detail-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const targetTab = btn.getAttribute('data-tab');
            document.querySelectorAll('.detail-tab-content').forEach(el => el.classList.remove('active'));
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });

    lucide.createIcons();
}

function renderDetailChaptersList(story) {
    const chaptersContainer = document.getElementById('detail-chapters-list');
    chaptersContainer.innerHTML = '';

    if (story.chapters.length === 0) {
        chaptersContainer.innerHTML = `<p class="text-muted p-4">Hiện truyện chưa được đăng chương nào. Admin sẽ cập nhật sớm!</p>`;
        return;
    }

    // Sort chapters
    const sorted = [...story.chapters].sort((a, b) => {
        return chaptersOrderAsc ? a.number - b.number : b.number - a.number;
    });

    sorted.forEach(ch => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#reader/${story.id}/${ch.id}`;
        a.innerHTML = `<i data-lucide="file-text" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-right:6px;"></i> ${ch.title}`;
        li.appendChild(a);
        chaptersContainer.appendChild(li);
    });

    // Re-bind sort event
    const sortBtn = document.getElementById('sort-chapters-btn');
    sortBtn.onclick = () => {
        chaptersOrderAsc = !chaptersOrderAsc;
        renderDetailChaptersList(story);
    };

    lucide.createIcons();
}

/* ==========================================
   RENDER CLIENT: READER VIEW
   ========================================== */
let readerFontSize = parseInt(localStorage.getItem('readerFontSize')) || 18; // Default font size in px
let readerTheme = localStorage.getItem('readerTheme') || "dark"; // Default theme
let readerFontFamily = localStorage.getItem('readerFontFamily') || "sans-serif"; // sans-serif, serif, monospace

// Infinite scroll state
let currentStoryForScroll = null;
let currentChapterIndexForScroll = -1;
let isFetchingNextChapter = false;

// Dictionary State has been moved to per-story db.stories

function renderReader(storyId, chapterId) {
    const story = db.stories.find(s => s.id === storyId);
    if (!story) {
        showToast("Không tìm thấy bộ truyện!", "error");
        window.location.hash = '#home';
        return;
    }

    const chapter = story.chapters.find(c => c.id === chapterId);
    if (!chapter) {
        showToast("Không tìm thấy chương này!", "error");
        window.location.hash = `#story/${storyId}`;
        return;
    }

    // Add to reading history
    db.addReadingHistory(story.id, chapter.id);

    // Meta links
    document.getElementById('reader-back-story-link').href = `#story/${story.id}`;
    document.getElementById('reader-story-title').textContent = story.title;
    document.getElementById('reader-chapter-title').textContent = chapter.title;
    document.getElementById('reader-chapter-date').textContent = chapter.publishDate;

    // Apply dictionary rules
    let contentText = chapter.content;
    if (story.dictionary) {
        story.dictionary.forEach(item => {
            if (item.original && item.replacement) {
                const escapedOriginal = item.original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                contentText = contentText.replace(new RegExp(escapedOriginal, 'g'), item.replacement);
            }
        });
    }

    // Body content paragraphs formatting
    const contentContainer = document.getElementById('reader-body-content');
    contentContainer.innerHTML = '';
    
    // Split content by newline and clean empty items
    const paragraphs = contentText.split(/\n+/).map(p => p.trim()).filter(p => p.length > 0);
    paragraphs.forEach(p => {
        const pEl = document.createElement('p');
        if (p.toLowerCase().startsWith('<p>') && p.toLowerCase().endsWith('</p>')) {
            pEl.innerHTML = p.substring(3, p.length - 4);
        } else {
            pEl.innerHTML = p;
        }
        contentContainer.appendChild(pEl);
    });

    // Configure theme and font settings
    applyReaderSettings();

    // Populate Chapter Select Dropdowns (Top and Bottom)
    const populateChapterSelect = (selectEl) => {
        selectEl.innerHTML = '';
        const sortedChapters = [...story.chapters].sort((a,b) => a.number - b.number);
        sortedChapters.forEach(ch => {
            const opt = document.createElement('option');
            opt.value = ch.id;
            opt.textContent = ch.title;
            if (ch.id === chapter.id) {
                opt.selected = true;
            }
            selectEl.appendChild(opt);
        });

        selectEl.onchange = (e) => {
            window.location.hash = `#reader/${story.id}/${e.target.value}`;
        };
    };

    const selectTop = document.getElementById('reader-chapter-select-top');
    const selectBottom = document.getElementById('reader-chapter-select-bottom');
    populateChapterSelect(selectTop);
    populateChapterSelect(selectBottom);

    // Prev / Next Chapter Buttons
    const sortedChapters = [...story.chapters].sort((a,b) => a.number - b.number);
    const currentIndex = sortedChapters.findIndex(c => c.id === chapter.id);

    const prevBtns = document.querySelectorAll('.btn-prev-chapter');
    const nextBtns = document.querySelectorAll('.btn-next-chapter');

    // Setup Previous buttons
    if (currentIndex > 0) {
        prevBtns.forEach(btn => {
            btn.disabled = false;
            btn.onclick = () => {
                window.location.hash = `#reader/${story.id}/${sortedChapters[currentIndex - 1].id}`;
            };
        });
    } else {
        prevBtns.forEach(btn => {
            btn.disabled = true;
            btn.onclick = null;
        });
    }

    // Setup Next buttons
    if (currentIndex < sortedChapters.length - 1) {
        nextBtns.forEach(btn => {
            btn.disabled = false;
            btn.onclick = () => {
                window.location.hash = `#reader/${story.id}/${sortedChapters[currentIndex + 1].id}`;
            };
        });
    } else {
        nextBtns.forEach(btn => {
            btn.disabled = true;
            btn.onclick = null;
        });
    }

    // Set scroll state
    currentStoryForScroll = story;
    currentChapterIndexForScroll = sortedChapters.findIndex(c => c.id === chapter.id);
    isFetchingNextChapter = false;

    lucide.createIcons();
}

function applyReaderSettings() {
    localStorage.setItem('readerFontSize', readerFontSize);
    localStorage.setItem('readerTheme', readerTheme);
    localStorage.setItem('readerFontFamily', readerFontFamily);
    // 1. Font size
    const bodyContent = document.getElementById('reader-body-content');
    bodyContent.style.fontSize = `${readerFontSize}px`;
    document.getElementById('font-size-display').textContent = `${readerFontSize}px`;

    // 2. Font Family
    bodyContent.style.fontFamily = readerFontFamily === 'sans-serif' ? 'var(--font-sans)' 
                                 : readerFontFamily === 'serif' ? 'var(--font-serif)'
                                 : 'var(--font-mono)';
    document.getElementById('font-family-select').value = readerFontFamily;

    // 3. Theme
    document.body.className = ''; // Reset reader custom theme classes from body
    document.querySelectorAll('.theme-opt').forEach(opt => opt.classList.remove('active'));

    if (readerTheme === 'sepia') {
        document.body.classList.add('theme-reader-sepia');
        document.querySelector('.theme-opt[data-theme="sepia"]').classList.add('active');
    } else if (readerTheme === 'light') {
        document.body.classList.add('theme-reader-light');
        document.querySelector('.theme-opt[data-theme="light"]').classList.add('active');
    } else {
        // Dark theme - default website theme
        document.querySelector('.theme-opt[data-theme="dark"]').classList.add('active');
    }
}

// Bind Reader settings UI controls
document.getElementById('reader-settings-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const panel = document.getElementById('reader-settings-panel');
    panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
});

// Hide reader panel when clicking outside
document.addEventListener('click', () => {
    const panel = document.getElementById('reader-settings-panel');
    if (panel) panel.style.display = 'none';
});
document.getElementById('reader-settings-panel').addEventListener('click', (e) => {
    e.stopPropagation(); // Avoid closing click event
});

// Font size buttons
document.getElementById('font-dec').addEventListener('click', () => {
    if (readerFontSize > 12) {
        readerFontSize -= 2;
        applyReaderSettings();
    }
});
document.getElementById('font-inc').addEventListener('click', () => {
    if (readerFontSize < 32) {
        readerFontSize += 2;
        applyReaderSettings();
    }
});

// Font family select
document.getElementById('font-family-select').addEventListener('change', (e) => {
    readerFontFamily = e.target.value;
    applyReaderSettings();
});

// Theme switches
document.querySelectorAll('.theme-opt').forEach(opt => {
    opt.addEventListener('click', () => {
        readerTheme = opt.getAttribute('data-theme');
        applyReaderSettings();
    });
});

/* ==========================================
   RENDER CLIENT: BOOKMARKS & LIBRARY VIEW
   ========================================== */
function renderBookmarks() {
    // Tab switching inside bookmarks view
    const tabBtns = document.querySelectorAll('.library-tab-btn');
    tabBtns.forEach(btn => {
        btn.onclick = () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const target = btn.getAttribute('data-lib-tab');
            document.querySelectorAll('.library-tab-content').forEach(el => el.classList.remove('active'));
            document.getElementById(`lib-tab-${target}`).classList.add('active');
        };
    });

    // 1. Render Bookmarks Tab
    const bookmarkGrid = document.getElementById('bookmark-grid-list');
    bookmarkGrid.innerHTML = '';
    
    const bookmarkedStories = db.stories.filter(s => db.bookmarks.includes(s.id));
    document.getElementById('bookmark-count').textContent = bookmarkedStories.length;

    if (bookmarkedStories.length === 0) {
        bookmarkGrid.style.display = 'none';
        document.getElementById('bookmark-empty').style.display = 'flex';
    } else {
        bookmarkGrid.style.display = 'grid';
        document.getElementById('bookmark-empty').style.display = 'none';

        bookmarkedStories.forEach(story => {
            const card = document.createElement('div');
            card.className = 'story-card';
            card.addEventListener('click', () => {
                window.location.hash = `#story/${story.id}`;
            });
            const statusClass = story.status === 'Hoàn thành' ? 'completed' : 'ongoing';

            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${story.cover || 'covers/dau_pha_thuong_khung.png'}" alt="${story.title}">
                    <span class="card-overlay-badge status-badge ${statusClass}">${story.status}</span>
                </div>
                <div class="card-info">
                    <h3 class="card-title">${story.title}</h3>
                    <span class="card-author"><i data-lucide="user"></i> ${story.author}</span>
                    <div class="card-meta-row">
                        <span class="card-chapters">${story.chapters.length} chương</span>
                        <div class="card-stats">
                            <span><i data-lucide="eye"></i> ${formatViews(story.views)}</span>
                        </div>
                    </div>
                </div>
            `;
            bookmarkGrid.appendChild(card);
        });
    }

    // 2. Render History Tab
    const historyContainer = document.getElementById('history-list-container');
    historyContainer.innerHTML = '';

    if (db.history.length === 0) {
        historyContainer.style.display = 'none';
        document.getElementById('history-empty').style.display = 'flex';
    } else {
        historyContainer.style.display = 'flex';
        document.getElementById('history-empty').style.display = 'none';

        db.history.forEach(hist => {
            const story = db.stories.find(s => s.id === hist.storyId);
            if (!story) return; // Skip deleted stories
            
            const chapter = story.chapters.find(c => c.id === hist.chapterId);
            const chapterTitle = chapter ? chapter.title : "Chương đã bị xóa";

            const item = document.createElement('div');
            item.className = 'history-item';
            
            item.innerHTML = `
                <div class="history-item-details">
                    <img src="${story.cover || 'covers/dau_pha_thuong_khung.png'}" alt="${story.title}" class="history-cover">
                    <div class="history-info">
                        <h3>${story.title}</h3>
                        <p>Đang đọc dở: <strong>${chapterTitle}</strong></p>
                        <p class="text-muted" style="margin-top:4px;font-size:0.75rem;"><i data-lucide="clock" style="width:12px;height:12px;display:inline-block;vertical-align:middle;margin-right:3px;"></i> ${formatTimeAgo(hist.timestamp)}</p>
                    </div>
                </div>
                <div class="history-item-actions">
                    <a href="#reader/${story.id}/${hist.chapterId}" class="btn btn-primary btn-sm"><i data-lucide="book-open"></i> Đọc tiếp</a>
                    <button class="btn btn-secondary btn-icon-only btn-sm remove-history-btn" data-story-id="${story.id}"><i data-lucide="trash-2"></i></button>
                </div>
            `;

            // Delete history item event
            item.querySelector('.remove-history-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                db.history = db.history.filter(h => h.storyId !== story.id);
                db.saveHistory();
                renderBookmarks(); // Re-render
                showToast("Đã xóa lịch sử đọc truyện!");
            });

            historyContainer.appendChild(item);
        });
    }

    lucide.createIcons();
}

/* ==========================================
   RENDER ADMIN: OVERVIEW, STORIES & CHAPTERS CRUD
   ========================================== */
function renderAdmin() {
    // Show/hide Sync Warning status
    const banner = document.getElementById('github-status-banner');
    if (db.githubConfig && db.githubConfig.token) {
        banner.className = "github-sync-indicator alert-box alert-warning";
        banner.style.borderColor = "rgba(16, 185, 129, 0.3)";
        banner.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
        banner.style.color = "hsl(142, 70%, 75%)";
        banner.innerHTML = `<i data-lucide="check-circle" class="text-success"></i> 
            <div><strong>Đã kết nối GitHub:</strong> Các cập nhật chỉnh sửa sẽ được đẩy trực tiếp lên kho chứa <code>${db.githubConfig.username}/${db.githubConfig.repo}</code> online.</div>`;
    } else {
        banner.className = "github-sync-indicator alert-box alert-warning";
        banner.style.borderColor = "";
        banner.style.backgroundColor = "";
        banner.style.color = "";
        banner.innerHTML = `<i data-lucide="alert-circle"></i> 
            <div><strong>Giao diện chạy cục bộ (Chưa cấu hình GitHub):</strong> Mọi thay đổi của bạn hiện chỉ lưu trên trình duyệt của máy này. Hãy cấu hình GitHub để cập nhật trực tiếp lên trang web online cho mọi người cùng xem!</div>`;
    }

    // Bind Admin Sub-tabs switching
    const subTabBtns = document.querySelectorAll('.admin-tab-btn');
    subTabBtns.forEach(btn => {
        btn.onclick = () => {
            subTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const target = btn.getAttribute('data-admin-tab');
            document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.remove('active'));
            document.getElementById(`admin-tab-${target}`).classList.add('active');
            
            if (target === 'dashboard') renderAdminDashboard();
            if (target === 'stories') renderAdminStoriesList();
            if (target === 'chapters') renderAdminChaptersSelector();
            if (target === 'leech') renderAdminLeechConfig();
            if (target === 'github') renderAdminGithubConfig();
        };
    });

    // Run active sub-tab renderer
    const activeSubTab = document.querySelector('.admin-tab-btn.active').getAttribute('data-admin-tab');
    if (activeSubTab === 'dashboard') renderAdminDashboard();
    if (activeSubTab === 'stories') renderAdminStoriesList();
    if (activeSubTab === 'chapters') renderAdminChaptersSelector();
    if (activeSubTab === 'leech') renderAdminLeechConfig();
    if (activeSubTab === 'github') renderAdminGithubConfig();

    lucide.createIcons();
}

/* Sub-Tab 1: Dashboard Stats Overview */
function renderAdminDashboard() {
    let totalChapters = 0;
    let totalViews = 0;
    let totalLikes = 0;

    db.stories.forEach(story => {
        totalChapters += story.chapters.length;
        totalViews += (story.views || 0);
        totalLikes += (story.likes || 0);
    });

    document.getElementById('admin-total-stories').textContent = db.stories.length;
    document.getElementById('admin-total-chapters').textContent = totalChapters;
    document.getElementById('admin-total-views').textContent = formatViews(totalViews);
    document.getElementById('admin-total-likes').textContent = formatViews(totalLikes);

    // Latest stories table
    const tableBody = document.getElementById('admin-dashboard-latest-table');
    tableBody.innerHTML = '';

    const latest = [...db.stories].slice(0, 5); // take first 5
    if (latest.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" class="text-center text-muted">Chưa có bộ truyện nào.</td></tr>`;
        return;
    }

    latest.forEach(story => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${story.cover || 'covers/dau_pha_thuong_khung.png'}" width="36" height="50" style="object-fit:cover;"></td>
            <td class="font-semibold">${story.title}</td>
            <td>${story.author}</td>
            <td><span class="status-badge ${story.status === 'Hoàn thành' ? 'completed' : 'ongoing'}">${story.status}</span></td>
            <td>${story.chapters.length}</td>
        `;
        tableBody.appendChild(tr);
    });
}

/* Sub-Tab 2: Stories Management Table */
function renderAdminStoriesList() {
    const tableBody = document.getElementById('admin-stories-table-body');
    tableBody.innerHTML = '';

    const query = document.getElementById('admin-story-search').value.toLowerCase().trim();

    const filtered = db.stories.filter(story => {
        return story.title.toLowerCase().includes(query) || story.author.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">Không tìm thấy truyện nào.</td></tr>`;
        return;
    }

    filtered.forEach(story => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${story.cover || 'covers/dau_pha_thuong_khung.png'}" width="40" height="58" onerror="this.src='covers/dau_pha_thuong_khung.png'"></td>
            <td class="font-semibold">${story.title}</td>
            <td>${story.author}</td>
            <td>
                <div style="display:flex;flex-wrap:wrap;gap:4px;max-width:200px;">
                    ${story.genres.map(g => `<span class="genre-badge" style="font-size:0.75rem;padding:2px 6px;">${g}</span>`).join('')}
                </div>
            </td>
            <td><span class="status-badge ${story.status === 'Hoàn thành' ? 'completed' : 'ongoing'}">${story.status}</span></td>
            <td>${formatViews(story.views)}</td>
            <td>
                <div class="actions">
                    <button class="btn btn-secondary btn-sm btn-icon-only edit-story-btn" data-id="${story.id}" title="Sửa truyện"><i data-lucide="edit-3"></i></button>
                    <button class="btn btn-danger btn-sm btn-icon-only delete-story-btn" data-id="${story.id}" title="Xóa truyện"><i data-lucide="trash-2"></i></button>
                </div>
            </td>
        `;

        // Bind Actions
        tr.querySelector('.edit-story-btn').onclick = () => openStoryModal(story);
        tr.querySelector('.delete-story-btn').onclick = () => confirmDeleteStory(story.id, story.title);

        tableBody.appendChild(tr);
    });

    lucide.createIcons();
}

// Bind story search keyup
document.getElementById('admin-story-search').addEventListener('keyup', renderAdminStoriesList);

/* Sub-Tab 3: Chapters Management Table and Selectors */
function renderAdminChaptersSelector() {
    const selector = document.getElementById('admin-select-story-for-chapters');
    selector.innerHTML = `<option value="">-- Chọn truyện --</option>`;
    
    // Sort stories alphabetically
    const sortedStories = [...db.stories].sort((a,b) => a.title.localeCompare(b.title, 'vi'));
    
    sortedStories.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = `${s.title} (${s.chapters.length} chương)`;
        selector.appendChild(opt);
    });

    // Handle story selection
    selector.onchange = (e) => {
        const storyId = e.target.value;
        const chaptersContentBox = document.getElementById('admin-chapters-content-box');
        
        if (!storyId) {
            chaptersContentBox.style.display = 'none';
            return;
        }

        const story = db.stories.find(s => s.id === storyId);
        document.getElementById('admin-chapter-selected-story-name').textContent = story.title;
        chaptersContentBox.style.display = 'block';

        renderAdminChaptersList(story);
    };
}

function renderAdminChaptersList(story) {
    const tableBody = document.getElementById('admin-chapters-table-body');
    tableBody.innerHTML = '';

    if (story.chapters.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" class="text-center text-muted">Truyện này chưa có chương nào. Hãy nhấn "Thêm chương mới" để bắt đầu!</td></tr>`;
        return;
    }

    // Sort chapters ascending
    const sortedChapters = [...story.chapters].sort((a,b) => a.number - b.number);

    sortedChapters.forEach(ch => {
        const wordCount = ch.content.split(/\s+/).filter(w => w.length > 0).length;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="font-semibold text-center">Chương ${ch.number}</td>
            <td>${ch.title}</td>
            <td>${ch.publishDate}</td>
            <td>~${wordCount.toLocaleString('vi-VN')} từ</td>
            <td>
                <div class="actions">
                    <button class="btn btn-secondary btn-sm btn-icon-only move-up-btn" title="Đẩy lên"><i data-lucide="arrow-up"></i></button>
                    <button class="btn btn-secondary btn-sm btn-icon-only move-down-btn" title="Đẩy xuống"><i data-lucide="arrow-down"></i></button>
                    <button class="btn btn-secondary btn-sm btn-icon-only edit-chapter-btn" title="Sửa chương"><i data-lucide="edit-3"></i></button>
                    <button class="btn btn-danger btn-sm btn-icon-only delete-chapter-btn" title="Xóa chương"><i data-lucide="trash-2"></i></button>
                </div>
            </td>
        `;

        tr.querySelector('.move-up-btn').onclick = () => swapChapterOrder(story.id, ch.id, -1);
        tr.querySelector('.move-down-btn').onclick = () => swapChapterOrder(story.id, ch.id, 1);
        tr.querySelector('.edit-chapter-btn').onclick = () => openChapterModal(story.id, ch);
        tr.querySelector('.delete-chapter-btn').onclick = () => confirmDeleteChapter(story.id, ch.id, ch.title);

        tableBody.appendChild(tr);
    });

    lucide.createIcons();
}

/* Sub-Tab 4: GitHub Config form values load */
function renderAdminGithubConfig() {
    const config = db.githubConfig || { username: '', repo: '', token: '', branch: 'main' };
    
    document.getElementById('gh-username').value = config.username;
    document.getElementById('gh-repo').value = config.repo;
    document.getElementById('gh-token').value = config.token;
    document.getElementById('gh-branch').value = config.branch;
}

/* ==========================================
   ADMIN ACTIONS: STORY MODAL & SUBMIT
   ========================================== */
const storyModal = document.getElementById('story-modal');

// Load genres choices in modal form
function loadGenresCheckboxes() {
    const grid = document.getElementById('form-story-genres-grid');
    grid.innerHTML = '';
    genresList.forEach(genre => {
        const label = document.createElement('label');
        label.className = 'checkbox-lbl';
        label.innerHTML = `<input type="checkbox" name="genres" value="${genre}"> ${genre}`;
        grid.appendChild(label);
    });
}

function openStoryModal(story = null) {
    loadGenresCheckboxes();
    const titleEl = document.getElementById('story-modal-title');
    const submitEl = document.getElementById('story-modal-submit-btn');
    const form = document.getElementById('story-form');
    
    form.reset();

    if (story) {
        // Edit Mode
        titleEl.textContent = `Chỉnh sửa: ${story.title}`;
        submitEl.innerHTML = `<i data-lucide="save"></i> Cập Nhật Truyện`;
        document.getElementById('form-story-id').value = story.id;
        document.getElementById('form-story-title').value = story.title;
        document.getElementById('form-story-author').value = story.author;
        document.getElementById('form-story-status').value = story.status;
        document.getElementById('form-story-cover').value = story.cover;
        document.getElementById('form-story-description').value = story.description;

        // Check the genres checkboxes
        const checkboxes = form.querySelectorAll('input[name="genres"]');
        checkboxes.forEach(box => {
            if (story.genres.includes(box.value)) {
                box.checked = true;
            }
        });
    } else {
        // Add Mode
        titleEl.textContent = `Thêm Truyện Mới`;
        submitEl.innerHTML = `<i data-lucide="plus"></i> Lưu Truyện`;
        document.getElementById('form-story-id').value = "";
    }

    storyModal.classList.add('open');
    lucide.createIcons();
}

function closeStoryModal() {
    storyModal.classList.remove('open');
}

// Bind preset cover buttons click
document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.onclick = () => {
        const path = btn.getAttribute('data-preset');
        document.getElementById('form-story-cover').value = path;
    };
});

// Bind modals cancel/close buttons
document.getElementById('story-modal-close-btn').onclick = closeStoryModal;
document.getElementById('story-modal-cancel-btn').onclick = closeStoryModal;
document.getElementById('admin-add-story-btn').onclick = () => openStoryModal();

// Handle Story Form Submission
document.getElementById('story-form').onsubmit = async (e) => {
    e.preventDefault();
    
    const storyId = document.getElementById('form-story-id').value;
    const title = document.getElementById('form-story-title').value.trim();
    const author = document.getElementById('form-story-author').value.trim();
    const status = document.getElementById('form-story-status').value;
    const cover = document.getElementById('form-story-cover').value.trim();
    const description = document.getElementById('form-story-description').value.trim();

    // Collect checked genres
    const genres = [];
    document.querySelectorAll('input[name="genres"]:checked').forEach(box => {
        genres.push(box.value);
    });

    if (genres.length === 0) {
        showToast("Vui lòng chọn ít nhất một thể loại!", "error");
        return;
    }

    const storyData = { title, author, status, cover, description, genres };

    if (storyId) {
        // Edit existing story
        const storyIdx = db.stories.findIndex(s => s.id === storyId);
        if (storyIdx !== -1) {
            db.stories[storyIdx] = { ...db.stories[storyIdx], ...storyData };
            closeStoryModal();
            showToast("Đã cập nhật thông tin truyện!");
            await db.save();
            renderAdminStoriesList();
        }
    } else {
        // Add new story
        // Helper slug creator
        const slug = title.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
        
        // Prevent duplicate slugs
        let finalSlug = slug;
        let counter = 1;
        while (db.stories.some(s => s.id === finalSlug)) {
            finalSlug = `${slug}-${counter}`;
            counter++;
        }

        const newStory = {
            id: finalSlug,
            ...storyData,
            views: 0,
            likes: 0,
            chapters: []
        };

        db.stories.unshift(newStory);
        closeStoryModal();
        showToast("Đăng truyện mới thành công!");
        await db.save();
        renderAdminStoriesList();
    }
};

/* ==========================================
   ADMIN ACTIONS: CHAPTER MODAL & SUBMIT
   ========================================== */
const chapterModal = document.getElementById('chapter-modal');

function openChapterModal(storyId, chapter = null) {
    const titleEl = document.getElementById('chapter-modal-title');
    const submitEl = document.getElementById('chapter-modal-submit-btn');
    const form = document.getElementById('chapter-form');
    const story = db.stories.find(s => s.id === storyId);

    form.reset();
    document.getElementById('form-chapter-id').value = chapter ? chapter.id : '';

    if (chapter) {
        // Edit mode
        titleEl.textContent = `Sửa Chương: ${chapter.title}`;
        submitEl.innerHTML = `<i data-lucide="save"></i> Cập Nhật Chương`;
        document.getElementById('form-chapter-number').value = chapter.number;
        document.getElementById('form-chapter-title').value = chapter.title.replace(/^Chương \d+:\s*/, '');
        document.getElementById('form-chapter-content').value = chapter.content;
    } else {
        // Add mode
        const nextNumber = story.chapters.length > 0 
            ? Math.max(...story.chapters.map(c => c.number || 0)) + 1 
            : 1;
        titleEl.textContent = `Thêm Chương Mới - ${story.title}`;
        submitEl.innerHTML = `<i data-lucide="plus"></i> Lưu Chương`;
        document.getElementById('form-chapter-number').value = nextNumber;
    }

    chapterModal.classList.add('open');
    lucide.createIcons();
}

function closeChapterModal() {
    chapterModal.classList.remove('open');
}

// Bind close buttons
document.getElementById('chapter-modal-close-btn').onclick = closeChapterModal;
document.getElementById('chapter-modal-cancel-btn').onclick = closeChapterModal;
document.getElementById('admin-add-chapter-btn').onclick = () => {
    const storyId = document.getElementById('admin-select-story-for-chapters').value;
    if (storyId) openChapterModal(storyId);
};

// Bulk Upload Logic
document.getElementById('admin-upload-txt-btn').onclick = () => {
    const storyId = document.getElementById('admin-select-story-for-chapters').value;
    if (!storyId) return showToast("Vui lòng chọn truyện trước!", "warning");
    document.getElementById('admin-upload-txt-input').click();
};

document.getElementById('admin-upload-txt-input').onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const storyId = document.getElementById('admin-select-story-for-chapters').value;
    const story = db.stories.find(s => s.id === storyId);
    if (!story) return;

    showToast("Đang xử lý file, vui lòng chờ...", "success");
    const reader = new FileReader();
    reader.onload = (event) => {
        const text = event.target.result;
        const chapterRegex = /(?:^|\n)(?:Chương|Chapter)\s+(\d+)[\s:\-]*([^\n]*)/gi;
        const matches = [...text.matchAll(chapterRegex)];
        
        if (matches.length === 0) {
            e.target.value = '';
            return showToast("Không tìm thấy từ khóa 'Chương X' trong file!", "error");
        }
        
        let newChaptersCount = 0;
        let lastMatchIndex = 0;
        let lastMatchMeta = null;
        
        const createChapterFromText = (meta, rawContent) => {
            let formattedContent = rawContent.split(/\n+/).map(p => p.trim()).filter(p => p.length > 0).map(p => `<p>${p}</p>`).join('\n');
            if (formattedContent.length === 0) formattedContent = "<p>(Không có nội dung)</p>";
            const chNum = parseInt(meta.num) || story.chapters.length + 1;
            let chTitle = `Chương ${chNum}`;
            if (meta.title) chTitle += `: ${meta.title}`;
            
            const existing = story.chapters.find(c => c.number === chNum);
            if (existing) {
                existing.title = chTitle;
                existing.content = formattedContent;
            } else {
                story.chapters.push({
                    id: 'ch_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                    number: chNum,
                    title: chTitle,
                    content: formattedContent,
                    publishDate: new Date().toLocaleDateString('vi-VN')
                });
            }
        };

        matches.forEach((match) => {
            if (lastMatchMeta) {
                const content = text.slice(lastMatchIndex, match.index).trim();
                createChapterFromText(lastMatchMeta, content);
                newChaptersCount++;
            }
            lastMatchMeta = { num: match[1], title: match[2].trim() };
            lastMatchIndex = match.index + match[0].length;
        });
        
        if (lastMatchMeta) {
            const content = text.slice(lastMatchIndex).trim();
            createChapterFromText(lastMatchMeta, content);
            newChaptersCount++;
        }
        
        db.save();
        renderAdminChaptersList(storyId);
        showToast(`Đã tách và tải lên thành công ${newChaptersCount} chương!`);
        e.target.value = ''; 
    };
    reader.readAsText(file);
};

// Handle Chapter Form Submission
document.getElementById('chapter-form').onsubmit = async (e) => {
    e.preventDefault();

    const storyId = document.getElementById('admin-select-story-for-chapters').value;
    const chapterId = document.getElementById('form-chapter-id').value;
    const num = parseInt(document.getElementById('form-chapter-number').value);
    const subTitle = document.getElementById('form-chapter-title').value.trim();
    const content = document.getElementById('form-chapter-content').value.trim();

    const fullTitle = `Chương ${num}: ${subTitle}`;

    const story = db.stories.find(s => s.id === storyId);
    if (!story) return;

    if (chapterId) {
        // Edit existing chapter
        const chIdx = story.chapters.findIndex(c => c.id === chapterId);
        if (chIdx !== -1) {
            story.chapters[chIdx] = {
                ...story.chapters[chIdx],
                title: fullTitle,
                content: content
            };
            closeChapterModal();
            showToast("Đã lưu chương chỉnh sửa!");
            await db.save();
            renderAdminChaptersList(story);
        }
    } else {
        // Create new chapter
        const newChapter = {
            id: `${storyId}-chuong-${num}`,
            number: num,
            title: fullTitle,
            content: content,
            publishDate: new Date().toISOString().split('T')[0]
        };

        story.chapters.push(newChapter);
        closeChapterModal();
        showToast("Đăng chương mới thành công!");
        await db.save();
        renderAdminChaptersList(story);
    }
};

/* ==========================================
   ADMIN ACTIONS: GITHUB SYNC SUBMIT
   ========================================== */
document.getElementById('github-config-form').onsubmit = (e) => {
    e.preventDefault();
    
    const username = document.getElementById('gh-username').value.trim();
    const repo = document.getElementById('gh-repo').value.trim();
    const token = document.getElementById('gh-token').value.trim();
    const branch = document.getElementById('gh-branch').value.trim();

    if (!username || !repo || !token) {
        showToast("Vui lòng điền đầy đủ Username, Repo và Token!", "error");
        return;
    }

    db.githubConfig = { username, repo, token, branch };
    localStorage.setItem('story_db_github', JSON.stringify(db.githubConfig));
    
    showToast("Cấu hình GitHub đã được lưu cục bộ!");
    renderAdmin(); // Re-render overview to update badges
};

document.getElementById('github-test-btn').onclick = async () => {
    const username = document.getElementById('gh-username').value.trim();
    const repo = document.getElementById('gh-repo').value.trim();
    const token = document.getElementById('gh-token').value.trim();

    if (!username || !repo || !token) {
        showToast("Vui lòng điền đủ thông tin trước khi kiểm tra!", "warning");
        return;
    }

    showToast("Đang kiểm tra kết nối...", "warning");
    const result = await gitHubSync.testConnection(username, repo, token);
    
    if (result.success) {
        showToast("Kết nối thành công đến Repository GitHub!", "success");
    } else {
        showToast("Kết nối thất bại: " + result.error, "error");
    }
};

/* ==========================================
   ADMIN ACTIONS: BACKUP / JSON DOWNLOAD / RESET
   ========================================== */
// Export download file JSON
document.getElementById('admin-export-btn').onclick = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db.stories, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "stories.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Đã tải về tệp tin stories.json!");
};

// Import file file trigger
const fileInput = document.getElementById('admin-import-file');
const filenameLabel = document.getElementById('import-filename');
const importBtn = document.getElementById('admin-import-btn');

fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
        filenameLabel.textContent = file.name;
        importBtn.disabled = false;
    } else {
        filenameLabel.textContent = "Chưa chọn file";
        importBtn.disabled = true;
    }
};

// Import button action
importBtn.onclick = () => {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
        try {
            const data = JSON.parse(event.target.result);
            if (Array.isArray(data)) {
                // Basic validation
                const isValid = data.every(story => 
                    story.title && story.author && story.id && Array.isArray(story.chapters)
                );
                
                if (isValid) {
                    db.stories = data;
                    await db.save();
                    showToast("Khôi phục dữ liệu từ JSON thành công!");
                    
                    // Reset input
                    fileInput.value = "";
                    filenameLabel.textContent = "Chưa chọn file";
                    importBtn.disabled = true;

                    // Re-render
                    renderAdmin();
                } else {
                    showToast("Định dạng file stories.json không đúng chuẩn!", "error");
                }
            } else {
                showToast("File JSON phải chứa mảng danh sách truyện!", "error");
            }
        } catch (e) {
            showToast("Lỗi đọc file JSON: " + e.message, "error");
        }
    };
    reader.readAsText(file);
};

// Reset database warning popup
document.getElementById('admin-reset-btn').onclick = () => {
    openConfirmModal(
        "Bạn có chắc muốn khôi phục dữ liệu về mặc định không? Tất cả truyện tự đăng và chỉnh sửa của bạn trên trình duyệt này sẽ bị xóa bỏ hoàn toàn.",
        async () => {
            db.stories = initialStories;
            db.bookmarks = [];
            db.history = [];
            localStorage.removeItem('story_db_github');
            db.githubConfig = null;

            localStorage.setItem('story_db_stories', JSON.stringify(initialStories));
            db.saveBookmarks();
            db.saveHistory();
            
            showToast("Đã khôi phục dữ liệu mặc định!");
            renderAdmin();
        }
    );
};

/* ==========================================
   CONFIRMATION MODAL & SYSTEM OVERLAYS
   ========================================== */
const confirmModal = document.getElementById('confirm-modal');
let confirmModalCallback = null;

function openConfirmModal(message, callback) {
    document.getElementById('confirm-modal-message').textContent = message;
    confirmModalCallback = callback;
    confirmModal.classList.add('open');
}

function closeConfirmModal() {
    confirmModal.classList.remove('open');
    confirmModalCallback = null;
}

document.getElementById('confirm-modal-confirm-btn').onclick = () => {
    if (confirmModalCallback) {
        confirmModalCallback();
    }
    closeConfirmModal();
};

document.getElementById('confirm-modal-close-btn').onclick = closeConfirmModal;
document.getElementById('confirm-modal-cancel-btn').onclick = closeConfirmModal;

// Quick delete helpers
function confirmDeleteStory(storyId, storyTitle) {
    openConfirmModal(
        `Bạn có chắc chắn muốn xóa bộ truyện "${storyTitle}" không? Tất cả các chương liên quan cũng sẽ bị xóa bỏ vĩnh viễn.`,
        async () => {
            db.stories = db.stories.filter(s => s.id !== storyId);
            db.bookmarks = db.bookmarks.filter(id => id !== storyId);
            db.history = db.history.filter(h => h.storyId !== storyId);
            
            db.saveBookmarks();
            db.saveHistory();
            showToast("Đã xóa bộ truyện!");
            await db.save();
            renderAdminStoriesList();
        }
    );
}

function confirmDeleteChapter(storyId, chapterId, chapterTitle) {
    openConfirmModal(
        `Bạn có chắc chắn muốn xóa chương "${chapterTitle}" không?`,
        async () => {
            const story = db.stories.find(s => s.id === storyId);
            if (story) {
                story.chapters = story.chapters.filter(c => c.id !== chapterId);
                // Re-sort and re-number chapters sequentially
                story.chapters.sort((a,b) => a.number - b.number);
                story.chapters.forEach((c, idx) => {
                    c.number = idx + 1;
                    // Replace the start of the title to match the new number
                    c.title = c.title.replace(/^Chương \d+:/, `Chương ${c.number}:`);
                });

                db.history = db.history.filter(h => h.chapterId !== chapterId);
                db.saveHistory();
                showToast("Đã xóa chương truyện!");
                await db.save();
                renderAdminChaptersList(story);
            }
        }
    );
}

async function swapChapterOrder(storyId, chapterId, direction) {
    const story = db.stories.find(s => s.id === storyId);
    if (!story) return;

    story.chapters.sort((a,b) => a.number - b.number);
    const currentIndex = story.chapters.findIndex(c => c.id === chapterId);
    if (currentIndex === -1) return;

    const targetIndex = currentIndex + direction;
    if (targetIndex < 0 || targetIndex >= story.chapters.length) return; 

    // Swap elements in the array
    const temp = story.chapters[currentIndex];
    story.chapters[currentIndex] = story.chapters[targetIndex];
    story.chapters[targetIndex] = temp;

    // Re-number and re-title
    story.chapters.forEach((c, idx) => {
        c.number = idx + 1;
        c.title = c.title.replace(/^Chương \d+:/, `Chương ${c.number}:`);
    });

    // Re-render UI immediately for responsiveness
    renderAdminChaptersList(story);
    
    // Save to backend
    await db.save();
    showToast("Đã thay đổi thứ tự chương", "success");
}

/* Sub-Tab: Leech */
function renderAdminLeechConfig() {
    const storySelect = document.getElementById('leech-story-id');
    storySelect.innerHTML = '<option value="">-- Chọn một truyện đã tạo --</option>';
    db.stories.forEach(s => {
        storySelect.innerHTML += `<option value="${s.id}">${s.title}</option>`;
    });

    const leechForm = document.getElementById('leech-form');
    // Remove existing event listener if any by cloning
    const newForm = leechForm.cloneNode(true);
    leechForm.parentNode.replaceChild(newForm, leechForm);
    
    newForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const storyId = document.getElementById('leech-story-id').value;
        const url = document.getElementById('leech-url').value;
        const count = parseInt(document.getElementById('leech-count').value, 10);
        
        startAutoLeech(storyId, url, count);
    });
}

async function startAutoLeech(storyId, startUrl, maxCount) {
    const story = db.stories.find(s => s.id === storyId);
    if (!story) return;

    const btn = document.getElementById('btn-start-leech');
    const container = document.getElementById('leech-progress-container');
    const progressBar = document.getElementById('leech-progress-bar');
    const logEl = document.getElementById('leech-log');

    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader" class="spin"></i> Đang Cào Truyện...`;
    lucide.createIcons();
    container.style.display = 'block';
    progressBar.style.width = '0%';
    logEl.innerHTML = '';

    const log = (msg) => {
        const line = document.createElement('div');
        line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
        logEl.appendChild(line);
        logEl.scrollTop = logEl.scrollHeight;
    };

    let currentUrl = startUrl;
    let successCount = 0;

    log(`Bắt đầu leech ${maxCount} chương từ: ${currentUrl}`);

    for (let i = 0; i < maxCount; i++) {
        if (!currentUrl) {
            log('❌ Không tìm thấy link chương tiếp theo. Dừng lại.');
            break;
        }

        log(`Đang tải: ${currentUrl}`);
        
        try {
            // Fetch HTML using fallback proxies to avoid rate limits
            let rawHtml = null;
            let lastError = null;
            
            const proxies = [
                {
                    url: `https://api.allorigins.win/get?url=${encodeURIComponent(currentUrl)}`,
                    parse: async (res) => {
                        const data = await res.json();
                        if (!data.contents) throw new Error("Empty proxy data");
                        return data.contents;
                    }
                },
                {
                    url: `https://corsproxy.io/?${encodeURIComponent(currentUrl)}`,
                    parse: async (res) => await res.text()
                }
            ];

            // Try up to 3 times
            for (let attempt = 0; attempt < 3; attempt++) {
                if (rawHtml) break;
                if (attempt > 0) {
                    log(`⚠️ Đang thử lại (Lần ${attempt + 1}/3)...`);
                    await new Promise(r => setTimeout(r, 2000));
                }
                
                for (let proxy of proxies) {
                    try {
                        const response = await fetch(proxy.url);
                        if (!response.ok) throw new Error(`HTTP ${response.status}`);
                        const content = await proxy.parse(response);
                        if (content && content.length > 500) {
                            rawHtml = content;
                            break; // Success
                        }
                    } catch (e) {
                        lastError = e;
                    }
                }
            }

            if (!rawHtml) throw lastError || new Error("Các proxy đều bị từ chối");

            const parser = new DOMParser();
            const doc = parser.parseFromString(rawHtml, "text/html");

            // Extract Chapter Title
            let chapterTitle = `Chương ${story.chapters.length + 1}: (Không có tiêu đề)`;
            const titleEl = doc.querySelector('.chapter-title') || doc.querySelector('h2') || doc.querySelector('h1.txt-primary');
            if (titleEl) {
                chapterTitle = titleEl.textContent.trim().replace(/^Chương \d+[\s:\-]+/i, `Chương ${story.chapters.length + 1}: `);
                if (!chapterTitle.startsWith('Chương')) {
                    chapterTitle = `Chương ${story.chapters.length + 1}: ${chapterTitle}`;
                }
            }

            // Extract Content
            let contentHtml = '';
            const contentEl = doc.querySelector('.chapter-c') || doc.querySelector('#chapter-c') || doc.querySelector('#content');
            if (contentEl) {
                // Remove scripts and ads inside content
                contentEl.querySelectorAll('script, style, .ads, div[style*="display:none"], iframe').forEach(e => e.remove());
                contentHtml = contentEl.innerHTML;
            } else {
                log('❌ Không tìm thấy nội dung chương (Có thể trang web này chặn hoặc mã hóa HTML).');
                break;
            }

            // Clean up content
            contentHtml = contentHtml.replace(/<br\s*[\/]?>/gi, '\n');
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = contentHtml;
            let textContent = tempDiv.textContent.trim();
            
            // Format properly
            let formattedContent = textContent.split('\n')
                .map(p => p.trim())
                .filter(p => p.length > 0)
                .map(p => `<p>${p}</p>`)
                .join('\n');

            // Save Chapter
            story.chapters.push({
                id: 'ch_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                number: story.chapters.length + 1,
                title: chapterTitle,
                content: formattedContent,
                publishDate: new Date().toLocaleDateString('vi-VN')
            });
            successCount++;

            // Update Progress
            const progress = Math.round(((i + 1) / maxCount) * 100);
            progressBar.style.width = `${progress}%`;
            log(`✅ Xong: ${chapterTitle}`);

            // Find Next Chapter URL
            let nextUrl = null;
            const nextBtn = doc.querySelector('#next_chap') || doc.querySelector('a.next-chap') || doc.querySelector('a.next');
            if (nextBtn && nextBtn.href && !nextBtn.href.includes('javascript') && !nextBtn.classList.contains('disabled')) {
                nextUrl = nextBtn.getAttribute('href');
                // Ensure absolute URL
                if (nextUrl && !nextUrl.startsWith('http')) {
                    const urlObj = new URL(currentUrl);
                    nextUrl = urlObj.origin + (nextUrl.startsWith('/') ? '' : '/') + nextUrl;
                }
            }
            
            currentUrl = nextUrl;

            // Wait 1-2 seconds between requests to avoid IP ban
            if (i < maxCount - 1 && currentUrl) {
                await new Promise(r => setTimeout(r, 1500));
            }
        } catch (error) {
            log(`❌ Lỗi khi tải: ${error.message}`);
            break;
        }
    }

    if (successCount > 0) {
        log(`🎉 Đã cào thành công ${successCount} chương! Đang lưu dữ liệu...`);
        await db.save();
        showToast(`Đã leech thành công ${successCount} chương!`, "success");
    } else {
        log(`❌ Quá trình cào thất bại, không có chương nào được lưu.`);
    }

    btn.disabled = false;
    btn.innerHTML = `<i data-lucide="download-cloud"></i> Bắt Đầu Leech`;
    lucide.createIcons();
}

/* ==========================================
   ADVANCED READER FEATURES
   ========================================== */
// Keyboard Navigation & Anti-Copy
document.addEventListener('keydown', (e) => {
    const readerView = document.getElementById('reader-view');
    if (readerView && readerView.style.display !== 'none') {
        if (e.key === 'ArrowLeft') {
            const prevBtn = document.querySelector('.btn-prev-chapter:not([disabled])');
            if (prevBtn) prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            const nextBtn = document.querySelector('.btn-next-chapter:not([disabled])');
            if (nextBtn) nextBtn.click();
        }
    }
});

// Troll Anti-Copy with Secret Backdoor
let isAltPressed = false;
document.addEventListener('keydown', (e) => { if (e.key === 'Alt') isAltPressed = true; });
document.addEventListener('keyup', (e) => { if (e.key === 'Alt') isAltPressed = false; });

document.addEventListener('copy', (e) => {
    const readerView = document.getElementById('reader-view');
    if (readerView && readerView.style.display !== 'none') {
        e.preventDefault();

        // Cửa sau cho Admin: Giữ nút Alt khi ấn Ctrl+C để copy text thuần (không bị dính khung nền đen)
        if (isAltPressed) {
            const selectedText = window.getSelection().toString();
            if (e.clipboardData && selectedText) {
                e.clipboardData.setData('text/plain', selectedText);
            }
            return;
        }

        const trollMessage = "Bản Quyền Của Bố Tống Văn Dũng Trộm Con Cặc";
        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', trollMessage);
        }
    }
});

// Infinite Scroll
/*
window.addEventListener('scroll', () => {
    const readerView = document.getElementById('reader-view');
    if (readerView && readerView.style.display === 'none') return;
    
    // Check if near bottom
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        if (isFetchingNextChapter) return;
        if (!currentStoryForScroll || currentChapterIndexForScroll < 0) return;
        
        const sortedChapters = [...currentStoryForScroll.chapters].sort((a,b) => a.number - b.number);
        if (currentChapterIndexForScroll >= sortedChapters.length - 1) return;
        
        isFetchingNextChapter = true;
        const nextChapter = sortedChapters[currentChapterIndexForScroll + 1];
        currentChapterIndexForScroll++;
        
        const bodyContent = document.getElementById('reader-body-content');
        
        const divider = document.createElement('div');
        divider.className = 'chapter-divider';
        divider.innerHTML = `<h3 style="margin-top: 60px; text-align: center; color: var(--primary); font-size: 1.5rem;">${nextChapter.title}</h3><hr style="margin: 20px 0 40px 0; border-color: var(--border); opacity: 0.5;">`;
        
        const contentDiv = document.createElement('div');
        let contentHtml = nextChapter.content;
        if (!contentHtml.includes('<p>')) {
            // Clean plain text
            const paragraphs = contentHtml.split(/\\n+/).map(p => p.trim()).filter(p => p.length > 0);
            contentHtml = paragraphs.map(p => `<p>${p}</p>`).join('');
        }
        contentDiv.innerHTML = contentHtml;
        
        bodyContent.appendChild(divider);
        bodyContent.appendChild(contentDiv);
        
        // Update URL silently
        history.replaceState(null, null, `#reader/${currentStoryForScroll.id}/${nextChapter.id}`);
        db.addReadingHistory(currentStoryForScroll.id, nextChapter.id);
        
        // Update dropdowns
        document.querySelectorAll('.chapter-select').forEach(sel => {
            sel.value = nextChapter.id;
        });

        // Update nav buttons
        const isLast = currentChapterIndexForScroll >= sortedChapters.length - 1;
        document.querySelectorAll('.btn-next-chapter').forEach(btn => {
            btn.disabled = isLast;
            btn.onclick = isLast ? null : () => {
                window.location.hash = `#reader/${currentStoryForScroll.id}/${sortedChapters[currentChapterIndexForScroll + 1].id}`;
            };
        });
        document.querySelectorAll('.btn-prev-chapter').forEach(btn => {
            btn.disabled = false;
            btn.onclick = () => {
                window.location.hash = `#reader/${currentStoryForScroll.id}/${sortedChapters[currentChapterIndexForScroll - 1].id}`;
            };
        });
        
        setTimeout(() => { isFetchingNextChapter = false; }, 800);
    }
});
*/


/* ==========================================
   UTILITY HELPER FUNCTIONS
   ========================================== */
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconName = 'check';
    if (type === 'error') iconName = 'x-circle';
    if (type === 'warning') iconName = 'alert-triangle';
    if (type === 'info') iconName = 'info';

    toast.innerHTML = `<i data-lucide="${iconName}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    lucide.createIcons();
    
    // Force reflow
    void toast.offsetWidth;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ==========================================
   DICTIONARY (NAME REPLACEMENT) LOGIC (PER STORY)
   ========================================== */
const dictModal = document.getElementById('dictionary-modal');

function getActiveStoryId() {
    const select = document.getElementById('reader-chapter-select-top');
    if (select && select.getAttribute('data-story-id')) return select.getAttribute('data-story-id');
    const hashParts = window.location.hash.split('/');
    if (hashParts[0] === '#reader' && hashParts.length >= 2) return hashParts[1];
    return null;
}

document.getElementById('open-dictionary-btn').addEventListener('click', () => {
    document.getElementById('reader-settings-panel').style.display = 'none';
    renderDictionaryList();
    dictModal.classList.add('open');
});

document.getElementById('dictionary-modal-close-btn').addEventListener('click', () => {
    dictModal.classList.remove('open');
    // Force re-render of current chapter to apply new dictionary
    const readerView = document.getElementById('reader-view');
    if (readerView && readerView.style.display !== 'none') {
        const storyId = getActiveStoryId();
        const chapterId = document.getElementById('reader-chapter-select-top').value || window.location.hash.split('/')[2];
        if (storyId && chapterId) {
            renderReader(storyId, chapterId);
        }
    }
});

document.getElementById('dictionary-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const original = document.getElementById('dict-original-word').value.trim();
    const replacement = document.getElementById('dict-replacement-word').value.trim();
    
    if (original && replacement) {
        const storyId = getActiveStoryId();
        if (!storyId) return;
        const story = db.stories.find(s => s.id === storyId);
        if (!story) return;
        
        story.dictionary = story.dictionary || [];
        const existing = story.dictionary.find(item => item.original === original);
        if (existing) {
            existing.replacement = replacement;
        } else {
            story.dictionary.push({ original, replacement });
        }
        
        db.save();
        
        document.getElementById('dict-original-word').value = '';
        document.getElementById('dict-replacement-word').value = '';
        renderDictionaryList();
        showToast("Đã lưu vào từ điển truyện!", "success");
    }
});

function renderDictionaryList() {
    const tbody = document.getElementById('dictionary-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const storyId = getActiveStoryId();
    if (!storyId) return;
    const story = db.stories.find(s => s.id === storyId);
    if (!story || !story.dictionary) return;
    
    story.dictionary.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.original}</td>
            <td><span class="text-accent">${item.replacement}</span></td>
            <td>
                <button type="button" class="btn btn-danger btn-icon-only btn-sm" onclick="deleteDictWord('${story.id}', ${index})"><i data-lucide="trash-2"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

window.deleteDictWord = (storyId, index) => {
    const story = db.stories.find(s => s.id === storyId);
    if (story && story.dictionary) {
        story.dictionary.splice(index, 1);
        db.save();
        renderDictionaryList();
        showToast("Đã xóa từ!", "warning");
    }
};

function formatViews(num) {
    if (!num) return 0;
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString('vi-VN');
}

function formatTimeAgo(timestamp) {
    const diff = Date.now() - timestamp;
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    const days = Math.floor(hrs / 24);

    if (days > 0) return `${days} ngày trước`;
    if (hrs > 0) return `${hrs} giờ trước`;
    if (mins > 0) return `${mins} phút trước`;
    return 'Vừa xong';
}

/* ==========================================
   GLOBAL ACTIONS & SEARCH HANDLERS
   ========================================== */
// Dynamic search binding
const searchInput = document.getElementById('global-search');
const clearSearchBtn = document.getElementById('clear-search');

searchInput.addEventListener('input', () => {
    const val = searchInput.value.trim();
    if (val) {
        clearSearchBtn.style.display = 'block';
    } else {
        clearSearchBtn.style.display = 'none';
    }
    // Update active view grid if on Home or Bookmarks
    const hash = window.location.hash || '#home';
    if (hash.startsWith('#home')) {
        renderHomeStoriesGrid();
    }
});

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    const hash = window.location.hash || '#home';
    if (hash.startsWith('#home')) {
        renderHomeStoriesGrid();
    }
});

/* Mobile Menu / Drawer controls */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeDrawerBtn = document.getElementById('close-drawer');
const drawer = document.getElementById('mobile-drawer');
const overlay = document.getElementById('drawer-overlay');

function openMobileDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
}

function closeMobileDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
}

mobileMenuBtn.addEventListener('click', openMobileDrawer);
closeDrawerBtn.addEventListener('click', closeMobileDrawer);
overlay.addEventListener('click', closeMobileDrawer);

/* ==========================================
   INITIALIZATION
   ========================================== */
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialise database
    await db.init();
    
    // 2. Initialise icons
    lucide.createIcons();

    // 3. Status Filter Tabs (All, Ongoing, Completed)
    const statusFilterBtns = document.querySelectorAll('.filter-tab');
    statusFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            statusFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStatusFilter = btn.dataset.filter;
            renderHomeStoriesGrid();
        });
    });

    // 4. Start routing
    handleRouting();
});
