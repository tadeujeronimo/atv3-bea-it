import multer from "multer";
import { resolve, dirname } from "path";
import { randomUUID } from "crypto";
import { fileURLToPath } from "url";

export default {
  upload(folder: string) {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (req, file, callback) => {
          const fileHash = randomUUID();
          const fileName = `${fileHash}-${file.originalname}`;
          return callback(null, fileName);
        },
      }),
    };
  },
};