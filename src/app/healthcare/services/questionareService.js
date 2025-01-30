import axios from "../lib/axiosInstance";
import { fetchConversations, loadConversation } from "./chatService";

export const handleQuestionaireFormSubmit = (
  user,
  formData,
  dispatch,
  convoType
) => {
  if (convoType === "chat") {
    return axios
      .post("/chat/conversations", {
        userId: user._id,
        questionaireData: formData,
      })
      .then((res) => {
        dispatch(fetchConversations(user._id));
        dispatch(loadConversation(res.data.conversation));
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }
  // if (convoType === "avatar") {
  //   const result = axios.post("/chat/conversations/analyze-questionare", {
  //     userId: user._id,
  //     questionaireData: formData,
  //   });

  //   console.log("Dataa is : ", result);
  // }
};

export const handleAvatarQuestionaireFormSubmit = async (
  user,
  questionaire,
) => {
  
  const result = await axios.post("/chat/conversations/analyze-questionare", {
    user,
    questionaireData: questionaire,
  });

  console.log("RESULT FROM handleAvatarQuestionaireFormSubmit : ", result.data);
  

  return result.data;
};
