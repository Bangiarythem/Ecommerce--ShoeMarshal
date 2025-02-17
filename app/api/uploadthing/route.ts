// import { createUploadthing, type FileRouter } from "uploadthing/server";
// import { createRouteHandler } from "uploadthing/next";
 
// const f = createUploadthing();
 
// export const ourFileRouter = {
//   imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 5 } })
//     .onUploadComplete(({ file }) => {
//       console.log("File uploaded:", file);
      
//       return { fileUrl: file.url };
//     }),
// } satisfies FileRouter;
 
// export type OurFileRouter = typeof ourFileRouter;
 
// export const { GET, POST } = createRouteHandler({
//   router: ourFileRouter,
// });

import { createUploadthing, type FileRouter } from "uploadthing/server";
import { createRouteHandler } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 5 } })
    .onUploadComplete(({ file }) => {
      console.log("File uploaded:", file);
      
      // Correctly extract file URL
      const fileUrl = file.url;
      console.log("Uploaded File URL:", fileUrl);

      return { fileUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
