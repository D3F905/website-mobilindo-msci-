"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface TermItem {
  id: string;
  number: string;
  title: string;
  body: string;
}

/**
 * Wording follows the MSCI Mobilindo rental formulir as closely as the
 * verified source text allows — no new rules, no legal interpretation, no
 * invented figures. Where the source document contains more detail than is
 * available here (e.g. the exact grace-period wording for a lost vehicle in
 * KETENTUAN 04), that is referenced rather than guessed.
 */
const TERMS: TermItem[] = [
  {
    id: "kerusakan-kehilangan",
    number: "01",
    title: "Kerusakan & Kehilangan",
    body: "Semua jenis kerusakan dan kehilangan, baik kelengkapan maupun dokumen mobil selama masa penyewaan setelah lepas kunci, menjadi tanggung jawab penyewa. Apabila terjadi kerusakan mobil, penyewa tetap dikenakan biaya sewa sesuai ketentuan sewa per harinya.",
  },
  {
    id: "kelebihan-waktu-sewa",
    number: "02",
    title: "Kelebihan Waktu Sewa",
    body: "Kelebihan waktu sewa melebihi 1 jam dikenakan biaya tambahan sebesar Rp50.000 per jam.",
  },
  {
    id: "pembayaran-bbm",
    number: "03",
    title: "Pembayaran & BBM",
    body: "Uang sewa harus dibayar lunas 100% pada saat pengambilan atau saat pengembalian mobil sesuai ketentuan yang berlaku. Seluruh kebutuhan BBM menjadi tanggung jawab penyewa. Kondisi BBM saat kendaraan dikembalikan minimal harus sesuai dengan kondisi BBM saat pengambilan kendaraan.",
  },
  {
    id: "kendaraan-hilang",
    number: "04",
    title: "Kendaraan Hilang",
    body: "Apabila mobil hilang selama masa sewa dan masa sewa belum berakhir, penyewa bertanggung jawab mengganti mobil yang hilang dengan model dan tahun yang sama, sesuai ketentuan tenggang waktu penyelesaian yang tercantum pada dokumen rental resmi.",
  },
  {
    id: "meminjamkan-kendaraan",
    number: "05",
    title: "Meminjamkan / Memindahtangankan Kendaraan",
    body: "Selama masa sewa berlangsung, penyewa tidak diperkenankan meminjamkan atau memindahtangankan kendaraan kepada pihak lain. Apabila hal tersebut terjadi, segala risiko yang timbul menjadi tanggung jawab penyewa sepenuhnya.",
  },
  {
    id: "tilang-pelanggaran-hukum",
    number: "06",
    title: "Tilang & Pelanggaran Hukum",
    body: "Jika terjadi pelanggaran lalu lintas atau tindak kriminalitas yang menyebabkan keluarnya surat tilang dari kepolisian, penyewa bertanggung jawab penuh untuk menyelesaikannya, baik di tingkat kepolisian maupun pengadilan. Seluruh biaya yang timbul menjadi tanggung jawab penyewa dan harus diselesaikan selama masa sewa belum berakhir.",
  },
  {
    id: "kecelakaan-kerusakan-besar",
    number: "07",
    title: "Kecelakaan / Kerusakan Besar",
    body: "Apabila terjadi kecelakaan besar yang menyebabkan kerusakan mobil di atas 50% hingga kendaraan tidak dapat digunakan kembali, penyewa wajib mengikuti ketentuan penggantian atau perbaikan sesuai aturan yang tercantum pada dokumen rental.",
  },
  {
    id: "pelanggaran-perjanjian",
    number: "08",
    title: "Pelanggaran Perjanjian",
    body: "Apabila penyewa melanggar atau mengingkari perjanjian sewa yang telah disepakati, penyewa dapat dikenakan ganti rugi kepada MSCI Mobilindo dan diproses secara hukum.",
  },
];

export default function TermsAndConditions() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="syarat" className="bg-canvas py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-600">
              Syarat &amp; Ketentuan
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-ink-950 sm:text-5xl">
              Syarat &amp; Ketentuan Rental
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Harap membaca dan memahami ketentuan rental sebelum melakukan penyewaan kendaraan.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="border-t border-neutral-300">
              {TERMS.map((term) => {
                const isOpen = openId === term.id;
                const triggerId = `terms-trigger-${term.id}`;
                const panelId = `terms-panel-${term.id}`;

                return (
                  <div key={term.id} className="border-b border-neutral-300">
                    <h3>
                      <button
                        id={triggerId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenId(isOpen ? null : term.id)}
                        className="flex w-full items-center gap-5 py-6 text-left sm:gap-8"
                      >
                        <span
                          aria-hidden="true"
                          className="font-heading text-2xl font-extrabold text-neutral-300 sm:text-3xl"
                        >
                          {term.number}
                        </span>
                        <span className="flex-1 font-heading text-base font-bold uppercase tracking-tight text-ink-950 sm:text-lg">
                          {term.title}
                        </span>
                        <PlusIcon isOpen={isOpen} />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      hidden={!isOpen}
                      className="pb-6 pl-12 pr-8 text-sm text-neutral-600 sm:pl-16 sm:text-base"
                    >
                      <p>{term.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-sm text-neutral-600">
              Ketentuan pada website merupakan ringkasan informasi dari dokumen rental MSCI
              Mobilindo. Ketentuan yang berlaku pada saat transaksi mengikuti perjanjian rental
              yang disepakati antara penyewa dan MSCI Mobilindo.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-[transform,color] duration-200 motion-reduce:transition-none ${
        isOpen ? "rotate-45 text-accent-500" : "text-neutral-400"
      }`}
    >
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
