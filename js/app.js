/**
 * MEGA PROJELER Kiosk Logic
 */

// Project Data
const PROJECT_DATA = {
    canakkale: {
        id: 'canakkale',
        title: '1915 Çanakkale Köprüsü',
        type: 'KÖPRÜ',
        metrics: {
            'Ana Açıklık': '2,023 m',
            'Kule Yüksekliği': '318 m',
            'Toplam Uzunluk': '4,608 m'
        },
        description: "1915 Çanakkale Köprüsü, Çanakkale Boğazı üzerinde Lapseki ile Gelibolu ilçelerini birbirine bağlayan ve 18 Mart 2022’de hizmete açılan dünyanın en uzun orta açıklıklı asma köprüsüdür. Cumhuriyetin 100. yılına atfen belirlenen 2.023 metre orta açıklığı ile Japonya’daki Akashi Kaikyō Köprüsü’nü 32 metre geçerek dünya rekorunu kırmıştır. Yaklaşım viyadükleri dahil toplam uzunluğu 4.608 metreye ulaşmıştır. Köprünün 318 metre yüksekliğindeki çelik kuleleri, Çanakkale Savaşı’ndaki 18 Mart 1915 zaferine atfen 3 ve 18 rakamlarından türetilmiştir. Kulelerin tepelerine yerleştirilen 16 metre boyundaki top mermisi figürleri, Seyit Onbaşı’nın tek başına kaldırdığı mermileri simgelemekte olup bu eklemeyle köprü 334 metre toplam yüksekliğe ulaşarak dünyanın en yüksek kulelerine sahip asma köprüsü unvanını da almıştır. Türk bayrağından esinlenen kırmızı-beyaz kule renkleri, köprüyü mühendislik harikası olmanın ötesinde ulusal bir sembol haline getirmiştir.",
        image: 'assets/project_canakkale_bridge_1769107033076.png'
    },
    yavuz: {
        id: 'yavuz',
        title: 'Yavuz Sultan Selim Köprüsü',
        type: 'KÖPRÜ',
        metrics: {
            'Ana Açıklık': '1,408 m',
            'Kule Yüksekliği': '322 m',
            'Genişlik': '59 m'
        },
        description: "Yavuz Sultan Selim Köprüsü, İstanbul Boğazı’nın Karadeniz’e yakın kuzey kesiminde Garipçe (Sarıyer) ile Poyrazköy (Beykoz) arasında inşa edilen ve 26 Ağustos 2016’da hizmete açılan dünyanın en benzersiz köprülerinden biridir. 1.408 metre ana açıklığı, 59 metre genişliği ve 322 metre kule yüksekliği ile birden fazla dünya rekoruna sahiptir. Dünyanın en geniş köprüsü, üzerinde raylı sistem (hızlı tren) bulunan en uzun asma köprü ve eğik askılı köprü kategorisinde en yüksek kulelere sahip köprü. Hem asma köprü hem de gergin eğik askılı (cable-stayed) sistemin bir arada kullanıldığı hibrit tasarımı, dünya mühendislik tarihinde eşsiz bir yere sahiptir.",
        image: 'assets/project_yavuz_bridge_1769107047787.png'
    },
    osmangazi: {
        id: 'osmangazi',
        title: 'Osmangazi Köprüsü',
        type: 'KÖPRÜ',
        metrics: {
            'Ana Açıklık': '1,550 m',
            'Yükseklik': '252 m',
            'Toplam Uzunluk': '2,682 m'
        },
        description: "Osmangazi Köprüsü, İzmit Körfezi’nde Dilovası (Kocaeli) ile Altınova (Yalova) arasında konumlanan ve 1 Temmuz 2016’da hizmete açılan Türkiye’nin dördüncü büyük asma köprüsüdür. 1.550 metre orta açıklığı ve 2.682 metre toplam uzunluğu ile hizmete girdiğinde dünyanın dördüncü en uzun açıklıklı asma köprüsü unvanını almıştır. Gebze-Orhangazi-İzmir Otoyolu’nun (O-5) kritik bir parçası olan köprü, İstanbul-İzmir arasındaki 8 saatlik yolculuğu 3,5 saate, körfez geçişini ise 2 saatten sadece 6 dakikaya indirmiştir.",
        image: 'assets/project_osmangazi_bridge_1769107063229.png'
    },
    zigana: {
        id: 'zigana',
        title: 'Zigana Tüneli',
        type: 'TÜNEL',
        metrics: {
            'Uzunluk': '14.5 km',
            'Tüp Sayısı': '2',
            'Rakım': '1,212 m'
        },
        description: "Zigana Tüneli, Trabzon ile Gümüşhane illeri arasında Kuzey Anadolu Dağları’nı geçen ve 3 Mayıs 2023’te hizmete açılan Türkiye’nin en uzun karayolu tünelidir. 14.476 metre (yaklaşık 14,5 km) uzunluğuyla Avrupa’nın da en uzun karayolu tüneli unvanına sahiptir. Çift tüplü (2x2 şerit) olarak inşa edilen tünel, 2.032 metre yüksekliğindeki zorlu Zigana Geçidi’ni devre dışı bırakarak yolu 8 km, yolculuk süresini ise ağır vasıtalar için 60 dakika, otomobiller için ortalama 20 dakika kısaltmıştır. Yapımına Nisan 2016’da başlanan proje, 7 yıl 9 günde tamamlanmıştır.",
        image: 'assets/zigana_tunnel_minimal_text_1769109119084.png'
    },
    ovit: {
        id: 'ovit',
        title: 'Ovit Tüneli',
        type: 'TÜNEL',
        metrics: {
            'Uzunluk': '14.3 km',
            'Tüp Sayısı': '2',
            'Yapım Yılı': '2018'
        },
        description: "Ovit Tüneli, Rize ile Erzurum arasında 2.640 metre rakımlı Ovit Dağı Geçidi’ni aşan ve 13 Haziran 2018’de hizmete açılan devasa bir mühendislik projesidir. 14,3 km toplam uzunluğuyla (12,6 km tünel kazısı + 1,7 km aç-kapa bölümü) Türkiye’nin en uzun ikinci, Avrupa’nın en uzun üçüncü ve dünyanın en uzun dördüncü çift tüplü karayolu tünelidir. Bu proje, 138 yıllık bir hayalin gerçekleşmesidir: Sultan II. Abdülhamit döneminde (1880’ler) başlayan proje taslakları, 132 yıl sonra modern teknoloji ile hayata geçirilmiştir. Delme-patlatma tekniği ile yaklaşık 6 yıl 1 ay 2 günde  inşa edilmiştir. Tünelin giriş kotu 2.054 metre, çıkış kotu 2.260 metredir. Kasım-Nisan ayları arasında yoğun kar yağışı nedeniyle trafiğe kapanan İkizdere-İspir güzergahı, tünel sayesinde artık yılın 12 ayı kesintisiz ulaşıma açıktır. Rize-Erzurum arasındaki mesafe 4,4 km kısalmış, yolculuk güvenliği ve konforu önemli ölçüde artmıştır.",
        image: 'assets/project_ovit_tunnel_1769107093438.png'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initInteractions();
    initNavigation();

    // Page Specific Initializations
    if (window.location.pathname.includes('screen-detail.html')) {
        loadProjectDetail();
    }

    if (window.location.pathname.includes('screen-simulation.html')) {
        initSimulation();
    }
});

function initInteractions() {
    // Add touch scales to all interactive elements
    const interactiveElements = document.querySelectorAll('button, .project-card, .option-card');

    interactiveElements.forEach(el => {
        el.addEventListener('touchstart', () => {
            el.style.transform = 'scale(0.98)';
        }, { passive: true });

        el.addEventListener('touchend', () => {
            el.style.transform = '';
        });
    });

    // Option cards selection logic in Simulation screen
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            optionCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });
}

function initNavigation() {
    // We are using standard links, but we can enhance transitions here if needed
    // For now, let's just make sure "Geri" buttons work nicely with history if feasible,
    // or hardcode them as per spec. 
    // Spec says: BottomBar: "Geri" -> Screen 1, etc.

    // We will rely on inline onclicks or hrefs in HTML for simplicity and robustness
}

function loadProjectDetail() {
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project') || 'canakkale'; // Default

    const data = PROJECT_DATA[projectId];
    if (!data) return;

    // Populate DOM
    const titleEl = document.querySelector('.info-panel .section-title');
    const descEl = document.querySelector('.info-panel .description');
    const metricsContainer = document.querySelector('.metric-rows');
    const imageContainer = document.querySelector('.media-container'); // Container

    // Update Image
    if (imageContainer && data.image) {
        imageContainer.innerHTML = `<img src="${data.image}" class="detail-image" alt="${data.title}">`;
    }

    if (titleEl) titleEl.innerText = data.title; // Using section-title as Header for detail? Or distinct?
    // Actually the layout has "TEKNİK ÖZET" as section title. The Project Title might need to be added or replaces the topbar title?
    // Let's assume the TopBar shows the generic title, and the detail view shows the content.
    // Wait, the spec Detail Screen layout doesn't explicitly have the Project Name H1 in the info panel, 
    // but usually it's there. I'll stick to the layout provided:
    // "TEKNİK ÖZET" is the header.
    // I will dynamically render the metrics rows.

    if (metricsContainer) {
        metricsContainer.innerHTML = '';
        for (const [key, value] of Object.entries(data.metrics)) {
            const row = document.createElement('div');
            row.classList.add('metric-row');
            // Select icon based on key
            let icon = '📏'; // Default for general metrics (length)

            // Width/Span metrics
            if (key.includes('Açıklık') || key.includes('Genişlik')) icon = '↔';
            // Height/Altitude metrics
            else if (key.includes('Yükseklik') || key.includes('Rakım')) icon = '↕';
            // Date/Year metrics
            else if (key.includes('Tarih') || key.includes('Yılı')) icon = '📅';
            // Number metrics (like Tüp Sayısı)
            else if (key.includes('Sayısı')) icon = '#️⃣';

            row.innerHTML = `
                <span class="icon">${icon}</span>
                <div class="metric-content">
                  <span class="label">${key}</span>
                  <span class="value">${value}</span>
                </div>
             `;
            metricsContainer.appendChild(row);
        }
    }

    if (descEl) descEl.innerText = data.description;

    // Also update "Simülasyon" button to pass the project ID
    const simBtn = document.querySelector('.cta-buttons .btn-secondary'); // "Simülasyonu Başlat"
    if (simBtn) {
        simBtn.onclick = () => window.location.href = `screen-simulation.html?project=${projectId}`;
    }
}

function initSimulation() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project') || 'canakkale';
    const data = PROJECT_DATA[projectId];

    // Map project IDs to their WebGL content folders
    const WEBGL_MAP = {
        canakkale: 'webgl/1915/',
        yavuz: 'webgl/yavuz/',
        osmangazi: 'webgl/osmangazi/',
        zigana: 'webgl/zigana/',
        ovit: 'webgl/ovit/'
    };

    const video = document.getElementById('simulation-video');
    const progressBar = document.getElementById('construction-progress');
    const progressText = document.getElementById('progress-text');
    const progressContainer = document.getElementById('progress-container');
    const constructionTitle = document.getElementById('construction-title');
    const startButton = document.getElementById('start-simulation-btn');
    const simulationPreview = document.querySelector('.simulation-preview'); // The main container

    if (video && simulationPreview) {
        // Set video source based on project ID
        // Note: Assumes video files in 'assets' are named like 'canakkale.mp4'
        const videoSource = document.createElement('source');
        videoSource.src = `assets/${projectId}.mp4`;
        videoSource.type = 'video/mp4';
        video.appendChild(videoSource);

        // Auto-play the video when ready
        video.addEventListener('loadedmetadata', () => {
            video.play();
        });

        // Update progress bar as video plays
        video.addEventListener('timeupdate', () => {
            if (video.duration) {
                let progress = (video.currentTime / video.duration) * 100;
                progress = Math.min(progress, 100);

                if (progressBar) {
                    progressBar.style.width = progress + '%';
                }
                if (progressText) {
                    progressText.textContent = Math.floor(progress) + '%';
                }
            }
        });

        // When video ends, hide video/progress elements and show the start button
        video.addEventListener('ended', () => {
            // Hide all non-essential UI elements for a fullscreen experience
            const topbar = document.querySelector('.topbar');
            const bottombar = document.querySelector('.bottombar');
            const simControls = document.querySelector('.simulation-controls');
            const mainContent = document.querySelector('.simulation-screen');

            if (topbar) topbar.style.display = 'none';
            if (bottombar) bottombar.style.display = 'none';
            if (simControls) simControls.style.display = 'none';

            // Make the main content and preview area fullscreen
            if (mainContent) {
                mainContent.style.height = '100vh';
                mainContent.style.padding = '0';
            }
            if (simulationPreview) {
                simulationPreview.style.height = '100%';
                simulationPreview.classList.remove('blueprint-frame'); // Remove padding/border
            }

            const webglSrc = WEBGL_MAP[projectId];
            if (!webglSrc) {
                console.error('WebGL path not found for project:', projectId);
                simulationPreview.innerHTML = '<p style="color:red;">Simülasyon yüklenemedi.</p>';
                return;
            }

            // Create and configure the iframe for the WebGL content
            const iframe = document.createElement('iframe');
            iframe.src = webglSrc;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';

            // Replace the entire content of the preview area with the iframe
            simulationPreview.innerHTML = '';
            simulationPreview.appendChild(iframe);
        });

        // *** CORRECTED LOGIC FOR THE START BUTTON ***
        if (startButton) {
            startButton.addEventListener('click', () => {
                const webglSrc = WEBGL_MAP[projectId];
                if (!webglSrc) {
                    console.error('WebGL path not found for project:', projectId);
                    simulationPreview.innerHTML = '<p style="color:red;">Simülasyon yüklenemedi.</p>';
                    return;
                }

                // Create and configure the iframe for the WebGL content
                const iframe = document.createElement('iframe');
                iframe.src = webglSrc;
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = 'none';

                // Replace the entire content of the preview area with the iframe
                simulationPreview.innerHTML = '';
                simulationPreview.appendChild(iframe);
            });
        }
    }
}
