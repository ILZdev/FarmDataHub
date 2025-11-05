const PanenDefaultConfig = {
        dashboard_title: "Dashboard Data Panen",
        countdown_label: "🌾 Panen Terdekat",
        primary_color: "#16a34a",
        surface_color: "#ffffff",
        text_color: "#1f2937",
        accent_color: "#22c55e",
        background_color: "#f0fdf4",
      };

      const panenData = [
        {
          komoditas: "Timun",
          tanggalTanam: "2025-01-10",
          perkiraanPanen: "2025-02-15",
          hasilAktual: 90,
          target: 100,
        },
        {
          komoditas: "Bawang Merah",
          tanggalTanam: "2024-12-20",
          perkiraanPanen: "2025-02-05",
          hasilAktual: 70,
          target: 120,
        },
        {
          komoditas: "Cabai",
          tanggalTanam: "2025-01-05",
          perkiraanPanen: "2025-02-20",
          hasilAktual: 50,
          target: 80,
        },
        {
          komoditas: "Tomat",
          tanggalTanam: "2024-12-15",
          perkiraanPanen: "2025-01-30",
          hasilAktual: 110,
          target: 100,
        },
        {
          komoditas: "Kangkung",
          tanggalTanam: "2025-01-20",
          perkiraanPanen: "2025-02-10",
          hasilAktual: 85,
          target: 90,
        },
      ];

      const penjualanData = [
        {
          komoditas: "Timun",
          pembeli: "Pasar Induk Kramat Jati",
          jumlahTerjual: 75,
          hargaPerKg: 8000,
          tanggalJual: "2025-01-25",
          statusBayar: "Lunas",
        },
        {
          komoditas: "Bawang Merah",
          pembeli: "Supermarket Hero",
          jumlahTerjual: 60,
          hargaPerKg: 35000,
          tanggalJual: "2025-01-20",
          statusBayar: "Lunas",
        },
        {
          komoditas: "Cabai",
          pembeli: "Warung Pak Budi",
          jumlahTerjual: 30,
          hargaPerKg: 45000,
          tanggalJual: "2025-01-22",
          statusBayar: "Belum Lunas",
        },
        {
          komoditas: "Tomat",
          pembeli: "Pasar Tradisional Minggu",
          jumlahTerjual: 95,
          hargaPerKg: 12000,
          tanggalJual: "2025-01-18",
          statusBayar: "Lunas",
        },
        {
          komoditas: "Kangkung",
          pembeli: "Restoran Sederhana",
          jumlahTerjual: 40,
          hargaPerKg: 6000,
          tanggalJual: "2025-01-23",
          statusBayar: "Lunas",
        },
        {
          komoditas: "Timun",
          pembeli: "Toko Sayur Segar",
          jumlahTerjual: 15,
          hargaPerKg: 7500,
          tanggalJual: "2025-01-26",
          statusBayar: "Belum Lunas",
        },
      ];

      function hitungSisaHari(tanggalPanen) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const panen = new Date(tanggalPanen);
        panen.setHours(0, 0, 0, 0);
        const diff = panen - today;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
      }

      function hitungPersentase(hasilAktual, target) {
        return Math.round((hasilAktual / target) * 100);
      }

      function getWarnaKeberhasilan(persentase) {
        if (persentase >= 80)
          return {
            bg: "bg-green-100",
            text: "text-green-800",
            border: "border-green-300",
          };
        if (persentase >= 50)
          return {
            bg: "bg-yellow-100",
            text: "text-yellow-800",
            border: "border-yellow-300",
          };
        return {
          bg: "bg-red-100",
          text: "text-red-800",
          border: "border-red-300",
        };
      }

      function formatTanggal(tanggal) {
        const date = new Date(tanggal);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("id-ID", options);
      }

      function updateCountdown() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const panenMendatang = panenData
          .map((item) => ({
            ...item,
            sisaHari: hitungSisaHari(item.perkiraanPanen),
          }))
          .filter((item) => item.sisaHari >= 0)
          .sort((a, b) => a.sisaHari - b.sisaHari);

        if (panenMendatang.length > 0) {
          const terdekat = panenMendatang[0];
          document.getElementById("countdown-komoditas").textContent =
            terdekat.komoditas;
          document.getElementById("countdown-days").textContent =
            terdekat.sisaHari;
        } else {
          document.getElementById("countdown-komoditas").textContent =
            "Tidak ada panen mendatang";
          document.getElementById("countdown-days").textContent = "-";
        }
      }

      function renderTable() {
        const tbody = document.getElementById("table-body");
        tbody.innerHTML = "";

        panenData.forEach((item) => {
          const persentase = hitungPersentase(item.hasilAktual, item.target);
          const warna = getWarnaKeberhasilan(persentase);
          const sisaHari = hitungSisaHari(item.perkiraanPanen);

          let statusHTML;
          if (sisaHari < 0) {
            statusHTML =
              '<span class="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-600 whitespace-nowrap">Sudah Panen</span>';
          } else if (sisaHari === 0) {
            statusHTML =
              '<span class="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 whitespace-nowrap">Hari Ini!</span>';
          } else {
            statusHTML = `<span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">${sisaHari} hari lagi</span>`;
          }

          const row = document.createElement("tr");
          row.className = "hover:bg-green-50 transition-colors duration-200";
          row.innerHTML = `
          <td class="px-6 py-4 font-medium text-gray-900">${item.komoditas}</td>
          <td class="px-6 py-4 text-gray-600">${formatTanggal(
            item.tanggalTanam
          )}</td>
          <td class="px-6 py-4 text-gray-600">${formatTanggal(
            item.perkiraanPanen
          )}</td>
          <td class="px-6 py-4 text-gray-900 font-semibold">${
            item.hasilAktual
          } kg / ${item.target} kg</td>
          <td class="px-6 py-4">
            <span class="px-3 py-1 rounded-full text-sm font-bold ${warna.bg} ${
            warna.text
          } border-2 ${warna.border}">
              ${persentase}%
            </span>
          </td>
          <td class="px-6 py-4">${statusHTML}</td>
        `;
          tbody.appendChild(row);
        });

        updateSummary();
      }

      function formatRupiah(angka) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(angka);
      }

      function renderSalesTable() {
        const tbody = document.getElementById("sales-table-body");
        tbody.innerHTML = "";

        penjualanData.forEach((item) => {
          const totalPemasukan = item.jumlahTerjual * item.hargaPerKg;

          let statusHTML;
          if (item.statusBayar === "Lunas") {
            statusHTML =
              '<span class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border-2 border-green-300 whitespace-nowrap">✓ Lunas</span>';
          } else {
            statusHTML =
              '<span class="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border-2 border-red-300 whitespace-nowrap">⏳ Belum Lunas</span>';
          }

          const row = document.createElement("tr");
          row.className = "hover:bg-blue-50 transition-colors duration-200";
          row.innerHTML = `
          <td class="px-6 py-4 font-medium text-gray-900">${item.komoditas}</td>
          <td class="px-6 py-4 text-gray-600">${item.pembeli}</td>
          <td class="px-6 py-4 text-gray-900 font-semibold">${
            item.jumlahTerjual
          } kg</td>
          <td class="px-6 py-4 text-gray-900">${formatRupiah(
            item.hargaPerKg
          )}</td>
          <td class="px-6 py-4 text-blue-700 font-bold">${formatRupiah(
            totalPemasukan
          )}</td>
          <td class="px-6 py-4 text-gray-600">${formatTanggal(
            item.tanggalJual
          )}</td>
          <td class="px-6 py-4">${statusHTML}</td>
        `;
          tbody.appendChild(row);
        });
      }

      function renderPanenChart() {
        const chartContainer = document.getElementById("panen-chart");
        chartContainer.innerHTML = "";

        const maxValue = Math.max(
          ...panenData.map((item) => Math.max(item.hasilAktual, item.target))
        );

        panenData.forEach((item) => {
          const persentase = hitungPersentase(item.hasilAktual, item.target);
          const actualWidth = (item.hasilAktual / maxValue) * 100;
          const targetWidth = (item.target / maxValue) * 100;

          const chartItem = document.createElement("div");
          chartItem.className = "mb-4";
          chartItem.innerHTML = `
          <div class="flex justify-between items-center mb-2">
            <span class="font-medium text-gray-700 text-sm">${item.komoditas}</span>
            <span class="text-xs text-gray-500">${item.hasilAktual}/${item.target} kg (${persentase}%)</span>
          </div>
          <div class="relative">
            <div class="w-full bg-gray-200 rounded-full h-6 mb-1">
              <div class="bg-green-500 h-6 rounded-full relative" style="width: ${actualWidth}%">
                <span class="absolute right-2 top-0 text-xs text-white font-medium leading-6">Aktual</span>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-green-300 h-2 rounded-full" style="width: ${targetWidth}%"></div>
            </div>
            <span class="text-xs text-gray-500 mt-1">Target</span>
          </div>
        `;
          chartContainer.appendChild(chartItem);
        });
      }

      function renderSalesChart() {
        const chartContainer = document.getElementById("sales-chart");
        chartContainer.innerHTML = "";

        // Agregasi penjualan per komoditas
        const salesByKomoditas = {};
        penjualanData.forEach((item) => {
          const total = item.jumlahTerjual * item.hargaPerKg;
          if (salesByKomoditas[item.komoditas]) {
            salesByKomoditas[item.komoditas] += total;
          } else {
            salesByKomoditas[item.komoditas] = total;
          }
        });

        const maxSales = Math.max(...Object.values(salesByKomoditas));
        const colors = [
          "bg-blue-500",
          "bg-green-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-red-500",
        ];

        Object.entries(salesByKomoditas).forEach(
          ([komoditas, total], index) => {
            const width = (total / maxSales) * 100;
            const colorClass = colors[index % colors.length];

            const chartItem = document.createElement("div");
            chartItem.className = "mb-4";
            chartItem.innerHTML = `
          <div class="flex justify-between items-center mb-2">
            <span class="font-medium text-gray-700 text-sm">${komoditas}</span>
            <span class="text-xs text-gray-500">${formatRupiah(total)}</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-6">
            <div class="${colorClass} h-6 rounded-full flex items-center justify-end pr-2" style="width: ${width}%">
              <span class="text-xs text-white font-medium">${Math.round(
                width
              )}%</span>
            </div>
          </div>
        `;
            chartContainer.appendChild(chartItem);
          }
        );
      }

      function updateSummary() {
        document.getElementById("total-komoditas").textContent =
          panenData.length;

        const totalPersentase = panenData.reduce((sum, item) => {
          return sum + hitungPersentase(item.hasilAktual, item.target);
        }, 0);
        const avgPersentase = Math.round(totalPersentase / panenData.length);
        document.getElementById("avg-success").textContent =
          avgPersentase + "%";

        const totalPenjualan = penjualanData.reduce((sum, item) => {
          return sum + item.jumlahTerjual * item.hargaPerKg;
        }, 0);
        document.getElementById("total-penjualan").textContent =
          formatRupiah(totalPenjualan);

        const piutangBelumLunas = penjualanData
          .filter((item) => item.statusBayar === "Belum Lunas")
          .reduce((sum, item) => {
            return sum + item.jumlahTerjual * item.hargaPerKg;
          }, 0);
        document.getElementById("piutang-belum-lunas").textContent =
          formatRupiah(piutangBelumLunas);
      }

      async function onConfigChange(config) {
        document.getElementById("dashboard-title").textContent =
          config.dashboard_title || PanenDefaultConfig.dashboard_title;
        document.getElementById("countdown-label").textContent =
          config.countdown_label || PanenDefaultConfig.countdown_label;

        const primaryColor =
          config.primary_color || PanenDefaultConfig.primary_color;
        const surfaceColor =
          config.surface_color || PanenDefaultConfig.surface_color;
        const textColor = config.text_color || PanenDefaultConfig.text_color;
        const accentColor = config.accent_color || PanenDefaultConfig.accent_color;
        const backgroundColor =
          config.background_color || PanenDefaultConfig.background_color;

        document.body.style.background = `linear-gradient(to bottom right, ${backgroundColor}, ${accentColor}20)`;
        document.getElementById("dashboard-title").style.color = primaryColor;
      }

      if (window.elementSdk) {
        window.elementSdk.init({
          PanenDefaultConfig,
          onConfigChange,
          mapToCapabilities: (config) => ({
            recolorables: [
              {
                get: () =>
                  config.background_color || PanenDefaultConfig.background_color,
                set: (value) => {
                  config.background_color = value;
                  window.elementSdk.setConfig({ background_color: value });
                },
              },
              {
                get: () => config.surface_color || PanenDefaultConfig.surface_color,
                set: (value) => {
                  config.surface_color = value;
                  window.elementSdk.setConfig({ surface_color: value });
                },
              },
              {
                get: () => config.text_color || PanenDefaultConfig.text_color,
                set: (value) => {
                  config.text_color = value;
                  window.elementSdk.setConfig({ text_color: value });
                },
              },
              {
                get: () => config.primary_color || PanenDefaultConfig.primary_color,
                set: (value) => {
                  config.primary_color = value;
                  window.elementSdk.setConfig({ primary_color: value });
                },
              },
              {
                get: () => config.accent_color || PanenDefaultConfig.accent_color,
                set: (value) => {
                  config.accent_color = value;
                  window.elementSdk.setConfig({ accent_color: value });
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
                config.dashboard_title || PanenDefaultConfig.dashboard_title,
              ],
              [
                "countdown_label",
                config.countdown_label || PanenDefaultConfig.countdown_label,
              ],
            ]),
        });
      }

      renderTable();
      renderSalesTable();
      renderPanenChart();
      renderSalesChart();
      updateCountdown();

      setInterval(() => {
        updateCountdown();
        renderTable();
        renderSalesTable();
        renderPanenChart();
        renderSalesChart();
      }, 60000);