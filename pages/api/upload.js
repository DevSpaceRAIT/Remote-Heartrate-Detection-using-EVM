import formidable from "formidable";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    // parse the incoming form data
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
        return;
      }

      // get the video file from the incoming form data
      const video = files.video;

      // create a new form data object and append the video file to it
      const formData = new FormData();
      formData.append("video", video, video.name);

      try {
        // send the form data containing the video file to your server
        const response = await axios.post(
          "http://localhost:4000/upload",
          formData,
          {
            headers: formData.getHeaders(),
          }
        );

        console.log(response.data);

        res.status(200).json({ message: "Video uploaded successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
      }
    });
  } else {
    res.status(404).json({ error: "Not found" });
  }
}
