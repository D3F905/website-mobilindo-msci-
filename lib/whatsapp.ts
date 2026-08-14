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
