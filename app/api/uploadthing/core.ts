import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession();
      const user = await getUser();

      if (!user || user.email !== "rythembangia10@gmail.com") {
        throw new UploadThingError("Unauthorized");
      }

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      return { uploadedBy: metadata.userId, fileUrl: file.url };
    }),


    bannerimageUpRoute: f({
      image: {
        maxFileSize: "4MB",
        maxFileCount: 1,
      },
    })
      .middleware(async ({ req }) => {
        const { getUser } = getKindeServerSession();
        const user = await getUser();
  
        if (!user || user.email !== "rythembangia10@gmail.com") {
          throw new UploadThingError("Unauthorized");
        }
  
        return { userId: user.id };
      })
      .onUploadComplete(async ({ metadata, file }) => {
        console.log("Upload complete for userId:", metadata.userId);
        console.log("file url", file.url);
        return { uploadedBy: metadata.userId, fileUrl: file.url };
      }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
