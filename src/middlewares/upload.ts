import multer from "multer";

//pour utiliser enctype="multipart/form-data" et l'envoi de fichier on utilise multer
const upload = multer({
  dest: "public/uploads/",
  limits: { fileSize: 10000000 },
});

export default upload;
