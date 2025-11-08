// Data laporan pertanian
const laporanData = [
  {
    komoditas: "Padi",
    totalBiaya: 4500000,
    totalHasil: 7500000,
    labaRugi: 3000000,
    persenInvestor: 40,
    bagianInvestor: 1200000,
    efisiensi: 88,
    periode: "q1",
  },
  {
    komoditas: "Cabai",
    totalBiaya: 2500000,
    totalHasil: 2000000,
    labaRugi: -500000,
    persenInvestor: 40,
    bagianInvestor: 0,
    efisiensi: 60,
    periode: "q2",
  },
  {
    komoditas: "Jagung",
    totalBiaya: 3000000,
    totalHasil: 5000000,
    labaRugi: 2000000,
    persenInvestor: 35,
    bagianInvestor: 700000,
    efisiensi: 80,
    periode: "q1",
  },
  {
    komoditas: "Tomat",
    totalBiaya: 1800000,
    totalHasil: 3200000,
    labaRugi: 1400000,
    persenInvestor: 30,
    bagianInvestor: 420000,
    efisiensi: 85,
    periode: "q3",
  },
  {
    komoditas: "Kedelai",
    totalBiaya: 2200000,
    totalHasil: 3500000,
    labaRugi: 1300000,
    persenInvestor: 35,
    bagianInvestor: 455000,
    efisiensi: 75,
    periode: "q2",
  },
];

// Data investor
const investorData = [
  {
    nama: "Budi Santoso",
    komoditas: "Padi",
    persentase: 40,
    jumlah: 1200000,
    periode: "q1",
  },
  {
    nama: "Siti Aminah",
    komoditas: "Cabai",
    persentase: 40,
    jumlah: 0,
    periode: "q2",
  },
  {
    nama: "Ahmad Hidayat",
    komoditas: "Jagung",
    persentase: 35,
    jumlah: 700000,
    periode: "q1",
  },
  {
    nama: "Dewi Lestari",
    komoditas: "Tomat",
    persentase: 30,
    jumlah: 420000,
    periode: "q3",
  },
  {
    nama: "Rudi Hartono",
    komoditas: "Kedelai",
    persentase: 35,
    jumlah: 455000,
    periode: "q2",
  },
];

let filteredData = [...laporanData];
let barChart = null;
let pieChart = null;
let investorChart = null;

const ReportDefaultConfig = {
  dashboard_title: "Laporan Data Akhir Pertanian",
  subtitle: "Analisis Keuangan & Produksi Periode 2024",
  income_label: "Total Pemasukan",
  expense_label: "Total Pengeluaran",
  profit_label: "Total Laba/Rugi",
  harvest_label: "Panen Berhasil",
  commodity_label: "Komoditas Aktif",
  background_color: "#8b2e2e",
  card_color: "#ffffff",
  text_color: "#1a202c",
  primary_color: "#4caf50",
  secondary_color: "#ff9800",
};

function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

function calculateStats(data) {
  const totalIncome = data.reduce((sum, item) => sum + item.totalHasil, 0);
  const totalExpense = data.reduce((sum, item) => sum + item.totalBiaya, 0);
  const totalProfit = totalIncome - totalExpense;
  const totalInvestor = data.reduce(
    (sum, item) => sum + item.bagianInvestor,
    0
  );
  const avgEfficiency =
    data.reduce((sum, item) => sum + item.efisiensi, 0) / data.length;
  const totalCommodity = data.length;

  document.getElementById("total-income").textContent =
    formatCurrency(totalIncome);
  document.getElementById("total-expense").textContent =
    formatCurrency(totalExpense);
  document.getElementById("total-profit").textContent =
    formatCurrency(totalProfit);
  document.getElementById("total-investor").textContent =
    formatCurrency(totalInvestor);
  document.getElementById("harvest-success").textContent =
    avgEfficiency.toFixed(1) + "%";
  document.getElementById("total-commodity").textContent = totalCommodity;

  const profitElement = document.getElementById("total-profit");
  profitElement.style.color = totalProfit >= 0 ? "#4caf50" : "#f44336";
}

function renderTable(data) {
  const tbody = document.getElementById("table-body");

  if (data.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="5" class="no-data">Tidak ada data yang sesuai dengan filter</td></tr>';
    return;
  }

  tbody.innerHTML = data
    .map((item) => {
      const profitClass =
        item.labaRugi >= 0 ? "profit-positive" : "profit-negative";
      let efficiencyClass = "efficiency-low";
      if (item.efisiensi >= 80) efficiencyClass = "efficiency-high";
      else if (item.efisiensi >= 65) efficiencyClass = "efficiency-medium";

      return `
          <tr>
            <td><strong>${item.komoditas}</strong></td>
            <td>${formatCurrency(item.totalBiaya)}</td>
            <td>${formatCurrency(item.totalHasil)}</td>
            <td class="${profitClass}">${formatCurrency(item.labaRugi)}</td>
            <td style="text-align: center;">
              <span class="efficiency-badge ${efficiencyClass}">${
        item.efisiensi
      }%</span>
            </td>
          </tr>
        `;
    })
    .join("");
}

function renderInvestorTable(data) {
  const tbody = document.getElementById("investor-table-body");

  if (data.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="5" class="no-data">Tidak ada data investor yang sesuai dengan filter</td></tr>';
    return;
  }

  tbody.innerHTML = data
    .map((item) => {
      const status = item.jumlah > 0 ? "Dibayar" : "Belum Dibayar";
      const statusClass =
        item.jumlah > 0 ? "efficiency-high" : "efficiency-low";

      return `
          <tr>
            <td><strong>${item.nama}</strong></td>
            <td>${item.komoditas}</td>
            <td>${item.persentase}%</td>
            <td class="profit-positive">${formatCurrency(item.jumlah)}</td>
            <td style="text-align: center;">
              <span class="efficiency-badge ${statusClass}">${status}</span>
            </td>
          </tr>
        `;
    })
    .join("");
}

function renderBarChart(data) {
  const ctx = document.getElementById("barChart");

  if (barChart) {
    barChart.destroy();
  }

  barChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map((item) => item.komoditas),
      datasets: [
        {
          label: "Total Biaya",
          data: data.map((item) => item.totalBiaya),
          backgroundColor: "rgba(255, 152, 0, 0.7)",
          borderColor: "rgba(255, 152, 0, 1)",
          borderWidth: 2,
        },
        {
          label: "Total Hasil",
          data: data.map((item) => item.totalHasil),
          backgroundColor: "rgba(76, 175, 80, 0.7)",
          borderColor: "rgba(76, 175, 80, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return "Rp " + (value / 1000000).toFixed(1) + "jt";
            },
          },
        },
      },
    },
  });
}

function renderPieChart(data) {
  const ctx = document.getElementById("pieChart");

  if (pieChart) {
    pieChart.destroy();
  }

  pieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: data.map((item) => item.komoditas),
      datasets: [
        {
          data: data.map((item) => item.totalBiaya),
          backgroundColor: [
            "rgba(76, 175, 80, 0.8)",
            "rgba(255, 152, 0, 0.8)",
            "rgba(33, 150, 243, 0.8)",
            "rgba(156, 39, 176, 0.8)",
            "rgba(255, 193, 7, 0.8)",
          ],
          borderColor: [
            "rgba(76, 175, 80, 1)",
            "rgba(255, 152, 0, 1)",
            "rgba(33, 150, 243, 1)",
            "rgba(156, 39, 176, 1)",
            "rgba(255, 193, 7, 1)",
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = formatCurrency(context.parsed);
              return label + ": " + value;
            },
          },
        },
      },
    },
  });
}

function renderInvestorChart(data) {
  const ctx = document.getElementById("investorChart");

  if (investorChart) {
    investorChart.destroy();
  }

  investorChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: data.map((item) => item.nama),
      datasets: [
        {
          data: data.map((item) => item.jumlah),
          backgroundColor: [
            "rgba(76, 175, 80, 0.8)",
            "rgba(255, 152, 0, 0.8)",
            "rgba(33, 150, 243, 0.8)",
            "rgba(156, 39, 176, 0.8)",
            "rgba(255, 193, 7, 0.8)",
          ],
          borderColor: [
            "rgba(76, 175, 80, 1)",
            "rgba(255, 152, 0, 1)",
            "rgba(33, 150, 243, 1)",
            "rgba(156, 39, 176, 1)",
            "rgba(255, 193, 7, 1)",
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 12,
            font: {
              size: 11,
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = formatCurrency(context.parsed);
              return label + ": " + value;
            },
          },
        },
      },
    },
  });
}

function populateCommodityFilter() {
  const select = document.getElementById("commodity-filter");
  const commodities = [...new Set(laporanData.map((item) => item.komoditas))];

  commodities.forEach((commodity) => {
    const option = document.createElement("option");
    option.value = commodity;
    option.textContent = commodity;
    select.appendChild(option);
  });
}

function applyFilters() {
  const periodFilter = document.getElementById("period-filter").value;
  const commodityFilter = document.getElementById("commodity-filter").value;

  filteredData = laporanData.filter((item) => {
    const periodMatch = periodFilter === "all" || item.periode === periodFilter;
    const commodityMatch =
      commodityFilter === "all" || item.komoditas === commodityFilter;
    return periodMatch && commodityMatch;
  });

  const filteredInvestorData = investorData.filter((item) => {
    const periodMatch = periodFilter === "all" || item.periode === periodFilter;
    const commodityMatch =
      commodityFilter === "all" || item.komoditas === commodityFilter;
    return periodMatch && commodityMatch;
  });

  calculateStats(filteredData);
  renderTable(filteredData);
  renderInvestorTable(filteredInvestorData);
  renderInvestorChart(filteredInvestorData);
  renderBarChart(filteredData);
  renderPieChart(filteredData);
}

async function onConfigChange(config) {
  document.getElementById("dashboard-title").textContent =
    config.dashboard_title || ReportDefaultConfig.dashboard_title;
  document.getElementById("subtitle").textContent =
    config.subtitle || ReportDefaultConfig.subtitle;
  document.getElementById("income-label").textContent =
    config.income_label || ReportDefaultConfig.income_label;
  document.getElementById("expense-label").textContent =
    config.expense_label || ReportDefaultConfig.expense_label;
  document.getElementById("profit-label").textContent =
    config.profit_label || ReportDefaultConfig.profit_label;
  document.getElementById("harvest-label").textContent =
    config.harvest_label || ReportDefaultConfig.harvest_label;
  document.getElementById("commodity-label").textContent =
    config.commodity_label || ReportDefaultConfig.commodity_label;

  const backgroundColor =
    config.background_color || ReportDefaultConfig.background_color;
  const secondaryColor =
    config.secondary_color || ReportDefaultConfig.secondary_color;
  document.body.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, #5a1a1a 100%)`;

  const cardColor = config.card_color || ReportDefaultConfig.card_color;
  document
    .querySelectorAll(
      ".header, .stat-card, .controls, .table-container, .chart-container"
    )
    .forEach((el) => {
      el.style.backgroundColor = cardColor;
    });

  const textColor = config.text_color || ReportDefaultConfig.text_color;
  document
    .querySelectorAll(".header h1, .table-container h2, .chart-container h2")
    .forEach((el) => {
      el.style.color = textColor;
    });

  const primaryColor = config.primary_color || ReportDefaultConfig.primary_color;
  document.querySelector(".header").style.borderLeftColor = primaryColor;
}

if (window.elementSdk) {
  window.elementSdk.init({
    ReportDefaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || ReportDefaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          },
        },
        {
          get: () => config.card_color || ReportDefaultConfig.card_color,
          set: (value) => {
            config.card_color = value;
            window.elementSdk.setConfig({ card_color: value });
          },
        },
        {
          get: () => config.text_color || ReportDefaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          },
        },
        {
          get: () => config.primary_color || ReportDefaultConfig.primary_color,
          set: (value) => {
            config.primary_color = value;
            window.elementSdk.setConfig({ primary_color: value });
          },
        },
        {
          get: () => config.secondary_color || ReportDefaultConfig.secondary_color,
          set: (value) => {
            config.secondary_color = value;
            window.elementSdk.setConfig({ secondary_color: value });
          },
        },
      ],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined,
    }),
    mapToEditPanelValues: (config) =>
      new Map([
        [
          "dashboard_title",
          config.dashboard_title || ReportDefaultConfig.dashboard_title,
        ],
        ["subtitle", config.subtitle || ReportDefaultConfig.subtitle],
        ["income_label", config.income_label || ReportDefaultConfig.income_label],
        ["expense_label", config.expense_label || ReportDefaultConfig.expense_label],
        ["profit_label", config.profit_label || ReportDefaultConfig.profit_label],
        ["harvest_label", config.harvest_label || ReportDefaultConfig.harvest_label],
        [
          "commodity_label",
          config.commodity_label || ReportDefaultConfig.commodity_label,
        ],
      ]),
  });
}

document
  .getElementById("period-filter")
  .addEventListener("change", applyFilters);
document
  .getElementById("commodity-filter")
  .addEventListener("change", applyFilters);

populateCommodityFilter();
calculateStats(filteredData);
renderTable(filteredData);
renderInvestorTable(investorData);
renderInvestorChart(investorData);
renderBarChart(filteredData);
renderPieChart(filteredData);
