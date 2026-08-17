const WHATSAPP_NUMBER = "6282129159636";

const GENERAL_INQUIRY_MESSAGE =
  "Halo MSCI Mobilindo, saya ingin bertanya mengenai rental mobil. Mohon informasi lebih lanjut.";

function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralInquiryLink(): string {
  return buildWhatsAppLink(GENERAL_INQUIRY_MESSAGE);
}

export function getVehicleInquiryLink(vehicleName: string): string {
  const message = `Halo MSCI Mobilindo, saya ingin menyewa ${vehicleName}. Mohon informasi ketersediaan dan jadwal rental.`;
  return buildWhatsAppLink(message);
}

export function getSelfDriveInquiryLink(): string {
  const message =
    "Halo MSCI Mobilindo, saya ingin sewa mobil Self Drive (tanpa driver). Mohon informasi armada dan ketersediaan.";
  return buildWhatsAppLink(message);
}

export function getDriverInquiryLink(): string {
  const message =
    "Halo MSCI Mobilindo, saya ingin bertanya mengenai sewa mobil dengan Driver. Mohon informasi ketersediaan dan penawaran harga.";
  return buildWhatsAppLink(message);
}
