import { getCurrentlyPlaying } from "../../library/spotify";

export default async (_, res) => {
  const response = await getCurrentlyPlaying();
  return res.status(200).json(response);
};
