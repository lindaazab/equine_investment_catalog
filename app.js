// ROI targets requested:
const roiTargets = { 3: 0.20, 6: 0.12 };

// Exchange rates (fallback defaults)
const exchangeRates = { EUR: 1.17, GBP: 1.27, USD: 1.0 };

// Default monthly costs
const defaultMonthlyCosts = { board: 1500, insurance: 350, shows: 2000, shoeing: 350 };

// Horse data (your current set)
const horses = [
  {
    name: "Ridge Douglas Lady",
    gender: "Mare",
    age: 10,
    currency: "EUR",
    price: 80000,
    insurance: 300,
    sellerCommission: 0.10,
    expectedResale: { usd: 180000 },
    experience: "1.35m FEI Young Riders; 1.40m National GP",
    location: "Ireland",
    cardImage: "WhatsApp Image 2026-02-03 at 3.34.06 AM (2).jpeg",
    galleryImages: [
      "RidgeDouglasLady_Pic_1.jpg",
      "RidgeDouglasLAdy_Breeding.jpg",
      "WhatsApp Image 2026-02-03 at 3.34.09 AM.jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.10 AM (1).jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.06 AM.jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.06 AM (1).jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.06 AM (2).jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.07 AM (2).jpeg"
    ],
    videos: [
      { title: "Video 1", url: "https://youtu.be/OJ2VYij375Y" },
      { title: "Video 2", url: "https://youtu.be/bFE4BdW6x6M" },
      { title: "Competition Video 1", url: "https://youtu.be/hw_Zm3JcVQM" },
      { title: "Competition Video 2", url: "https://youtu.be/u4TqKN0CTDc" }
    ],
    notes: "Owned by breeder since foal with no soundness issues or vet checks. Successfully competed at 1.35m FEI Young Riders level. Currently competing at 1.40m national GP level but definitely a fast/hot ride. Clean history and record with original owners.",
    importCosts: {
      vetting: { amount: 640, currency: "EUR" },
      transport: { amount: 9100, currency: "EUR" },
      quarantine: { amount: 10000, currency: "USD" },
      tariffs: { amount: 3000, currency: "USD" }
    }
  },
  {
    name: "Ridge Douglas Lady 2",
    gender: "Mare",
    age: 10,
    currency: "EUR",
    price: 85000,
    insurance: 350,
    sellerCommission: 0.10,
    expectedResale: { usd: 185000 },
    experience: "1.35m FEI Young Riders; 1.40m National GP",
    location: "Ireland",
    cardImage: "WhatsApp Image 2026-02-03 at 3.34.06 AM (2).jpeg",
    galleryImages: [
      "RidgeDouglasLady_Pic_1.jpg",
      "RidgeDouglasLAdy_Breeding.jpg",
      "WhatsApp Image 2026-02-03 at 3.34.09 AM.jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.10 AM (1).jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.06 AM.jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.06 AM (1).jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.06 AM (2).jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.07 AM (2).jpeg"
    ],
    videos: [
      { title: "Video 1", url: "https://youtu.be/OJ2VYij375Y" },
      { title: "Video 2", url: "https://youtu.be/bFE4BdW6x6M" },
      { title: "Competition Video 1", url: "https://youtu.be/hw_Zm3JcVQM" },
      { title: "Competition Video 2", url: "https://youtu.be/u4TqKN0CTDc" }
    ],
    notes: "Same profile as Ridge Douglas Lady, priced at €85k with higher insurance and expected resale of $185k.",
    importCosts: {
      vetting: { amount: 640, currency: "EUR" },
      transport: { amount: 9100, currency: "EUR" },
      quarantine: { amount: 10000, currency: "USD" },
      tariffs: { amount: 3000, currency: "USD" }
    }
  },
  {
    name: "Ridge Douglas Lady 3",
    gender: "Mare",
    age: 10,
    currency: "EUR",
    price: 90000,
    insurance: 400,
    sellerCommission: 0.10,
    expectedResale: { usd: 200000 },
    experience: "1.35m FEI Young Riders; 1.40m National GP",
    location: "Ireland",
    cardImage: "WhatsApp Image 2026-02-03 at 3.34.06 AM (2).jpeg",
    galleryImages: [
      "RidgeDouglasLady_Pic_1.jpg",
      "RidgeDouglasLAdy_Breeding.jpg",
      "WhatsApp Image 2026-02-03 at 3.34.09 AM.jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.10 AM (1).jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.06 AM.jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.06 AM (1).jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.06 AM (2).jpeg",
      "WhatsApp Image 2026-02-03 at 3.34.07 AM (2).jpeg"
    ],
    videos: [
      { title: "Video 1", url: "https://youtu.be/OJ2VYij375Y" },
      { title: "Video 2", url: "https://youtu.be/bFE4BdW6x6M" },
      { title: "Competition Video 1", url: "https://youtu.be/hw_Zm3JcVQM" },
      { title: "Competition Video 2", url: "https://youtu.be/u4TqKN0CTDc" }
    ],
    notes: "Same profile as Ridge Douglas Lady, priced at €90k with higher insurance and expected resale of $200k.",
    importCosts: {
      vetting: { amount: 640, currency: "EUR" },
      transport: { amount: 9100, currency: "EUR" },
      quarantine: { amount: 10000, currency: "USD" },
      tariffs: { amount: 3000, currency: "USD" }
    }
  },
  {
    name: "Million Rose",
    gender: "Mare",
    age: 8,
    currency: "EUR",
    price: 100000,
    insurance: 350,
    sellerCommission: 0.10,
    expectedResale: { usd: 225000 },
    experience: "1.35m FEI 1* Grand Prix",
    location: "Hungary",
    cardImage: "MillionRose_Pic_1.jpeg",
    galleryImages: [
      "MillionRose_Pic_1.jpeg",
      "MillionRose_Pic_2.jpeg",
      "MillionRose_Pic_3.jpeg",
      "MilionRose_Breeding.jpeg"
    ],
    videos: [
      { title: "Video 1", url: "https://youtu.be/CcDjJkBSiCM" },
      { title: "Video 2", url: "https://youtu.be/M35jt9HUDEE" }
    ],
    notes: "Negotiating at €100k. Extremely easy, scopey, sweet, and good-minded.",
    importCosts: {
      vetting: { amount: 640, currency: "EUR" },
      transport: { amount: 9100, currency: "EUR" },
      quarantine: { amount: 10000, currency: "USD" },
      tariffs: { amount: 3000, currency: "USD" }
    }
  }
];

// --- Helpers ---
function toUSD(amount, currency) { return amount * exchangeRates[currency]; }

function formatCurrency(amount, currency) {
  const symbols = { EUR: '€', GBP: '£', USD: '$' };
  return `${symbols[currency]}${Number(amount).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}

function formatPriceDisplay(amount, currency) {
  if (currency === 'USD') return formatCurrency(amount, currency);
  const usdAmount = toUSD(amount, currency);
  return `${formatCurrency(amount, currency)} (~${formatCurrency(usdAmount, 'USD')})`;
}

async function updateExchangeRates() {
  try {
    const response = await fetch('https://v6.exchangerate-api.com/v6/5291ccc35d8f81cceaf1fb15/latest/USD');
    const data = await response.json();
    if (data.result === 'success') {
      exchangeRates.EUR = 1 / data.conversion_rates.EUR;
      exchangeRates.GBP = 1 / data.conversion_rates.GBP;
    }
  } catch (e) {
    // fallback defaults already set
  }
}

function calculateTotalImportCosts(horse) {
  const basePrice = toUSD(horse.price, horse.currency);
  const vetting = toUSD(horse.importCosts.vetting.amount, horse.importCosts.vetting.currency);
  const transport = toUSD(horse.importCosts.transport.amount, horse.importCosts.transport.currency);
  const quarantine = toUSD(horse.importCosts.quarantine.amount, horse.importCosts.quarantine.currency);
  const tariffs = toUSD(horse.importCosts.tariffs.amount, horse.importCosts.tariffs.currency);
  return { basePrice, vetting, transport, quarantine, tariffs, totalInitial: basePrice + vetting + transport + quarantine + tariffs };
}

function calculateHoldingCosts(horse, months) {
  const monthlyExpenses = defaultMonthlyCosts.board + horse.insurance + defaultMonthlyCosts.shows;

  let shoeingCosts = 0;
  const shoeingMonths = [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23];
  for (let m = 1; m <= Math.ceil(months); m++) {
    if (shoeingMonths.includes(m)) shoeingCosts += defaultMonthlyCosts.shoeing;
  }

  return { monthlyExpenses, shoeingCosts, totalHolding: (monthlyExpenses * months) + shoeingCosts };
}

function calculateROIWithResale(horse, months, resalePriceUSD) {
  const costs = calculateTotalImportCosts(horse);
  const holding = calculateHoldingCosts(horse, months);
  const totalInvestment = costs.totalInitial + holding.totalHolding;

  const sellerCommissionAmount = resalePriceUSD * horse.sellerCommission;
  const netProceeds = resalePriceUSD - sellerCommissionAmount;

  const profit = netProceeds - totalInvestment;
  const roiPercent = (profit / totalInvestment) * 100;

  return { totalInvestment, netProceeds, profit, roiPercent, sellerCommissionAmount };
}

function requiredResalePriceForTargetROI(horse, months, targetROI) {
  const costs = calculateTotalImportCosts(horse);
  const holding = calculateHoldingCosts(horse, months);
  const totalInvestment = costs.totalInitial + holding.totalHolding;

  const requiredNetProceeds = totalInvestment * (1 + targetROI);
  const requiredResale = requiredNetProceeds / (1 - horse.sellerCommission);

  return { requiredResale };
}

function getYouTubeEmbedUrl(url) {
  const videoId = url.includes('youtu.be')
    ? url.split('youtu.be/')[1].split('?')[0]
    : (url.split('v=')[1] || '').split('&')[0];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

// --- Rendering ---
function createHorseCard(horse, index) {
  const card = document.createElement('div');
  card.className = 'horse-card';
  card.addEventListener('click', () => openModal(index));

  const priceDisplay = formatPriceDisplay(horse.price, horse.currency);

  const image = horse.cardImage
    ? `<img src="${horse.cardImage}" alt="${horse.name}" style="width:100%;height:240px;object-fit:cover;">`
    : `<div class="horse-image-placeholder">${horse.name.charAt(0)}</div>`;

  card.innerHTML = `
    ${image}
    <div class="horse-info">
      <h3 class="horse-name">${horse.name}</h3>
      <div class="horse-details">
        <div class="detail-item">
          <span class="detail-label">Gender</span>
          <span class="detail-value">${horse.gender}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Age</span>
          <span class="detail-value">${horse.age} years</span>
        </div>
      </div>
      <div class="horse-experience">${horse.experience}</div>
      <div class="horse-price">${priceDisplay}</div>
    </div>
  `;
  return card;
}

function openModal(index) {
  const horse = horses[index];
  const modal = document.getElementById('horseModal');
  const closeBtn = document.getElementById('closeModalBtn');

  const priceDisplay = formatPriceDisplay(horse.price, horse.currency);
  const costs = calculateTotalImportCosts(horse);

  const expectedResaleUSD = horse.expectedResale?.usd || 0;
  const roi3 = calculateROIWithResale(horse, 3, expectedResaleUSD);
  const roi6 = calculateROIWithResale(horse, 6, expectedResaleUSD);

  const req3 = requiredResalePriceForTargetROI(horse, 3, roiTargets[3]);
  const req6 = requiredResalePriceForTargetROI(horse, 6, roiTargets[6]);

  document.getElementById('modalHorseName').textContent = horse.name;
  document.getElementById('modalBasicInfo').innerHTML = `
    <span>${horse.gender}</span><span>•</span>
    <span>${horse.age} years old</span><span>•</span>
    <span>${priceDisplay}</span>
  `;

  const body = document.getElementById('modalBody');
  body.innerHTML = '';

  // Photos section (no inline onclick; add listeners below)
  if (horse.galleryImages?.length) {
    const sec = document.createElement('div');
    sec.className = 'info-section';
    sec.innerHTML = `<h3>Photos</h3><div class="image-gallery"></div>`;
    const gallery = sec.querySelector('.image-gallery');

    horse.galleryImages.forEach((src) => {
      const img = document.createElement('img');
      img.className = 'gallery-image';
      img.src = src;
      img.alt = horse.name;
      img.addEventListener('click', () => window.open(src, '_blank'));
      gallery.appendChild(img);
    });

    body.appendChild(sec);
  }

  // Videos
  if (horse.videos?.length) {
    const sec = document.createElement('div');
    sec.className = 'info-section';
    sec.innerHTML = `<h3>Videos</h3><div class="video-container"></div>`;
    const container = sec.querySelector('.video-container');

    horse.videos.forEach((v) => {
      const wrap = document.createElement('div');
      const embedUrl = getYouTubeEmbedUrl(v.url);

      if (embedUrl) {
        wrap.innerHTML = `
          <div class="video-title">${v.title}</div>
          <div class="video-embed"><iframe src="${embedUrl}" allowfullscreen></iframe></div>
        `;
      } else {
        const a = document.createElement('a');
        a.href = v.url;
        a.target = "_blank";
        a.className = "record-link";
        a.textContent = v.title;
        wrap.appendChild(a);
      }
      container.appendChild(wrap);
    });

    body.appendChild(sec);
  }

  // Notes
  const notes = document.createElement('div');
  notes.className = 'info-section';
  notes.innerHTML = `<h3>Notes</h3><div class="notes-box">${horse.notes || ''}</div>`;
  body.appendChild(notes);

  // Investment overview
  const invest = document.createElement('div');
  invest.className = 'info-section';
  invest.innerHTML = `
    <h3>Investment Overview</h3>
    <div class="cost-breakdown">
      <div class="cost-row"><span>Horse Price (${horse.currency})</span><span>${formatCurrency(horse.price, horse.currency)}</span></div>
      <div class="cost-row"><span>Horse Price (USD)</span><span>${formatCurrency(costs.basePrice, 'USD')}</span></div>
      <div class="cost-row"><span>Vetting</span><span>${formatCurrency(costs.vetting, 'USD')}</span></div>
      <div class="cost-row"><span>Transport</span><span>${formatCurrency(costs.transport, 'USD')}</span></div>
      <div class="cost-row"><span>Quarantine</span><span>${formatCurrency(costs.quarantine, 'USD')}</span></div>
      <div class="cost-row"><span>Tariffs</span><span>${formatCurrency(costs.tariffs, 'USD')}</span></div>
      <div class="cost-row"><span>Total Investment (to arrive in California)</span><span>${formatCurrency(costs.totalInitial, 'USD')}</span></div>
    </div>
  `;
  body.appendChild(invest);

  // Expected resale / ROI
  const expected = document.createElement('div');
  expected.className = 'info-section';
  expected.innerHTML = `
    <h3>Expected Resale Value & ROI</h3>
    <div class="cost-breakdown">
      <div class="cost-row"><span>Expected resale value</span><span><strong>${formatCurrency(expectedResaleUSD, 'USD')}</strong></span></div>

      <div class="cost-row"><span><strong>If sold in 3 months</strong></span><span></span></div>
      <div class="cost-row"><span>ROI</span><span><strong>${roi3.roiPercent.toFixed(1)}%</strong></span></div>

      <div class="cost-row" style="margin-top:10px;"><span><strong>If sold in 6 months</strong></span><span></span></div>
      <div class="cost-row"><span>ROI</span><span><strong>${roi6.roiPercent.toFixed(1)}%</strong></span></div>
    </div>
  `;
  body.appendChild(expected);

  // Minimum resale targets
  const min = document.createElement('div');
  min.className = 'info-section';
  min.innerHTML = `
    <h3>Minimum Resale Value to Meet Expected ROI</h3>
    <div class="cost-breakdown">
      <div class="cost-row"><span>Minimum resale @ 3 months (20% ROI)</span><span><strong>${formatCurrency(req3.requiredResale, 'USD')}</strong></span></div>
      <div class="cost-row"><span>Minimum resale @ 6 months (12% ROI)</span><span><strong>${formatCurrency(req6.requiredResale, 'USD')}</strong></span></div>
    </div>
  `;
  body.appendChild(min);

  // Open modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Close handlers
  const close = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  };

  closeBtn.onclick = close;
  modal.onclick = (e) => { if (e.target === modal) close(); };
  document.onkeydown = (e) => { if (e.key === 'Escape') close(); };
}

function init() {
  const grid = document.getElementById('horsesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  horses.forEach((horse, i) => grid.appendChild(createHorseCard(horse, i)));
}

document.addEventListener('DOMContentLoaded', async () => {
  await updateExchangeRates();
  init();
});
