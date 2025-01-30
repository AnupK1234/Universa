import axios from "../../lib/axiosInstance";
import { Button } from "../buttons/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../dialog/Dialog";
import { initialQuestion } from "../../constants/constant";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { handleQuestionaireFormSubmit } from "../../services/questionareService";
import { setQuestionaire } from "../../redux/slice/chatSlice";

const MultiStepForm = ({ isOpen, onClose, convoType, handleConversationStart }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialQuestion);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleInputChange = (index, value) => {
    const newFormData = [...formData];
    newFormData[index].answer = value;
    setFormData(newFormData);
  };

  const isStepValid = () => {
    const startIndex = (step - 1) * 2;
    const endIndex = step === 2 ? startIndex + 3 : startIndex + 2;
    const questionsInStep = formData.slice(startIndex, endIndex);
    return questionsInStep.every((q) => q && q.answer);
  };

  const generateAIQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/chat/generate-questions", {
        previousAnswers: formData.slice(0, 5),
      });

      // Add generated questions to formData with empty answers
      const newQuestions = response.data.questions.map((q) => ({
        ...q,
        answer: "",
      }));

      setFormData([...initialQuestion, ...newQuestions]);
    } catch (error) {
      console.error("Error generating questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (step === 3) {
      generateAIQuestions();
    }
  }, [step]);

  const handleSubmit = () => {
    if (formData.every((item) => item.answer)) {
      if (convoType === "chat") {
        handleQuestionaireFormSubmit(user, formData, dispatch, convoType);
      }
      if (convoType === "avatar") {
        dispatch(setQuestionaire(formData));
        handleConversationStart(formData);
      }
      onClose();
      setStep(1);
      setFormData(initialQuestion);
    }
  };

  const renderQuestions = () => {
    let startIndex = (step - 1) * 2;
    if(step == 3) startIndex++;
    const endIndex = step === 2 ? startIndex + 3 : startIndex + 2;
    const questionsToShow = formData.slice(startIndex, endIndex);

    if (step === 3 && isLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mb-4"></div>
          <p className="text-slate-400 font-medium">Analyzing responses...</p>
        </div>
      );
    }

    return questionsToShow.map((item, index) => (
      <div key={index} className="space-y-2">
        <label className="text-lg font-medium text-slate-300">
          {item.question}
        </label>

        <textarea
          className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 h-24 
          resize-none overflow-y-auto text-slate-100 placeholder:text-slate-500
          focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={item.answer}
          onChange={(e) =>
            handleInputChange(startIndex + index, e.target.value)
          }
          required
        />
      </div>
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Medical Questionnaire - Step {step} of 3</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">{renderQuestions()}</div>

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2"
            >
              <FiChevronLeft /> Previous
            </Button>
          )}

          {step < 3 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!isStepValid()}
              className="flex items-center gap-2 ml-auto"
            >
              Next <FiChevronRight />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || isLoading}
              className="flex items-center gap-2 ml-auto"
            >
              Start Conversation
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MultiStepForm;
