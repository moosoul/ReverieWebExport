import { get } from "@utils/request";
import { Discussion, Message } from "./types/discussionPage.type";

const getDiscussion = (id: string) => {
  return get<{ success: boolean; discussion: Discussion }>("/get_discussion", {
    id,
  });
};

const getComments = (id: string, page: number = 0, page_size: number = 5) => {
  return get<{ success: boolean; messages: Array<Message> }>("/get_comments", {
    discussion_id: id,
    page,
    page_size,
  });
};

const discussionService = {
  getDiscussion,
  getComments,
};
export default discussionService;
