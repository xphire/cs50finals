import QRCode from 'qrcode';

export default async function generate(url) {
  try {
    const qrCodeOptions ={
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      quality: 0.3,
      margin: 1,
      color: {
        dark:"#000000",
        light:"#FFFFFF"
      }
    }

    const qrCodeBuffer =  await QRCode.toDataURL(url, qrCodeOptions);


    return qrCodeBuffer;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

